import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>

            <div className="tripcard">
                <TripData
                image = {Trip1}
                heading = "Trip In Indonesia"
                text = "A land gifted with pristine beaches, exotic water villas on serene islands, vibrant tribes and their cultural ethos. No! We are not talking about a fascinating dream but about Indonesian landscapes.There are many surreal places in Indonesia, and together they offer a mix of outlandish island wonders and spine-chilling adventures."
                />

                <TripData
                image = {Trip2}
                heading = "Trip In Malaysia"
                text = "Planning a trip to Malaysia? Shortlisting what to see and how to make the most of this sought-after vacation? Besides plenty of beautiful tourist attractions in Malaysia, there are a lot of fun, thrill and adventure, that you can indulge in. Don’t do cliché stuff, instead, discover some of the top things to do in Malaysia for a remarkable holiday."
                />

                <TripData
                image = {Trip3}
                heading = "Trip In France"
                text = "No French holiday can be complete without checking out country’s incredibly charming tourist attractions. These beautiful places to visit in France have been the muse to many poets and artists, and continue to be awe-inspiring cities and hubs from tourists from all over the world"
                />
            </div>
        </div>
    )
}

export default Trip;