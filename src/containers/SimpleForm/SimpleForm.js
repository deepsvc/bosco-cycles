import React, { Component } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

class SimpleForm extends Component {
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

  componentDidMount() {
    window.scrollTo(0, 0)
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
    const customPaintJobMessage = () => {
      if (this.props.form === "book custom paint job") {
        return (
          <p className="mt-2">
            Are you looking to spruce up the appearance of your bike?
            <br /> What if we told you, you can see your bike in that colour you
            have always dreamt of?
            <br /> You have definitely reached the right place to get it done.
            <br /> Please fill the below form for a hassle-free custom paint job
            experience.
          </p>
        );
      }
    };

    const inputCSS =
      "focus:placeholder-gray-200 focus:shadow-xl hover:shadow-md placeholder-gray-300 my-5 py-2 px-2 w-full border-solid border-2 border-red-200 border-opacity-100 rounded";
    return (
      <>
        <Navbar />
        <div className="pt-24 text-left flex bg-gray-100 justify-center">
          <div className="md:w-1/2  m-10">
            <h1 className="text-black text-3xl font-bold uppercase">
              {this.props.form}
            </h1>

            {customPaintJobMessage()}

            <form
              className="flex flex-col justify-center items-center"
              onSubmit={this.handleSubmit}
            >
              <input
                className={inputCSS}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Your Name"
                onChange={(event) => this.handleChange(event, "name")}
              />

              <input
                className={inputCSS}
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder="Your Number"
                onChange={(event) => this.handleChange(event, "phone")}
              />

              <input
                className={inputCSS}
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Your Email"
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
                On submitting the form, our executive will call you to discuss
                further details.
              </h6>

              <input
                className="hover:shadow-md hover:bg-red-800 transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                type="submit"
                value={("Book", this.props.form)}
              />
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SimpleForm;
