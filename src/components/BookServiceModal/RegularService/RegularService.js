/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function RegularService() {
  return (
    <div>
      <div className="heading container">
        <h1 className="serviceName">REGULAR SERVICE</h1>
      </div>
      <div className="content px-3">
        <h1 className="text-white font-semibold p-1 -mx-3 text-4xl bg-gray-900">
          700/-*
        </h1>
        <span style={{ fontSize: "0.8rem" }}>Price is Inclusive of GST</span>
        <p>Recommended for Occasional Riders.</p>
        <p>
          Get your bike looking new and running smooth! Once in 6 months would
          be an ideal time.
        </p>
        <p>
          We pick up your bike, Service it and drop it back in mint condition.
          Pickup and drop charges included.
        </p>
        <p>
          A Quick tune-up which covers all the basic checks to keep you on the
          move!
        </p>
        <p className="customPBold">
          Our Trusted technician will drop-In and service your bicycle.{" "}
        </p>
        <div style={{ textAlign: "left", paddingLeft: "10px" }}>
          <p
            style={{
              color: "rgb(234, 13, 41)",
              fontSize: "1.25rem",
              fontWeight: "900",
            }}
          >
            What all is done?
          </p>
          <span style={{ color: "red" }}>»</span> All bolts checked and torqued
          <br />
          <span
            style={{
              fontSize: "0.85rem",
              paddingLeft: "10px",
            }}
          >
            (According to manufacturer standards)
          </span>
          <br />
          <span style={{ color: "red" }}>»</span> Wheel truing
          <br />
          <span style={{ color: "red" }}>»</span> Gear tune-up
          <br />
          <span style={{ color: "red" }}>»</span> Brake adjustment
          <br />
          <span style={{ color: "red" }}>»</span> Bottom bracket check
          <br />
          <span style={{ color: "red" }}>»</span> Chain Lubrication
          <br />
          <span style={{ color: "red" }}>»</span> Headset check-up/ adjust
          <br />
          <span style={{ color: "red" }}>»</span> Hanger alignment
          <br />
          <span style={{ color: "red" }}>»</span> Tyre inspection and pressure
          <br />
          <span style={{ color: "red" }}>»</span> Clean up of the bike
          <br /> <br /> <br />
        </div>
      </div>
      <div className="">
          <Link to="/book">
            <h1 className="text-white font-bold p-2 bottom-0 text-2xl bg-gray-900">
              BOOK SERVICE
            </h1>
          </Link>
        </div>
    </div>
  );
}

export default RegularService;
