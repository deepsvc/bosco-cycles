/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function UltimateStrip() {
  return (
    <div className="px-2">
      <div className="heading container">
        <h1 className="serviceName">ULIMATE STRIP</h1>
      </div>
      <div className="content px-3">
        <h1 className="text-white font-semibold p-1 -mx-3 rounded text-4xl bg-gray-900">1800/-*</h1>
        <span style={{ fontSize: "0.8rem" }}>Price is Inclusive of GST</span>
        <p className="customPBold">
          {" "}
          We pick up your bike, Service it and drop it back in mint condition.
          Pickup and drop charges included.
        </p>
        <p>
          Recommended for a Rider who keeps his wheels moving all the time, this
          strip down makes sure you're bikes bearings are running smooth.
        </p>
        <p>
          If you race often or if you go on endurance rides, this is the service
          you should consider. Getting the Ultimate strip yearly once is
          recommended.
        </p>

        <div style={{ textAlign: "left" }}>
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            This includes all elements of Premium Service +
          </p>
          <span style={{ color: "red" }}>»</span> All Parts fully removed from
          the Frame and Cleaned
          <br />
          <span style={{ color: "red" }}>»</span> Hub Service - Strip, Clean &
          Re-Greased
          <br />
          <span style={{ color: "red" }}>»</span> Bottom Bracket Service &
          Thread Cleaned
          <br />
          <span style={{ color: "red" }}>»</span> Head Set Check & Re-Greased
          <br />
          <span style={{ color: "red" }}>»</span> Removal & Deep Clean of
          <br />
          <div
            style={{
              fontSize: "0.85rem",
              paddingLeft: "10px",
            }}
          >
            <span style={{ color: "red" }}>›</span> Chain, Cassette, Crank
            <br />
            <span style={{ color: "red" }}>›</span> Front & Rear (derailleur)
            <br />
            <span style={{ color: "red" }}>›</span> Brake Calipers
            <br />
            <span style={{ color: "red" }}>›</span> Wheels and Rotor (disc)
          </div>
          <span style={{ color: "red" }}>›</span> Anti-Seize Grease will be
          applied.
          <br /> <br />
        </div>


          <Link
          className=""
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

export default UltimateStrip;
