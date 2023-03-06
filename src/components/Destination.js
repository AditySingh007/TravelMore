import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/mountains.jpg";
import Mountain4 from "../assets/4.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () =>{
    return (
        <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot within a time frame</p>
 
        <DestinationData
        cName = "first-des"
        heading = "Taal Volcano, Batangas"
        text = "Taal Lake, lake in southwestern Luzon, Philippines, occupying a volcanic crater with a maximum width of 15 miles (24 km), at less than 10 feet (3 metres) above sea level. It has an area of 94 square miles (244 square km) and is the country’s third largest lake. Within the lake rises Volcano Island (984 feet [300 metres]), which itself contains another small crater (Yellow Lake). Volcano Island, called Taal Volcano, has erupted more than 34 times since 1572, most recently in 2020."
        img1 = {Mountain1}
        img2 = {Mountain2}
        />

        <DestinationData
        cName = "second-des"
        heading = "Mt. Daguldul, Batangas"
        text = "Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1 = {Mountain3}
        img2 = {Mountain4}
        />
        
        </div>
    )
}

export default Destination;