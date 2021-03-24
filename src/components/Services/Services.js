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
      <div className="h-screen services items-center" id="service">
        <div className="mt-20 mx-20 2xl:mx-64">
        <div className="flex flex-row">
          <div className="grid mr-5 w-1/3 bg-white">
            <RegularService />
          </div>
          <div className="grid  mr-5 w-1/3 bg-white">
            <PremiumService />
          </div>
          <div className="grid  w-1/3 bg-white">
            <UltimateStrip />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Services;
