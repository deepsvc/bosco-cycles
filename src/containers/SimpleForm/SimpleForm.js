import React, { Component } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

class SimpleForm extends Component {
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
          formname: this.props.form,
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
    const customPaintJobMessage = () => {
      if (this.props.form === "book custom paint job") {
        return (
          <p className="my-2">
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
      "focus:placeholder-gray-200 focus:shadow-xl hover:shadow-md placeholder-gray-300 my-3 py-2 px-2 w-full md:w-5/6 border-solid border-2 border-red-200 border-opacity-100 rounded";
    return (
      <>
        <Navbar />
        <div className="md:pt-24 pt-16 text-center flex bg-gray-100 justify-center">
          <div className="md:w-1/2 m-10">
            <h1 className="text-black text-3xl font-bold uppercase">
              {this.props.form}
            </h1>

            {customPaintJobMessage()}

            <form
              className="flex flex-col items-center"
              onSubmit={this.handleSubmit}
            >
              <input
                className={inputCSS}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Your Name*"
                onChange={(event) => this.handleChange(event, "name")}
              />
              <input
                className={inputCSS}
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder="Your Number*"
                onChange={(event) => this.handleChange(event, "phone")}
              />
              <input
                className={inputCSS}
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Your Email*"
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
              <button
                className="hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl transform hover:scale-105 my-5 py-2 px-12 font-semibold uppercase bg-red-600 rounded text-white text-xl"
                type="submit"
                value={("Book", this.props.form)}
              >
                Book
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SimpleForm;
