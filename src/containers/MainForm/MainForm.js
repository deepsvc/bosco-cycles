import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biketype: "",
      brandname: "",
      modelnumber: "",
      message: "",
      addons: "",
      geartype: "",
      newname: "",
      newAddress: "",
      newpincode: "",
      newemail: "",
      newalternatenumber: "",
      newnumber: "",
      newmessage: "",
      startdate: "",
      enddate: "",
      setShowOptions: true,
      errors: {
        biketype: "Bike type must be selected!",
        brandname: "Brand name must be more than 1 character!",
        modelnumber: "Model Number must be more than 1 character!",
        message: "",
        addons: "Add ons must be selected!",
        geartype: "Gear type must be selected!",
      },
      errors1: {
        newname: "Enter a vaild name!",
        newAddress: "Enter a vaild address!",
        newpincode: "Enter a vaild pincode!",
        newemail: "Enter a valid email address!",
        newalternatenumber: "",
        newnumber: "Enter a valid phone number!",
        newmessage: "",
        startdate: "Enter a valid day and time to collect your cycle",
        enddate: "Enter a valid day and time to return your cycle",
      },
    };

    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNext = (event) => {
    event.preventDefault();
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
    if (validateForm(this.state.errors)) {
      this.setState((prevState, prevProps) => {
        return { setShowOptions: !prevState.setShowOptions };
      });
    } else {
      console.error("Invalid Form");
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
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
    if (validateForm(this.state.errors) && validateForm(this.state.errors1)) {
      let data = {
        service_id: "service_6cbhpvh",
        template_id: "template_h9fkw6u",
        user_id: "user_vKlefJhUqLPGcgXQQQlrT",
        template_params: {
          formname: this.props.form,
          biketype: this.state.biketype,
          brandname: this.state.brandname,
          modelnumber: this.state.modelnumber,
          message: this.state.message,
          addons: this.state.addons,
          geartype: this.state.geartype,
          newname: this.state.newname,
          newAddress: this.state.newAddress,
          newpincode: this.state.newpincode,
          newemail: this.state.newemail,
          newalternatenumber: this.state.newalternatenumber,
          newnumber: this.state.newnumber,
          newmessage: this.state.newmessage,
          startdate: this.state.startdate,
          enddate: this.state.enddate,
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
          biketype: "",
          brandname: "",
          modelnumber: "",
          message: "",
          addons: "",
          geartype: "",
          newname: "",
          newAddress: "",
          newpincode: "",
          newemail: "",
          newalternatenumber: "",
          newnumber: "",
          newmessage: "",
          startdate: "",
          enddate: "",
          setShowOptions: false,
          errors: {
            biketype: "Bike type must be selected!",
            brandname: "Brand name must be more than 1 character!",
            modelnumber: "Model Number must be more than 1 character!",
            message: "",
            addons: "Add ons must be selected!",
            geartype: "Gear type must be selected!",
          },
          errors1: {
            newname: "Enter a vaild name!",
            newAddress: "Enter a vaild address!",
            newpincode: "Enter a vaild pincode!",
            newemail: "Enter a valid email address!",
            newalternatenumber: "",
            newnumber: "Enter a valid phone number!",
            newmessage: "",
            startdate: "Enter a valid day and time to collect your cycle",
            enddate: "Enter a valid day and time to return your cycle",
          },
        });
        alert("Form submitted successfully!");
      }
      console.info("Valid Form");
    } else {
      // alert("Something went wrong, please try after sometime!");
      console.error("Invalid Form");
    }
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let errors = this.state.errors;
    console.log(nam, val);
    switch (nam) {
      case "brandname":
        errors.brandname =
          val.length <= 1 ? "Brand name must be more than 1 characters!" : "";
        break;
      case "modelnumber":
        errors.modelnumber =
          val.length <= 1 ? "Model Number must be more than 1 characters!" : "";
        break;

      case "addons":
        errors.addons = val.length < 5 ? "Add ons must be selected!" : "";
        break;
      case "geartype":
        errors.geartype = val.length < 5 ? "Gear type must be selected!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [nam]: val }, () => {
      console.log(errors);
    });
  };

  myChangeHandler2 = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let errors = this.state.errors1;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const validPhone = RegExp(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i
    );
    const validpincode = RegExp(
      /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})$/i
    );
    console.log(nam, val);
    switch (nam) {
      case "newname":
        errors.newname = val.length <= 1 ? "Enter a vaild name!" : "";
        break;
      case "newnumber":
        errors.newnumber = validPhone.test(val)
          ? ""
          : "Enter a valid phone number!";
        break;
      case "newemail":
        errors.newemail = validEmailRegex.test(val)
          ? ""
          : "Enter a valid email address!";
        break;
      case "newAddress":
        errors.newAddress = val.length <= 10 ? "Enter a valid address!" : "";
        break;
      case "newpincode":
        errors.newpincode = validpincode.test(val)
          ? ""
          : "Enter a vaild pincode!";
        break;

      case "startdate":
        errors.startdate =
          val.length <= 0
            ? "Enter a valid day and time to collect your cycle"
            : "";
        break;
      case "enddate":
        errors.enddate =
          val.length <= 0
            ? "Enter a valid day and time to return your cycle"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [nam]: val }, () => {
      console.log(errors);
    });
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
      "focus:placeholder-gray-200 col-span-1 focus:shadow-xl hover:shadow-md placeholder-gray-300 md:my-5 p-2 w-full border-solid border-2 border-red-200 border-opacity-100 rounded";

    const inputCSS2 =
      "focus:placeholder-gray-200 col-span-1 focus:shadow-xl hover:shadow-md placeholder-gray-300 my-2 p-2 w-full border-solid border-2 border-red-200 border-opacity-100 rounded";

    const dropDownCSS =
      "focus:placeholder-gray-200 col-span-1 text-left focus:shadow-xl hover:shadow-md placeholder-gray-300 md:my-5 w-full border-solid border-2 border-red-200 border-opacity-100 rounded";

    const textAreaCSS =
      "focus:placeholder-gray-200 col-span-1 text-left focus:shadow-xl hover:shadow-md placeholder-gray-300 p-2 md:my-1 w-full border-solid border-2 border-red-200 border-opacity-100 rounded";
    return (
      <>
        <Navbar />
        <div className="w-screen md:pt-24 pt-20 pb-10 text-center flex bg-gray-100 justify-center">
          <div className="">
            <h1 className="text-black text-3xl font-bold uppercase">
              {this.props.form}
            </h1>

            <form
              className="flex flex-col items-center md:items-start"
              onSubmit={this.handleSubmit}
            >
              {this.state.setShowOptions === false ? (
                <>
                  <div className="mt-2">
                    <span className="text-base italic">
                      Let's talk about your bike...
                    </span>
                  </div>
                  <div className="md:grid flex gap-4 md:w-full w-4/6 flex-col md:grid-cols-4">
                    <Dropdown
                      className={dropDownCSS}
                      value={this.state.biketype}
                      onChange={(selectedOption) => {
                        this.state.errors.biketype =
                          selectedOption.length <= 0
                            ? "Bike type must be selected!"
                            : "";
                        this.setState({ biketype: selectedOption.value });
                        console.log(selectedOption.value);
                      }}
                      options={biketpyeoptions}
                      name="biketpye"
                      placeholder="Select Bike Type"
                    />

                    <input
                      className={inputCSS}
                      type="text"
                      name="brandname"
                      value={this.state.brandname}
                      placeholder="Brand"
                      onChange={this.myChangeHandler}
                    />

                    <input
                      className={inputCSS}
                      type="text"
                      name="modelnumber"
                      value={this.state.modelnumber}
                      placeholder="Model"
                      onChange={this.myChangeHandler}
                    />

                    <Dropdown
                      className={dropDownCSS}
                      options={geartype}
                      onChange={(selectedOption) => {
                        this.state.errors.geartype =
                          selectedOption.length <= 0
                            ? "Gear type must be selected!"
                            : "";
                        this.setState({ geartype: selectedOption.value });
                        console.log(selectedOption.value);
                      }}
                      value={this.state.geartype}
                      name="geartype"
                      placeholder="Gear or Non-Gear"
                    />
                  </div>

                  <div
                    className="text-left my-5 mx-10"
                    onChange={this.myChangeHandler}
                  >
                    <span className="font-semibold">
                      Add Ons: <br />
                    </span>
                    <div>
                      <input
                        type="radio"
                        value="BRAKE CABLE SET: Rs. 250 "
                        name="addons"
                        placeholder="Brand"
                      />{" "}
                      BRAKE CABLE SET: Rs. 250 <br />
                      <input
                        type="radio"
                        value="GEAR CABLE SET: Rs. 250 "
                        name="addons"
                        placeholder="Brand"
                      />{" "}
                      GEAR CABLE SET: Rs. 250 <br />
                      <input
                        type="radio"
                        value="PUNCHER: Rs. 55"
                        name="addons"
                        placeholder="Brand"
                      />{" "}
                      PUNCHER: Rs. 55
                      <br />
                      <input
                        type="radio"
                        value="Other"
                        name="addons"
                        placeholder="Brand"
                      />{" "}
                      Other <br />
                    </div>
                  </div>
                  <div className="text-left w-4/6 md:w-full">
                    Any additional information that we should be aware of your
                    bike:
                    <textarea
                      className={textAreaCSS}
                      type="text"
                      name="message"
                      value={this.state.message}
                      placeholder="Add Special Instructions (Optional)"
                      onChange={this.myChangeHandler}
                    />
                    Any spares will be charged extra.
                  </div>
                  <button
                    type="button"
                    className="hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl btn transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    onClick={this.handleNext}
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  <span className="italic my-3 md:px-20">
                    Let's talk about you...
                  </span>

                  <div className="flex md:w-full md:px-20 w-4/6 flex-col">
                    <input
                      className={inputCSS2}
                      type="text"
                      name="newname"
                      value={this.state.newname}
                      placeholder="Your Name"
                      onChange={this.myChangeHandler2}
                    />
                    <input
                      className={inputCSS2}
                      type="text"
                      name="newnumber"
                      value={this.state.newnumber}
                      placeholder="Phone Number"
                      onChange={this.myChangeHandler2}
                    />
                    <input
                      className={inputCSS2}
                      type="text"
                      name="newalternatenumber"
                      value={this.state.newalternatenumber}
                      placeholder="Alternate Phone Number"
                      onChange={this.myChangeHandler2}
                    />
                    <input
                      className={inputCSS2}
                      type="text"
                      name="newemail"
                      value={this.state.newemail}
                      placeholder="Email"
                      onChange={this.myChangeHandler2}
                    />
                    <input
                      className={inputCSS2}
                      type="text"
                      name="newAddress"
                      value={this.state.newAddress}
                      placeholder="Address"
                      onChange={this.myChangeHandler2}
                    />
                    <input
                      className={inputCSS2}
                      type="text"
                      name="newpincode"
                      value={this.state.newpincode}
                      placeholder="Pin Code"
                      onChange={this.myChangeHandler2}
                    />
                    <DatePicker
                      className={inputCSS2}
                      placeholderText="Collect Date"
                      selected={this.state.startdate}
                      onChange={(date) => {
                        this.state.errors1.startdate =
                          date.length <= 0
                            ? "Enter a valid day and time to collect your cycle"
                            : "";
                        this.setState({ startdate: date });
                      }}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={45}
                      timeCaption="time"
                      minDate={new Date()}
                      showDisabledMonthNavigation
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                    <DatePicker
                      placeholderText="Return Date"
                      className={inputCSS2}
                      selected={this.state.enddate}
                      onChange={(date) => {
                        this.state.errors1.enddate =
                          date.length <= 0
                            ? "Enter a valid day and time to return your cycle"
                            : "";
                        this.setState({ enddate: date });
                      }}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={45}
                      timeCaption="time"
                      minDate={this.state.startdate}
                      showDisabledMonthNavigation
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                    <h6 className="my-5 italic">
                      On submitting the form, our executive will call you to
                      discuss further details.
                    </h6>
                    <div className="grid md:grid-cols-3 gap-4">
                      <input
                        className="hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl transform my-2 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                        type="submit"
                        onClick={this.handleNext.bind(this)}
                        value={"Back"}
                      />
                      <input
                        className="hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl transform my-2 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                        type="submit"
                        onClick={this.handleSubmit}
                        value={"Submit Enquiry"}
                      />
                      <input
                        className="hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl transform my-2 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                        type="submit"
                        onClick={this.handleNext.bind(this)}
                        value={"Make Payment"}
                      />
                    </div>
                  </div>
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
