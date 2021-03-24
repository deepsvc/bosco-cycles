import React, { Component, setState, state } from "react";
import { Player, ControlBar } from "video-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "video-react/dist/video-react.css";
import { Link } from "react-router-dom";

import vid from "../../assets/images/vid.mp4";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      message: null,
      errors: {
        name: "",
        email: "",
        phone: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const validPhone = RegExp(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i
    );

    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "Full Name must be 5 characters long!" : value;
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? value
          : "Email is not valid!";
        break;
      case "phone":
        errors.phone = validPhone.test(value)
          ? value
          : "Phone No is not valid!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  handleSubmit = (event) => {
    const validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    };

    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    return (
      <div
        className="flex lg:flex-row flex-col bg-gray-800 shadow-inner justify-center items-center"
        id="contact"
      >
        <div className="lg:w-5/12 w-4/5">
          <h1 className="text-white pt-20 text-3xl font-semibold uppercase">
            Make an Enquiry
          </h1>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={this.handleSubmit}
          >
            <input
              className="placeholder-gray-500 my-5 py-2 px-2 lg:w-3/4 w-11/12 rounded placeholder-opacity-50"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Your Name"
              onChange={(event) => this.handleChange(event, "name")}
            />

            <input
              className="placeholder-gray-500 my-5 py-2 px-2 lg:w-3/4 w-11/12 rounded placeholder-opacity-50"
              type="text"
              name="phone"
              value={this.state.phone}
              placeholder="Your Number"
              onChange={(event) => this.handleChange(event, "phone")}
            />

            <input
              className="placeholder-gray-500 my-5 py-2 px-2 lg:w-3/4 w-11/12 rounded placeholder-opacity-50"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Your Email"
              onChange={(event) => this.handleChange(event, "email")}
            />

            <textarea
              className="placeholder-gray-500 my-5 py-2 px-2 lg:w-3/4 w-11/12 rounded placeholder-opacity-50"
              type="text"
              name="message"
              value={this.state.message}
              placeholder="Message"
              onChange={(event) => this.handleChange(event, "message")}
            />

            <input
              className="my-5 py-2 px-2 w-1/4 bg-red-600 rounded text-white text-xl"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="lg:w-5/12 w-4/5 lg:m-20 mt-5 mb-12">
          <Player loop={true} playsInline autoPlay muted bigPlayButton={false}>
            <source src={vid} />
            <ControlBar autoHide={true} />
          </Player>
        </div>
      </div>
    );
  }
}

export default Contact;
