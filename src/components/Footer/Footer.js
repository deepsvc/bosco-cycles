import React, { Component } from "react";
import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
} from "react-feather";

class Footer extends Component {
  render() {
    return (
      <div className="flex lg:flex-row flex-col w-full justify-center items-center address">
        <iframe
          className="lg:w-5/12 w-4/5 h-60 md:h-72 m-5 lg:mx-20"
          width="100%"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Yelahanka,bangalore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>

        <div className="lg:w-5/12 w-4/5 text-left">
          <span className="text-xl md:text-3xl text-white font-bold">
            REACH US AT
          </span>
          <div className="mt-5">
            <h5 className="my-3 flex flex-row text-white md:text-base text-sm font-semibold items-center">
              <Mail color="white" size="30" strokeWidth="2" className="mr-2" />
              support@boscobicycleworks.com
            </h5>
            <h5 className="my-3 flex flex-row text-white md:text-base text-sm font-semibold items-center">
              <PhoneCall
                color="white"
                size="30"
                strokeWidth="2"
                className="mr-2"
              />
              +91 8904019840 / +91 9964288130
            </h5>
            <h5 className="mmy-3 flex flex-row text-white md:text-base text-sm font-semibold items-center">
              <MapPin
                color="white"
                size="30"
                strokeWidth="2"
                className="mr-2"
              />
              Yelahanka, Karnataka, Bangalore 560093
            </h5>
          </div>

          <div className="my-5 md:mr-32">
            <span className="underline2"></span>
          </div>

          <div className="my-5 flex flex-row">
            <div className="mr-6 text-white hover:shadow-xl hover:text-red-200">
              <a
                href="https://www.facebook.com/Bosco-bicycle-works-101175561846174/?ti=as"
                target="_blank"
              >
                <Facebook size="40" strokeWidth="2" />
              </a>
            </div>
            <div className="mr-6 text-white hover:shadow-xl hover:text-red-200">
              <a
                href="https://api.whatsapp.com/send?phone=9964288130"
                target="_blank"
              >
                <MessageCircle size="40" strokeWidth="2" />
              </a>
            </div>
            <div className="mr-6 text-white hover:shadow-xl hover:text-red-200">
              <a
                href="https://www.instagram.com/boscobicycleworks/"
                target="_blank"
              >
                <Instagram size="40" strokeWidth="2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
