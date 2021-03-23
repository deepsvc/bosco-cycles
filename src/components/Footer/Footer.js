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
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      setShowOptions: false,
    };
  }

  render() {
    return (
      <div className="h-auto flex flex-row justify-center items-center address">
        <iframe
          className="w-5/12 m-20"
          width="100%"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Yelahanka,bangalore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>

        <div className="w-5/12 ml-20 text-left">
          <span className="text-4xl text-white font-bold">REACH US AT</span>
          <div className="mt-5">
            <h5 className="my-3 flex flex-row text-white text-xl font-semibold items-center">
              <Mail color="white" size="30" strokeWidth="2" className="mr-2" />
              support@boscobicycleworks.com
            </h5>
            <h5 className="my-3 flex flex-row text-white text-xl font-semibold items-center">
              <PhoneCall
                color="white"
                size="30"
                strokeWidth="2"
                className="mr-2"
              />
              +91 8904019840 / +91 9964288130
            </h5>
            <h5 className="mmy-3 flex flex-row text-white text-xl font-semibold items-center">
              <MapPin
                color="white"
                size="30"
                strokeWidth="2"
                className="mr-2"
              />
              Yelahanka, Karnataka, Bangalore 560093
            </h5>
          </div>
          <div class="my-10 flex flex-row">
            <div className="mr-6 text-white hover:shadow-xl hover:text-red-200">
              <a
                href="https://www.facebook.com/Bosco-bicycle-works-101175561846174/?ti=as"
                target="_blank"
              >
                <Facebook
                  size="40"
                  strokeWidth="2"

                />
              </a>
            </div>
            <div className="mr-6 text-white hover:shadow-xl hover:text-red-200">
              <a
                href="https://api.whatsapp.com/send?phone=9964288130"
                target="_blank"
              >
                <MessageCircle
                  size="40"
                  strokeWidth="2"
                />
              </a>
            </div>
            <div className="mr-6 text-white hover:shadow-xl hover:text-red-200">
              <a
                href="https://www.instagram.com/boscobicycleworks/"
                target="_blank"
              >
                <Instagram
                  size="40"
                  strokeWidth="2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
