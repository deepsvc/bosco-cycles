import React, { Component } from "react";

import PremiumService from "../BookServiceModal/PremiumService/PremiumService";
import RegularService from "../BookServiceModal/RegularService/RegularService";
import UltimateStrip from "../BookServiceModal/UltimateStrip/UltimateStrip";

import bg from "../../assets/images/servicebg.jpg";

class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lg:h-screen services items-center" id="service">
        <div className="mt-20 mx-10 md:mx-48 2xl:mx-72">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:mr-5 mb-5 transition duration-500 ease-in-out transform md:hover:scale-110 lg:mb-0 md:w-1/3 hover:bg-gray-50 hover:shadow-xl bg-white">
              <RegularService />
            </div>
            <div className="lg:mr-5 mb-5 transition duration-500 ease-in-out transform md:hover:scale-110 lg:mb-0 md:w-1/3 hover:bg-gray-50 hover:shadow-xl bg-white">
              <PremiumService />
            </div>
            <div className="mb-5 lg:mb-0 transition duration-500 ease-in-out transform md:hover:scale-110 md:w-1/3 hover:bg-gray-50 hover:shadow-xl bg-white">
              <UltimateStrip />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
