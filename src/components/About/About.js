import React, { Component } from "react";

import image1 from "../../assets/images/ardent-content.png";

class About extends Component {
  render() {
    return (
      <>
        <div
          className="text-left flex justify-center bg-gray-200 shadow-inner"
          id="about"
        >
          <div className="md:w-4/5 m-5">
            <div className="col-span-2 flex justify-center mb-5 md:hidden">
              <img alt="adreant pc" src={image1} />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="items-center grid md:grid-cols-5 gap-4 md:gap-0 flex flex-col md:flex-row">
                  <div className="hidden flex justify-end md:flex col-span-2 mr-10">
                    <img alt="adreant mobile" className="w-5/6" src={image1} />
                  </div>
                  <div className="col-span-3 flex flex-col md:text-left text-center">
                    <p className="text-lg italic pb-2">
                      <span className="font-bold">W</span>e are Ardent Lovers of
                      the Humble Bicycle!
                    </p>
                    <p className="text-lg italic pb-2">
                      We are genuine fast track service provider.
                    </p>
                    <p className="text-lg italic pb-2">
                      We Understand the hassle of getting bicycle serviced. From
                      taking your bike to a workshop and the long waiting time.
                    </p>
                    <p className="text-lg italic pb-2">
                      We are here to make sure you get the best of our service
                      at your doorstep thereby saving time and also letting you
                      observe the complete process.
                    </p>
                    <p className="text-lg italic pb-2">
                      We cater to all kinds of Bicycles!
                    </p>
                    <p className="text-lg italic pb-2">
                      Whether you're a kid riding your bicycle to school, a
                      commuter nipping through traffic, a roadie who does long
                      rides or a mountain biker who hits the trails!
                    </p>
                    <p className="text-lg italic font-semibold pb-2">
                      WE ARE HERE TO CATER FOR YOUR NEEDS!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
