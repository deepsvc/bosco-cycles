import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

function DriveTrainService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="my-5 pt-20 lg:mx-64 xl:pr-40 md:mb-10 2xl:mb-40 text-left md:mx-40 mx-10 ">
        <h2 className="my-4 text-3xl font-bold">DRIVE TRAIN SERVICE</h2>
        <div className="italic">
          The Drivetrain of the bike consists of all the bits that help in
          propelling your bike forward. It can be called the heart of your bike,
          Keeping it nice and clean and lubricated is very important to keep it
          in top notch condition, we at Bicycle Solutions dismantle every part
          of the drivetrain, clean it with the necessary solutions and replace
          the parts which needs replacement and assemble it back together and
          lubricate it once on the bike.{" "}
        </div>
        <a href="/BookDriveTrainService">
          <button
            type="button"
            className="my-5 py-2 px-4 bg-red-600 rounded text-white font-bold text-xl hover:bg-black hover:shadow"
          >
            BOOK SERVICE
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default DriveTrainService;
