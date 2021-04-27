import React, { Component } from "react";
import { MapPin, PhoneCall, Mail, Facebook, Instagram } from "react-feather";
import SocialLogo from "social-logos";

class Footer extends Component {
  render() {
    return (
      <div className="flex lg:flex-row flex-col w-full justify-center items-center address">
        <iframe
          title="Map from Google Maps"
          className="lg:w-96 w-4/5 h-60 md:h-72 m-5 md:my-7 md:mr-20 lg:ml-20"
          width="100%"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.36004322427!2d77.5813913!3d13.0934817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa88c6ccb32c003da!2sBosco%20bicycle%20works!5e0!3m2!1sen!2sin!4v1619541846109!5m2!1sen!2sin"
        ></iframe>

        <div className="lg:w-96 w-4/5 text-left lg:mr-20">
          <span className="text-xl md:text-3xl text-white font-bold">
            REACH US AT
          </span>
          <div className="mt-2">
            <h5 className="my-3 flex flex-row text-white md:text-base text-sm font-semibold items-center">
              <div className="items-center grid grid-cols-10 gap-4 flex flex-row">
                <div className="col-span-1">
                  <Mail
                    color="white"
                    size="30"
                    strokeWidth="1.5"
                    className="mr-2"
                  />
                </div>
                <div className="col-span-9 text-left">
                  <span className="">info@boscobicycleworks.in</span>
                </div>
              </div>
            </h5>
            <h5 className="my-3 flex flex-row text-white md:text-base text-sm font-semibold items-center">
              <div className="items-center grid grid-cols-10 gap-4 flex flex-row">
                <div className="col-span-1">
                  <PhoneCall
                    color="white"
                    size="30"
                    strokeWidth="1.5"
                    className="mr-2"
                  />
                </div>
                <div className="col-span-9 text-left">
                  <span className="">+91 8904019840 / +91 9964288130</span>
                </div>
              </div>
            </h5>
            <h5 className="my-3 flex flex-row text-white md:text-base text-sm font-semibold items-center">
              <div className="items-center grid grid-cols-10 gap-4 flex flex-row">
                <div className="col-span-1">
                  <MapPin
                    color="white"
                    size="30"
                    strokeWidth="1.5"
                    className="mr-2"
                  />
                </div>
                <div className="col-span-9 text-left">
                  <span className="">
                    1428 EWS, 3rd STAGE, SANATERY CORE, next to Dr AGARWAL EYE
                    HOSPITAL, Yelahanka New Town, Bengaluru, Karnataka 560064
                  </span>
                </div>
              </div>
            </h5>
          </div>

          <div className="my-5">
            <span className="underline2"></span>
          </div>

          <div className="my-5 flex flex-row">
            <div className="mr-6 transition duration-500 ease-in-out transform md:hover:scale-110 text-white hover:shadow-xl">
              <a
                href="https://www.facebook.com/Bosco-bicycle-works-101175561846174/?ti=as"
                target="_blank"
              >
                <Facebook size="40" strokeWidth="1.5" />
              </a>
            </div>
            <div className="mr-6 transition duration-500 ease-in-out transform md:hover:scale-110 text-white hover:shadow-xl">
              <a
                href="https://api.whatsapp.com/send?phone=9964288130"
                target="_blank"
              >
                <SocialLogo
                  className="fill-current text-white"
                  icon="whatsapp"
                  size={40}
                />
              </a>
            </div>
            <div className="mr-6 transition duration-500 ease-in-out transform md:hover:scale-110 text-white hover:shadow-xl">
              <a
                href="https://www.instagram.com/boscobicycleworks/"
                target="_blank"
              >
                <Instagram size="40" strokeWidth="1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
