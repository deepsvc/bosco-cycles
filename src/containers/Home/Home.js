import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

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
    </div>
  );
}

export default Home;
