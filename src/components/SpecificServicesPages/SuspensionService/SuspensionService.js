import React, { useEffect } from "react";

import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

function SuspensionService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="my-5 pt-20 lg:mx-64 xl:pr-40 md:mb-10 2xl:mb-40 md:text-left text-center md:mx-40 mx-10 ">
        <h2 className="my-4 text-3xl font-bold">SUSPENSION SERVICE</h2>
        <div className="italic">
          For mountain bikers, we all know how important the suspension it is to
          feel your hands at the end of your ride, a well maintained suspension
          will make sure you don't have numb hands at the end of your trail
          ride. Servicing the same periodically is hence important, we open up
          the lowers, give it a nice wash, lubricate the necessary parts and
          leave it feeling fresh and nice again.{" "}
        </div>
        <a href="/BookSuspensionService">
          <button
            type="button"
            className="my-5 py-2 px-4 bg-red-600 rounded text-white font-bold text-xl hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl"
          >
            BOOK SERVICE
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default SuspensionService;
