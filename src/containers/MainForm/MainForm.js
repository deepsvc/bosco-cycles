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
                      className={inputCSS}
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

                  <div className="text-left" onChange={this.myChangeHandler}>
                    Add Ons <br />
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
                  <div className="text-left">
                    Any additional information that we should be aware of your
                    bike:
                    <textarea
                      className={inputCSS}
                      type="text"
                      name="message"
                      value={this.state.message}
                      placeholder="Add Special Instructions (Optional)"
                      onChange={this.myChangeHandler}
                    />
                    Any spares will be charged extra
                  </div>
                  <button
                    type="button"
                    className="hover:shadow-md btn hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    onClick={this.handleNext}
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  Let's talk about you...
                  <input
                    className={inputCSS}
                    type="text"
                    name="newname"
                    value={this.state.newname}
                    placeholder="Your Name"
                    onChange={this.myChangeHandler2}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="newnumber"
                    value={this.state.newnumber}
                    placeholder="Phone Number"
                    onChange={this.myChangeHandler2}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="newalternatenumber"
                    value={this.state.newalternatenumber}
                    placeholder="Alternate Phone Number"
                    onChange={this.myChangeHandler2}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="newemail"
                    value={this.state.newemail}
                    placeholder="Email"
                    onChange={this.myChangeHandler2}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="newAddress"
                    value={this.state.newAddress}
                    placeholder="Address"
                    onChange={this.myChangeHandler2}
                  />
                  <input
                    className={inputCSS}
                    type="text"
                    name="newpincode"
                    value={this.state.newpincode}
                    placeholder="Pin Code"
                    onChange={this.myChangeHandler2}
                  />
                  <DatePicker
                    className={inputCSS}
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
                    className={inputCSS}
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
                  <textarea
                    className={inputCSS}
                    type="text"
                    name="newmessage"
                    value={this.state.newmessage}
                    placeholder="Add Special Instructions (Optional)"
                    onChange={(event) => this.myChangeHandler2}
                  />
                  <h6 className="my-5 " style={{ fontStyle: "italic" }}>
                    On submitting the form, our executive will call you to
                    discuss further details.
                  </h6>
                  <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleNext.bind(this)}
                    value={"Back"}
                  />
                  <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleSubmit}
                    value={"Submit Enquiry"}
                  />
                  <input
                    className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                    type="submit"
                    onClick={this.handleNext.bind(this)}
                    value={"Make Payment"}
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
