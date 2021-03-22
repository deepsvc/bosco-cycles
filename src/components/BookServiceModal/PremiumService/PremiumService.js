/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function PremiumService() {
  return (
    <div className="flex flex-col">
      <div className="heading">
        <h1 className="serviceName">PREMIUM SERVICE</h1>
      </div>
      <div className="content px-3 h-full">
        <h1 className="text-white font-semibold p-1 -mx-3 text-4xl bg-gray-900">
          1300/-*
        </h1>
        <span style={{ fontSize: "0.8rem" }}>Price is Inclusive of GST</span>
        <p> Recommended for Regular Riders.</p>
        <p>
          Get your bike looking new and running smooth ! 6 months once would be
          an ideal time.
        </p>
        <p>
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
