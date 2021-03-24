import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

function BrakeBleeding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="my-5 pt-20 lg:mx-64 xl:pr-40 md:mb-10 2xl:mb-40 text-left md:mx-40 mx-10 ">
        <h2 className="my-4 text-3xl font-bold">BRAKE BLEEDING</h2>
        <div className="italic">
          This is for all your Bikers who run Hydraulic disc brakes on your
          bikes, you know you've to get your brakes bleeded when the brakes feel
          spongy and the braking isn't sharp like it used to be. Bleeding is
          basically removing air bubbles from the brake fluid, during which the
          old brake fluid is drained out and is replaced with new brake fluid.
          To give you an insight we have two types of brake fluids in the
          market, DOT fluid and MINERAL oil, the model of your brake will tell
          us what fluid needs to be used. Re-bleeding will Extend the life of
          your brakes and keep it performing like new.{" "}
        </div>
        <a href="/#service">
          <button
            type="button"
            className="my-5 py-2 px-4 bg-red-600 rounded text-white font-bold text-xl hover:text-gray-800 hover:bg-red-200 hover:shadow"
          >
            BOOK SERVICE
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default BrakeBleeding;
