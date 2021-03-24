/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function PremiumService() {
  return (
    <div className="flex flex-col">
      <div className="heading">
        <h1 className="serviceName text-2xl py-2">PREMIUM SERVICE</h1>
      </div>
      <h1 className="text-white font-semibold p-1 text-3xl bg-gray-900">
          1300/-*
        </h1>
        <span className="text-xs">Price is Inclusive of GST</span>
      <div style={{height: "65vh"}} className="content px-3 h-11/12 overflow-auto">

        <p className="font-semibold py-2"> Recommended for Regular Riders</p>
        <p className="text-sm py-2 text-left">
          Get your bike looking new and running smooth ! 6 months once would be
          an ideal time.
        </p>
        <p className="text-sm py-2 text-left">
          We pick up your bike, Service it and drop it back in mint condition.
          Pickup and drop charges included.
        </p>

        <div style={{ textAlign: "left" }}>
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            This service includes all elements of Regular Service +
          </p>
          <span style={{ color: "red" }}>»</span> Full Frame & Fork Clean
          <br />
          <span style={{ color: "red" }}>»</span> De-Greasing the Drive Train
          <br />
          <span style={{ color: "red" }}>»</span> Lubrication of the Drive Train
          <br />
          <span style={{ color: "red" }}>»</span> Hub Greasing & Adjusting
          <br />
          <span style={{ color: "red" }}>»</span> Polishing the Frame/Tyres
          <br /> <br />
        </div>
      </div>
      <div className="">
        <Link to="/book">
          <h1 className="text-white font-bold object-bottom p-2 text-2xl bg-gray-900">
            BOOK SERVICE
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default PremiumService;
