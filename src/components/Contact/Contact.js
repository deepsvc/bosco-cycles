import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "video-react/dist/video-react.css";

import vid from "../../assets/images/vid.mp4";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {
        name: "Name must be more than 2 characters!",
        email: "Enter a vaild email address!",
        phone: "Enter a vaild phone number!",
        message: "Enter a vaild message!",
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
          value.length < 3 ? "Name must be more than 2 characters!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Enter a vaild email address!";
        break;
      case "phone":
        errors.phone = validPhone.test(value)
          ? ""
          : "Enter a vaild phone number!";
        break;
      case "message":
        errors.message =
          value.length < 5 ? "Message must be more than 5 characters!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  handleSubmit = async (event) => {
    const validateForm = (errors) => {
      let valid = true;
      Object.keys(errors).forEach((key) => {
        if (errors[key].length !== 0 && valid === true) {
          alert(errors[key]);
          valid = false;
        }
      });
      return valid;
    };

    event.preventDefault();
    if (validateForm(this.state.errors)) {
      let data = {
        service_id: "service_6cbhpvh",
        template_id: "template_reamh8x",
        user_id: "user_vKlefJhUqLPGcgXQQQlrT",
        template_params: {
          formname: "Contact Form",
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          message: this.state.message,
        },
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      let response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        requestOptions
      ).then((response) => {
        return response;
      });

      if (response.status === 200) {
        this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
          errors: {
            name: "Name must be more than 2 characters!",
            email: "Enter a vaild email address!",
            phone: "Enter a vaild phone number!",
            message: "Enter a vaild message!",
          },
        });
        alert("Form submitted successfully!");
      }
      console.info("Valid Form");
    } else {
      alert("Something went wrong, please try after sometime!");
      console.error("Invalid Form");
    }
  };

  render() {
    const input_style =
      "placeholder-gray-200 bg-transparent border-solid border-opacity-80 border-2 text-white border-gray-100 my-2 py-2 px-2 lg:w-3/4 w-full rounded placeholder-opacity-50";
    return (
      <div
        className="flex lg:flex-row flex-col bg-gray-800 shadow-inner justify-center items-center"
        id="contact"
      >
        <div className="lg:w-5/12 w-4/5 md:my-5">
          <h1 className="text-white md:pt-0 pt-5 text-3xl font-semibold uppercase">
            Make an Enquiry
          </h1>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={this.handleSubmit}
          >
            <input
              className={input_style}
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Your Name*"
              onChange={(event) => this.handleChange(event, "name")}
            />

            <input
              className={input_style}
              type="text"
              name="phone"
              value={this.state.phone}
              placeholder="Your Number*"
              onChange={(event) => this.handleChange(event, "phone")}
            />

            <input
              className={input_style}
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Your Email*"
              onChange={(event) => this.handleChange(event, "email")}
            />

            <textarea
              className={input_style}
              type="text"
              name="message"
              value={this.state.message}
              placeholder="Message*"
              onChange={(event) => this.handleChange(event, "message")}
            />

            <button
              className="my-2 py-2 px-12 bg-red-600 rounded hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-xl"
              type="submit"
              value="Send Message"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-4/12 w-4/5 lg:m-5 mt-5 mb-7">
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
