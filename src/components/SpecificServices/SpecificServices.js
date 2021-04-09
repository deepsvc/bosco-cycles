import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpecificServices extends Component {
  render() {
    return (
      <div className="h-auto flex flex-col pt-10 items-center">
        <h1 className="text-red-600 text-4xl md:text-4xl 2xl:text-5xl font-extrabold uppercase">
          Specific Service
        </h1>
        <div className="lg:w-3/4">
          <div className="md:mt-10 mt-5 md:flex-row grid grid-cols-2 md:flex flex-col lg:justify-around items-center">
            <Link className="transition duration-500 ease-in-out mx-5 md:mx-0 transform md:hover:scale-110" to="/BrakeBleeding">
              <div className="flex flex-col items-center">
                <div className="hidden md:flex gifHolder g4 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="gifHolder-phone md:hidden g4 shadow-xl mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-center text-lg lg:py-10 pb-7 font-bold">
                  BRAKE BLEEDING
                  <span className="text-base text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link className="transition duration-500 ease-in-out mx-5 md:mx-0 transform md:hover:scale-110" to="/WheelTuring">
              <div className="flex flex-col items-center">
                <div className="hidden md:flex gifHolder g2 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="gifHolder-phone md:hidden g2 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-center text-lg lg:py-10 pb-7 font-bold">
                  WHEEL TRUING
                  <span className="text-base text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link className="transition duration-500 ease-in-out mx-5 md:mx-0 transform md:hover:scale-110" to="/SuspensionService">
              <div className="flex flex-col items-center">
                <div className="hidden md:flex gifHolder g3 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="gifHolder-phone md:hidden g3 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-center text-lg lg:py-10 pb-7 font-bold">
                  SUSPENSION SERVICE
                  <span className="text-base text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link className="transition duration-500 ease-in-out mx-5 md:mx-0 transform md:hover:scale-110" to="/DriveTrainService">
              <div className="flex flex-col items-center">
                <div className="hidden md:flex gifHolder g1 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="gifHolder-phone md:hidden g1 shadow-xl md:mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-center text-lg lg:py-10 pb-7 font-bold">
                  DRIVE TRAIN SERVICE
                  <span className="text-base text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecificServices;
