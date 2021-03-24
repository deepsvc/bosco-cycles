import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpecificServices extends Component {
  render() {
    return (
      <div className="h-auto flex flex-col pt-20 items-center">
        <h1 className="text-red-600 text-5xl font-extrabold uppercase">
          Specific Service
        </h1>
        <div className="lg:w-3/4">
          <div className="mt-20  lg:flex-row grid lg:flex flex-col lg:justify-around items-center">
            <Link to="/BrakeBleeding">
              <div className="flex flex-row lg:flex-col items-center">
                <div className="gifHolder g4 shadow-xl mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-left lg:text-center text-xl py-10 font-semibold">
                  BRAKE BLEEDING
                  <span className="text-lg text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/WheelTuring">
              <div className="flex flex-row lg:flex-col items-center">
                <div className="gifHolder g2 shadow-xl mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-left lg:text-center text-xl py-10 font-semibold">
                  WHEEL TRUING
                  <span className="text-lg text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/SuspensionService">
              <div className="flex flex-row lg:flex-col items-center">
                <div className="gifHolder g3 shadow-xl mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-left lg:text-center text-xl py-10 font-semibold">
                  SUSPENSION SERVICE
                  <span className="text-lg text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/DriveTrainService">
              <div className="flex flex-row lg:flex-col items-center">
                <div className="gifHolder g1 shadow-xl mr-5 mb-5 lg:mr-0 lg:mb-0"></div>
                <div className="2xl:text-2xl text-left lg:text-center text-xl py-10 font-semibold">
                  DRIVE TRAIN SERVICE
                  <span className="text-lg text-red-600">
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
