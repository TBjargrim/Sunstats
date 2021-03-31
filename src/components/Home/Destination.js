import { useParams } from "react-router-dom"


function Destination() {
    const { temp, date, destination } = useParams();
    console.log({temp, date, destination})
    return (
        <>
            <h1>{destination}</h1>
            <p>{date}</p>
        </>)
}

export default Destination;