/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function UltimateStrip() {
  return (
    <div className="flex flex-col">
      <div className="heading">
        <h1 className="serviceName text-2xl py-2">ULIMATE STRIP</h1>
      </div>
      <h1 className="text-white font-semibold p-1 text-3xl bg-gray-900">
          1800/-*
        </h1>
        <span className="text-xs">Price is Inclusive of GST</span>
      <div style={{height: "65vh"}} className="content px-3 h-11/12 overflow-auto">

        <p className="font-semibold pb-2">
          Recommended for a Rider who keeps his wheels moving all the time, this
          strip down makes sure your bikes' bearings are running smooth.
        </p>
        <p className="text-sm pb-2 text-left">
          If you race often or if you go on endurance rides, this is the service
          you should consider. Getting the Ultimate strip yearly once is
          recommended.
        </p>

        <p className="text-sm pb-2 text-left">
          We pick up your bike, Service it and drop it back in mint condition.
          Pickup and Drop charges included.
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

export default UltimateStrip;
