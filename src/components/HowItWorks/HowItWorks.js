import React, { Component } from "react";

import image1 from "../../assets/images/1.gif";
import image2 from "../../assets/images/2.gif";
import image3 from "../../assets/images/3.gif";
import image4 from "../../assets/images/4.gif";
import image5 from "../../assets/images/5.gif";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="md:w-4/5 md:ml-16">
          <div className="flex lg:flex-row flex-col">
            <div className="hidden lg:flex flex-row items-center">
              <div className="bg-red-600 h-5/6 w-80 p-4 flex items-center text-center shadow-xl">
                <span className="m-auto font-family-apple-system text-gray-50 text-7xl howitworks font-bold">
                  HOW
                  <br />
                  IT
                  <br />
                  WORKS
                </span>
              </div>
            </div>

            <h1 className="text-red-600 lg:hidden text-4xl my-5 font-extrabold uppercase">
              How it Works
            </h1>

            <div className="flex items-center md:w-4/5 md:ml-20 mx-12 md:mt-5 xs:my-12">
              <div className="flex flex-col">
                <div className="items-center grid grid-cols-5 gap-4 md:gap-0 flex flex-row pb-5">
                  <div className="col-span-1">
                    <img className="md:w-3/5" src={image1} />
                  </div>
                  <div className="col-span-4 md:-ml-8 flex flex-col text-left">
                    <span className="font-bold text-lg">
                      SCHEDULE A SERVICE
                    </span>
                    <span className="text-sm">
                      Plan a service, book a slot at your convenience. We will
                      be happy to serve you.
                    </span>
                  </div>
                </div>

                <div className="items-center grid grid-cols-5 gap-4 flex flex-row pb-5">
                  <div className="col-span-1">
                    <img className="md:w-3/5" src={image2} />
                  </div>
                  <div className="col-span-4 md:-ml-8 flex flex-col text-left">
                    <span className="font-bold text-lg">
                      COOL & CLEAR SERVICES
                    </span>
                    <span className="text-sm">
                      Upon booking a slot, we either provide Door Step Service;
                      or Pick & Drop Service on the type of service you choose.
                    </span>
                  </div>
                </div>

                <div className="items-center grid grid-cols-5 gap-4 flex flex-row pb-5">
                  <div className="col-span-1">
                    <img className="md:w-3/5" src={image3} />
                  </div>
                  <div className="col-span-4 md:-ml-8 flex flex-col text-left">
                    <span className="font-bold text-lg">LOYALTY</span>
                    <span className="text-sm">
                      We are a passionate team of cyclist, who enjoy working on
                      bike, there by assuring best services with safe return.
                    </span>
                  </div>
                </div>

                <div className="items-center grid grid-cols-5 gap-4 flex flex-row pb-5">
                  <div className="col-span-1">
                    <img className="md:w-3/5" src={image4} />
                  </div>
                  <div className="col-span-4 md:-ml-8 flex flex-col text-left">
                    <span className="font-bold text-lg">ASSURANCE</span>
                    <span className="text-sm">
                      We promise to deliver within 48-72 Hours.
                    </span>
                  </div>
                </div>

                <div className="items-center grid grid-cols-5 gap-4 flex flex-row pb-5">
                  <div className="col-span-1">
                    <img className="md:w-3/5" src={image5} />
                  </div>
                  <div className="col-span-4 md:-ml-8 flex flex-col text-left">
                    <span className="font-bold text-lg">EXPRESS SERVICE</span>
                    <span className="text-sm">
                      24 Hour Fast Tracked and quick laned services for
                      emergencies. (**Charges Apply)
                    </span>
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

export default HowItWorks;
