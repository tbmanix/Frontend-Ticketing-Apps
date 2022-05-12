import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import logo2 from "../../assets/logo2.svg";
import eyeslash from "../../assets/eye-slash-fill.svg";
import eye from "../../assets/eye-fill.svg";

const FormSignUp = () => {
  // document.title = "Sign Up";
  // const [click, setClick] = useState(false);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: 0,
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const resultRegister = await axios.post("auth/register", form);

      setIsError(false);
      setMessage(resultRegister.data.message);
      navigate("/signin");
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data.message);
      setForm({
        firstName: "",
        lastName: "",
        noTelp: 0,
        email: "",
        password: ""
      });
    }
  };

  console.log(form);
  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
    setForm({
      firstName: "",
      lastName: "",
      noTelp: 0,
      email: "",
      password: ""
    });
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   console.log(click);
  //   setClick(!click);
  // };
  return (
    <div className="form-login">
      <form onSubmit={handleSubmit} onReset={handleReset} className="form-style" action="">
        <img className="logo-mobile" src={logo2} alt="" />
        {!message ? null : isError ? (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        ) : (
          <div className="alert alert-primary" role="alert">
            {message}
          </div>
        )}
        <span className="title-form">Sign Up</span>
        <span className="title-form-desc">Fill your additional details</span>
        <div className="wrap-input">
          <label className="label-form">First Name</label>
          <div className="input">
            <input
              className="input-form"
              type="text"
              placeholder="Write your First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Last Name</label>
          <div className="input">
            <input
              className="input-form"
              type="text"
              placeholder="Write your Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Phone Number</label>
          <div className="input">
            <input
              className="input-form"
              type="number"
              placeholder="Write your Phone Number"
              name="noTelp"
              value={form.noTelp}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Email</label>
          <div className="input">
            <input
              className="input-form"
              type="email"
              placeholder="Write your email"
              name="email"
              value={form.email}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Password</label>
          <div className="input">
            <input
              className="input-form"
              type="password"
              placeholder="Write your password"
              name="password"
              value={form.password}
              onChange={handleChangeForm}
            />
            {/* <button onClick={handleClick} className="btn-icon">
              {click === false ? (
                <img className="icon" src={eyeslash} alt="" />
              ) : (
                <img className="icon" src={eye} alt="" />
              )}
            </button> */}
          </div>
        </div>

        <div className="wrap-button">
          <button type="submit" className="btn btn-signin">
            Sign Up
          </button>
        </div>
        <p className="text-center">
          Already have account? <a href="">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default FormSignUp;
