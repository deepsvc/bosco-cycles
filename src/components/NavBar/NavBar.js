/* React Imports */
import React, { Component } from "react";
import SkyLight from "react-skylight";

/* Local Imports */
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import RegularService from "./../../components/BookServiceModal/RegularService/RegularService";
import UltimateStrip from "./../../components/BookServiceModal/UltimateStrip/UltimateStrip";
import PremiumService from "./../../components/BookServiceModal/PremiumService/PremiumService";

/* Third Party Imports */
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      setShowOptions: false,
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      return { setShowOptions: !prevState.setShowOptions };
    });
  }

  render() {
    const smallScreenMenuStyle =
      "border pl-4 p-2 my-2 text-gray-50 text-xl font-bold hover:text-red-500";
    const bigScreenMenuStyle =
      "block text-gray-50 text-md font-bold ml-auto px-6 py-6 hover:text-red-500 hover:text-xl";

    var MainModal = {
      minHeight: "150px",
      maxHeight: "320px",
    };

    var DoorStep = {
      marginTop: "-420px",
      minWidth: "350px",
      maxWidth: "350px",
      left: "60%",
    };

    var CollectDrop = {
      marginTop: "-420px",
      minWidth: "350px",
      maxWidth: "700px",
      left: "55%",
    };

    return (
      <div className="flex">
        <nav className="flex-grow w-full bg-gray-200 opc h-auto shadow-md fixed Graphik-Regular-Web z-10">
          <div className="flex justify-around items-center">
            <div className="w-40">
              <img tabIndex="0" alt="Accenture Logo" src={logo} />
            </div>

            {/* NavBar on Regular Sized Screens */}
            <>
              <div className="hidden Graphik-Regular-Web md:flex md:items-center">
                <div className="cool-link">
                  <a aria-current="page" href="/#about">
                    <div className={bigScreenMenuStyle}>About Us</div>
                  </a>
                </div>

                <div className="cool-link">
                  <a aria-current="page" href="/#about">
                    <div className={bigScreenMenuStyle}>Services</div>
                  </a>
                </div>

                <div className="cool-link">
                  <NavLink
                    activeClassName="text-purple-600"
                    className={bigScreenMenuStyle}
                    to="/reports"
                    exact
                  >
                    FAQs
                  </NavLink>
                </div>

                <div>
                  <button
                    className="bg-red-600 text-gray-50 font-bold rounded border-b-2 border-purple-300 hover:bg-purple-100 hover:text-red-500 shadow-md py-2 px-2 sm:px-6 items-center m-2 sm:m-3"
                    onClick={() => this.simpleDialog.show()}
                  >
                    <span>Book A Service</span>
                  </button>
                </div>
              </div>
            </>
            {/* Hamburger Menu Butoon */}
            <div className="block pr-2 md:hidden flex items-center text-gray-600">
              <HamburgerMenu
                isOpen={this.state.setShowOptions}
                menuClicked={this.handleClick.bind(this)}
                width={25}
                height={20}
                strokeWidth={3}
                rotate={0}
                color="#F5F5F5"
                borderRadius={2}
                animationDuration={0.2}
              />
            </div>
          </div>

          {/* NavBar on Smaller Screens */}
          <div className={this.state.setShowOptions ? "md:hidden" : "hidden"}>
            <div className="my-4 flex flex-col items-center">
              <>
                <div className="w-full text-center px-4 flex flex-col">
                  <NavLink
                    activeclassname="active-link"
                    className={smallScreenMenuStyle}
                    to="/clients"
                    onClick={this.handleClick.bind(this)}
                    exact
                  >
                    About Us
                  </NavLink>

                  <NavLink
                    activeclassname="active-link"
                    className={smallScreenMenuStyle}
                    to="/reports"
                    onClick={this.handleClick.bind(this)}
                    exact
                  >
                    Services
                  </NavLink>

                  <a
                    className={smallScreenMenuStyle}
                    href="https://alm.accenture.com/wiki/display/WADEFPEO/WADE+Home"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.handleClick.bind(this)}
                  >
                    FAQs
                  </a>
                  <div>
                    <button
                      className="bg-red-600 text-gray-50 font-bold rounded border-b-2 border-purple-300 hover:bg-purple-100 hover:text-red-500 shadow-md py-2 px-2 sm:px-6 items-center m-2 sm:m-3"
                      onClick={() => this.simpleDialog.show()}
                    >
                      <span>Book A Service</span>
                    </button>
                  </div>
                </div>

                {/* NavBar Close Button */}
                <div className="pt-5 text-center">
                  <button
                    onClick={this.handleClick.bind(this)}
                    className="text-gray-800"
                  >
                    <svg
                      className="w-full fill-current h-10 items-center"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
                    </svg>
                  </button>
                </div>
              </>
            </div>
          </div>
        </nav>

        <SkyLight
          hideOnOverlayClicked
          dialogStyles={MainModal}
          ref={(ref) => (this.simpleDialog = ref)}
        >
          <div className="text-4xl divide-y divide-fuchsia-300 font-medium pb-2">
            Book A Service
          </div>

          <div>
            <span className="underline1"></span>
          </div>

          <button
            className="bg-red-600 text-gray-50 font-bold rounded border-b-2 border-red-700 hover:bg-gray-100 hover:text-red-500 shadow-md py-2 px-2 sm:px-6 items-center m-2 sm:m-3"
            onClick={() => {
              this.simpleDialog.hide();
              this.simpleDialog1.show();
            }}
          >
            Door Step Service
          </button>

          <button
            className="bg-red-600 text-gray-50 font-bold rounded border-b-2 border-red-700 hover:bg-gray-100 hover:text-red-500 shadow-md py-2 px-2 sm:px-6 items-center m-2 sm:m-3"
            onClick={() => {
              this.simpleDialog2.show();
              this.simpleDialog.hide();
            }}
          >
            Collect & Return
          </button>

          <button
            className="bg-red-600 text-gray-50 font-bold rounded border-b-2 border-red-700 hover:bg-gray-100 hover:text-red-500 shadow-md py-2 px-2 sm:px-6 items-center m-2 sm:m-3"
            onClick={() => {
              this.simpleDialog3.show();
              this.simpleDialog.hide();
            }}
          >
            Book a Custom Paint Job
          </button>

          <div>
            <span className="underline1"></span>
          </div>

          <button
            className="bg-gray-50 text-gray-500 font-bold rounded border-b-2 border-gray-100 hover:bg-gray-200 hover:text-red-500 shadow-md py-2 px-2 sm:px-6 items-center m-2 sm:m-3"
            onClick={() => this.simpleDialog.hide()}
          >
            Close
          </button>
        </SkyLight>

        <SkyLight
          hideOnOverlayClicked
          dialogStyles={DoorStep}
          ref={(ref) => (this.simpleDialog1 = ref)}
        >
          <div className="text-2xl divide-y divide-fuchsia-300 font-medium pb-2">
            Door Step Service
          </div>

          <div className="pb-2">
            <span className="underline1"></span>
          </div>

          <RegularService />
        </SkyLight>

        <SkyLight
          hideOnOverlayClicked
          dialogStyles={CollectDrop}
          ref={(ref) => (this.simpleDialog2 = ref)}
        >
          <div className="text-2xl divide-y divide-fuchsia-300 font-medium pb-2">
            Door Step Service
          </div>

          <div className="pb-2">
            <span className="underline1"></span>
          </div>
          <div className="grid grid-flow-col">
            <PremiumService />
            <div
              style={{
                borderLeft: "2px solid grey",
                height: "100%",
                position: "relative",
                left: "50%",
                top: "0",
              }}
            ></div>
            <UltimateStrip />
          </div>
        </SkyLight>
      </div>
    );
  }
}

export default NavBar;