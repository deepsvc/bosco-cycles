/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function PremiumService() {
  return (
    <div className="px-2">
      <div className="heading">
        <h1 className="serviceName">PREMIUM SERVICE</h1>
      </div>
      <div className="content px-3">
        <h1 className="text-white font-semibold p-1 -mx-3 rounded text-4xl bg-gray-900">1300/-*</h1>
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
          <Link
            to="/book"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <h1
              className="text-white font-semibold p-1 -mx-3 rounded text-4xl bg-gray-900 m-0"
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              BOOK SERVICE
            </h1>
          </Link>
      </div>
    </div>
  );
}

export default PremiumService;
