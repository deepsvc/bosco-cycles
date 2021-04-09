import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biketype: null,
      name: null,
      email: null,
      phone: null,
      message: null,
      geartype: null,
      setShowOptions: false,
      errors: {
        name: "",
        email: "",
        phone: "",
        biketype: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChangeSelect.bind(this);
  }

  handleNext() {
    this.setState((prevState, prevProps) => {
      return { setShowOptions: !prevState.setShowOptions };
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
      // case "biketype":
      //   errors.biketype =
      //     value.length < 5 ? "Full Name must be 5 characters long!" : value;
      //   break;
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

  handleChangeSelect = (event) => {
    const { name, value } = event.target;
    this.setState({ name: value }, () =>
      console.log(`Option selected:`, this.state.value)
    );
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

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    const biketpyeoptions = [
      "Kids Bike",
      "Roadie",
      "MTB",
      "Hybrid",
      "Not Sure",
    ];

    const geartype = ["Gear", "Non-Gear"];

    const inputCSS =
      "focus:placeholder-gray-200 col-span-1 focus:shadow-xl hover:shadow-md placeholder-gray-300 my-5 py-2 px-2 w-full border-solid border-2 border-red-200 border-opacity-100 rounded";
    return (
      <>
        <Navbar />
        <div className="w-screen pt-24 text-left flex bg-gray-100 justify-center">
          <div className="">
            <h1 className="text-black text-3xl font-bold uppercase">
              {this.props.form}
            </h1>

            <form
              className="flex flex-col justify-center items-center"
              onSubmit={this.handleSubmit}
            >
              {this.state.setShowOptions === false ? (
                <>
                  <div className="text-left">
                    <span className="text-base italic ">
                      Let's talk about your bike...
                    </span>
                  </div>

                  <div className="md:grid flex gap-4 flex-col md:grid-cols-4">
                    <Dropdown
                      className={inputCSS}
                      options={biketpyeoptions}
                      onChange={this.myChangeHandler}
                      value={this.state.biketype}
                      name="biketpye"
                      placeholder="Select Bike Type"
                    />

                    <input
                      className={inputCSS}
                      type="text"
                      name="name"
                      value={this.state.name}
                      placeholder="Brand"
                      onChange={this.myChangeHandler}
                    />

                    <input
                      className={inputCSS}
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      placeholder="Model"
                      onChange={this.myChangeHandler}
                    />

                    <Dropdown
                      className={inputCSS}
                      options={geartype}
                      onChange={this.handleChangeSelect}
                      value={this.state.geartype}
                      name="geartype"
                      placeholder="Gear or Non-Gear"
                    />
                  </div>
                  <div className="text-left">
                    Add Ons <br />
                    <input
                      type="radio"
                      name="name"
                      value={this.state.name}
                      placeholder="Brand"
                      onChange={this.myChangeHandler}
                    />{" "}
                    BRAKE CABLE SET: Rs. 250 <br />
                    <input
                      type="radio"
                      name="name"
                      value={this.state.name}
                      placeholder="Brand"
                      onChange={this.myChangeHandler}
                    />{" "}
                    GEAR CABLE SET: Rs. 250 <br />
                    <input
                      type="radio"
                      name="name"
                      value={this.state.name}
                      placeholder="Brand"
                      onChange={this.myChangeHandler}
                    />{" "}
                    PUNCHER: Rs. 55
                    <br />
                    <input
                      type="radio"
                      name="name"
                      value={this.state.name}
                      placeholder="Brand"
                      onChange={this.myChangeHandler}
                    />{" "}
                    Other <br />
                  </div>
                  <div className="text-left">
                    Any additional information that we should be aware of your
                    bike:
                    <textarea
                      className={inputCSS}
                      type="text"
                      name="message"
                      value={this.state.message}
                      placeholder="Add Special Instructions (Optional)"
                      onChange={(event) => this.handleChange(event, "message")}
                    />
                    Any spares will be charged extra
                  </div>
                  <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleNext.bind(this)}
                    value={"Next"}
                  />
                </>
              ) : (
                <>
                  Let's talk about you...
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Your Name"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Phone Number"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Alternate Phone Number"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Address"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Pin Code"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Your Name"
                    onChange={(event) => this.handleChange(event, "email")}
                  />
                  <textarea
                    className={inputCSS}
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="Add Special Instructions (Optional)"
                    onChange={(event) => this.handleChange(event, "message")}
                  />
                  <h6 className="my-5 " style={{ fontStyle: "italic" }}>
                    On submitting the form, our executive will call you to
                    discuss further details.
                  </h6>
                  <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleNext.bind(this)}
                    value={("Back")}
                  />
                                    <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleNext.bind(this)}
                    value={("Submit Enquiry")}
                  />
                                    <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleNext.bind(this)}
                    value={("Make Payment")}
                  />
                </>
              )}
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MainForm;
