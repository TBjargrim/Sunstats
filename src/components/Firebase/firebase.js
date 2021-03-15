import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyA8DAcWE9m5MEUnsY5FRtQwk5aVSA3qy7c",
  authDomain: "firebae-app-5e267.firebaseapp.com",
  databaseURL: "https://firebae-app-5e267-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firebae-app-5e267",
  storageBucket: "firebae-app-5e267.appspot.com",
  messagingSenderId: "203487911198",
  appId: "1:203487911198:web:0d85acf387bf4b502dfd0f"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */
    this.serverValue = app.database.ServerValue;

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
  // *** Message API ***
  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');

}

export default Firebase;
