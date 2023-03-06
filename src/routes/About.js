import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import AboutImg from "../assets/night.jpg"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer";

function About (){
    return(
        <>
          <Navbar/>
          <Hero 
          className = "hero-mid"
          heroImg = {AboutImg}
          title = "About"
          btnClass = "hide"
          />
          <AboutUs/>
          <Footer/>
        </>
    )
}

export default About;
