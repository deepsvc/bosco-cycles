import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import SpecificServices from "../../components/SpecificServices/SpecificServices"
import Testimonial from "../../components/Testimonial/Testimonial";

function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="overflow-hidden object-scale-down">
        <Header />
      </div>
      <HowItWorks />
      <About />
      <Services />
      <SpecificServices />
      <Testimonial />
    </div>
  );
}

export default Home;
