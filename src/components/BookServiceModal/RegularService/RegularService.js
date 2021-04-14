/* React Imports */
import React from "react";

import { Link } from "react-router-dom";

function RegularService() {
  return (
    <div className="flex flex-col">
      <div className="heading">
        <h1 className="serviceName text-2xl py-2">REGULAR SERVICE</h1>
      </div>
      <h1 className="text-white font-semibold p-1 text-3xl bg-gray-900">
        650/-*
      </h1>
      <span className="text-xs">*Price is Inclusive of GST</span>

      {/* For Normal Screens */}
      <div
        style={{ height: "60vh" }}
        className="hidden text-xs text-left md:flex md:flex-col content px-3 overflow-auto"
      >
        <p className="font-semibold py-2">Recommended for Occasional Riders.</p>
        <p className="pb-2">
          Get your bike looking new and running smooth! Once in 6 months would
          be an ideal time.
        </p>
        <p className="pb-2">
          A Quick tune-up which covers all the basic checks to keep you on the
          move!
        </p>
        <p className="font-bold">
          Our Trusted technician will drop-In and service your bicycle.{" "}
        </p>
        <div className="pt-5 font-semibold pl-5 italic">
          <p className="text-sm font-bold text-red-600">What all is done?</p>
          <span style={{ color: "red" }}>»</span> All bolts checked and torqued
          <br />
          <span
            style={{
              fontSize: "0.65rem",
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

      {/* For Smaller Screens */}
      <div className="md:hidden content px-3 overflow-auto">
        <p className="font-semibold py-2">Recommended for Occasional Riders.</p>
        <p className="text-sm pb-2 text-left">
          Get your bike looking new and running smooth! Once in 6 months would
          be an ideal time.
        </p>
        <p className="text-sm pb-2 text-left">
          We pick up your bike, Service it and drop it back in mint condition.
          Pickup and drop charges included.
        </p>
        <p className="text-sm pb-2 text-left">
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
          <br />
          <br />
        </div>
      </div>

      <div className="">
        <Link to="/BookRegularService">
          <h1 className="text-white font-bold p-2 bottom-0 text-2xl bg-gray-900">
            BOOK SERVICE
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default RegularService;
