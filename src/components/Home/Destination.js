import { useParams } from "react-router-dom"
import { CustomCollectedData, cityHistoric } from '../CachedData/TestCollectedData';


function Destination() {
    const { temp, date, destination } = useParams();
    console.log({ temp, date, destination })
    //let allYears = cityHistoric[destination];
    return (
        <>
            <h1>{destination}</h1>
            <p>{date}</p>
            <CustomCollectedData city={destination} data={cityHistoric[destination]} />
        </>)
}

export default Destination;