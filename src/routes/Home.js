import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import HeroImg from "../assets/12.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home (){
    return(
        <>
          <Navbar/>

          <Hero 
          className = "hero"
          heroImg = {HeroImg}
          title = "Your Journey Your Story"
          text = "Choose your favourite destination"
          btnText = "Travel Plan"
          url = "/"
          btnClass = "show"
          />

          <Destination/>
          <Trip/>
          <Footer/>
        </>
    )
}

export default Home;
