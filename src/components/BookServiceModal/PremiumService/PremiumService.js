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
      <span className="text-xs">*Price is Inclusive of GST</span>

      {/* For Normal Screens */}
      <div
        style={{ height: "60vh" }}
        className="hidden md:flex md:flex-col text-left text-xs content px-3 overflow-auto"
      >
        <p className="font-semibold py-2">Recommended for Regular Riders</p>
        <p className="pb-2">
          Get your bike looking new and running smooth ! 6 months once would be
          an ideal time.
        </p>
        <p className="pb-2">
          We pick up your bike, Service it and drop it back in mint condition.
          <br />
          **Pickup and drop charges extra.
        </p>

        <div className="pt-5 font-semibold pl-5 italic">
          <p className="font-bold">
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

      {/* For Smaller Screens */}
      <div className="md:hidden content px-3 overflow-auto">
        <p className="font-semibold py-2"> Recommended for Regular Riders</p>
        <p className="text-sm py-2 text-left">
          Get your bike looking new and running smooth ! 6 months once would be
          an ideal time.
        </p>
        <p className="text-sm py-2 text-left">
          We pick up your bike, Service it and drop it back in mint condition.
          <br />
          **Pickup and drop charges extra.
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

      <div className="hidden md:grid">
        <Link to="/BookPremiumService">
          <h1 className="text-white font-bold object-bottom p-2 text-2xl bg-gray-900">
            BOOK SERVICE
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default PremiumService;
