import React, { useEffect } from "react";

import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

function WheelTurning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="my-5 pt-20 lg:mx-64 xl:pr-40 md:mb-10 2xl:mb-40 md:text-left text-center md:mx-40 mx-10 ">
        <h2 className="my-4 text-3xl font-bold">WHEEL TRUING</h2>
        <div className="italic">
          Wheel Truing is a very important maintenance job which needs to be
          periodically done irrespective of the type of bi-cycle, as the wheels
          are the contact points with the ground and these are the ones that
          take the beatings of the rough roads, trails, potholes and jumps.
          Truing the wheels is basically tensioning the nipples just right so as
          to leave the wheel aligned.{" "}
        </div>
        <a href="/BookWheelTuring">
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

export default WheelTurning;
