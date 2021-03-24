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
        <div className="mt-20 mx-10 2xl:mx-64">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:mr-5 mb-5 lg:mb-0 lg:w-1/3 bg-white">
            <RegularService />
          </div>
          <div className="lg:mr-5 mb-5 lg:mb-0 lg:w-1/3 bg-white">
            <PremiumService />
          </div>
          <div className="lg:w-1/3 mb-5 lg:mb-0 bg-white">
            <UltimateStrip />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Services;
