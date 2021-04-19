import app from "firebase/app";
import "firebase/auth";
import "firebase/database";


const config = {
apiKey: "AIzaSyDGRF2yG_WV33xnps63xNk8pp8oEyhxyHE",
  authDomain: "sunstats-d0ceb.firebaseapp.com",
  databaseURL: "https://sunstats-d0ceb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sunstats-d0ceb",
  storageBucket: "sunstats-d0ceb.appspot.com",
  messagingSenderId: "150073564142",
  appId: "1:150073564142:web:dc20a4cb9ddeb522d6ccff"
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
