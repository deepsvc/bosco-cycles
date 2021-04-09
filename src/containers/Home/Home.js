import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import SpecificServices from "../../components/SpecificServices/SpecificServices";
import Testimonial from "../../components/Testimonial/Testimonial";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Header />
      <div className="flex justify-center">
        <HowItWorks />
      </div>
      <About />
      <Services />
      <SpecificServices />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
