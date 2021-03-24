import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpecificServices extends Component {
  render() {
    return (
      <div className="h-auto flex pt-20 flex-col items-center">
        <h1 className="text-red-600 text-5xl font-extrabold uppercase">
          Specific Service
        </h1>
        <div className="w-3/4">
          <div className="mt-20 flex flex-row justify-around items-center">
            <Link to="/BrakeBleeding">
              <div>
                <div className="gifHolder g4 shadow-xl"></div>
                <div className="2xl:text-2xl text-xl py-10 font-semibold">
                  BRAKE BLEEDING
                  <span className="text-lg text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/WheelTuring">
              <div>
                <div className="gifHolder g2 shadow-xl"></div>
                <div className="2xl:text-2xl text-xl py-10 font-semibold">
                  WHEEL TRUING
                  <span className="text-lg text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/SuspensionService">
              <div>
                <div className="gifHolder g3 shadow-xl"></div>
                <div className="2xl:text-2xl text-xl py-10 font-semibold">
                  SUSPENSION SERVICE
                  <span className="text-lg text-red-600">
                    <br />
                    Read More
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/DriveTrainService">
              <div>
                <div className="gifHolder g1 shadow-xl"></div>
                <div className="2xl:text-2xl text-xl py-10 font-semibold">
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
