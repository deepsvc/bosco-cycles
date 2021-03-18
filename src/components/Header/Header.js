import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "video-react/dist/video-react.css";
import { Link } from "react-router-dom";

import vid from "../../assets/images/vid1.mp4";
import image1 from "../../assets/images/Header-image.jpg";
import image2 from "../../assets/images/Header-image-2.jpg";
import image3 from "../../assets/images/Header-image-3.jpg";

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
      <div className="h-screen">
        <Carousel
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
      </div>
    );
  }
}

export default Header;
