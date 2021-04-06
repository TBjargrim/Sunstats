import { useParams } from "react-router-dom"
import { Avarage } from "../CachedData/Avarage";
import { cityHistoric } from '../CachedData/TestHumidity';
import TestHumidity from '../CachedData/TestHumidity'
import TestTemp from '../CachedData/TestTemp'
import TestBubble from "../CachedData/TestBubble";

function Destination() {
    const { temp, date, destination } = useParams();
    // console.log({ temp, date, destination })
    //let allYears = cityHistoric[destination];
    return (
        <>
            <h1>{destination}</h1>
            <p>{date}</p>

            <TestTemp city={destination} data={cityHistoric[destination]} />
            <TestHumidity city={destination} data={cityHistoric[destination]} />
            <TestBubble date={date} city={destination} data={cityHistoric[destination]} />
        </>)
}

export default Destination;