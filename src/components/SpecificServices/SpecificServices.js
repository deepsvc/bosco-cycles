import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpecificServices extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="h-auto flex pt-20 flex-col items-center">
        <h1 className="text-red-600 text-5xl font-extrabold uppercase">
          Specific Service
        </h1>
        <div className="w-3/4">
          <div className="mt-20 flex flex-row justify-around items-center">
            <Link>
              <div>
                <div className="gifHolder g4 shadow-xl"></div>
                <div className="text-2xl py-10 font-semibold">
                  BRAKE BLEEDING
                </div>
              </div>
            </Link>
            <Link>
              <div>
                <div className="gifHolder g2 shadow-xl"></div>
                <div className="text-2xl py-10 font-semibold">WHEEL TRUING</div>
              </div>
            </Link>
            <Link>
              <div>
                <div className="gifHolder g3 shadow-xl"></div>
                <div className="text-2xl py-10 font-semibold">
                  SUSPENSION SERVICE
                </div>
              </div>
            </Link>
            <Link>
              <div>
                <div className="gifHolder g1 shadow-xl"></div>
                <div className="text-2xl py-10 font-semibold">
                  DRIVE TRAIN SERVICE
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
