import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "video-react/dist/video-react.css";
import { Link } from "react-router-dom";

import vid from "../../assets/images/vid-pc.mp4";
import vidPhone from "../../assets/images/vid-phone.mp4";
import image1 from "../../assets/images/header-1.jpg";
import image2 from "../../assets/images/header-2.jpg";
import image3 from "../../assets/images/header-3.jpg";

import smimage1 from "../../assets/images/HeaderSM-1.jpg";
import smimage2 from "../../assets/images/HeaderSM-2.jpg";
import smimage3 from "../../assets/images/HeaderSM-3.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      setShowOptions: false,
    };
  }

  render() {
    return (
      <div className="h-full">
        {/* For Normal Screen */}
        <Carousel
          className="hidden md:flex"
          autoPlay={true}
          interval={12000}
          infiniteLoop={true}
          stopOnHover={false}
          useKeyboardArrows={true}
          showThumbs={false}
        >
          <div className="object-cover">
            <Player
              loop={true}
              playsInline
              autoPlay
              muted
              bigPlayButton={false}
            >
              <source src={vid} />
              <ControlBar autoHide={true} />
            </Player>
          </div>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
        </Carousel>

        {/* For Smaller Screen */}
        <Carousel
          className="md:hidden"
          autoPlay={true}
          interval={14000}
          infiniteLoop={true}
          stopOnHover={false}
          useKeyboardArrows={true}
          showThumbs={false}
          showArrows={false}
        >
          <div className="object-cover">
            <Player
              loop={true}
              playsInline
              autoPlay
              muted
              bigPlayButton={false}
            >
              <source src={vidPhone} />
              <ControlBar autoHide={true} />
            </Player>
          </div>
          <div>
            <img src={smimage1} />
          </div>
          <div>
            <img src={smimage2} />
          </div>
          <div>
            <img src={smimage3} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Header;
