import React, { Component } from "react";
import { Link } from "react-router-dom";

import PremiumService from "../BookServiceModal/PremiumService/PremiumService";
import RegularService from "../BookServiceModal/RegularService/RegularService";
import UltimateStrip from "../BookServiceModal/UltimateStrip/UltimateStrip";

class Services extends Component {
  render() {
    return (
      <div className="services items-center">
        <div className="mt-5 md:mt-12 md:my-16 mx-3 xl:mx-56 2xl:mx-80">
          <div className="flex md:flex-row flex-col">
            <div className="md:mr-5 mb-5 lg:mb-0 transition duration-500 ease-in-out transform md:hover:scale-y-110 md:w-1/3 hover:bg-gray-50 hover:shadow-xl bg-white">
              <RegularService />
              <div id="premiumserv"></div>
              <div className="md:hidden">
                <Link to="/BookRegularService">
                  <h1 className="text-white font-bold p-2 bottom-0 text-2xl bg-gray-900">
                    BOOK SERVICE
                  </h1>
                </Link>
              </div>
              <div id="premiumserv"></div>
            </div>
            <div className="md:mr-5 mb-5 lg:mb-0 transition duration-500 ease-in-out transform md:hover:scale-y-110 md:w-1/3 hover:bg-gray-50 hover:shadow-xl bg-white">
              <PremiumService />
              <div id="ultimateserv"></div>
              <div className="md:hidden">
                <Link to="/BookPremiumService">
                  <h1 className="text-white font-bold object-bottom p-2 text-2xl bg-gray-900">
                    BOOK SERVICE
                  </h1>
                </Link>
              </div>
            </div>
            <div className="mb-5 lg:mb-0 transition duration-500 ease-in-out transform md:hover:scale-y-110 md:w-1/3 hover:bg-gray-50 hover:shadow-xl bg-white">
              <UltimateStrip />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
