import React, { useState } from "react";

import logo2 from "../../assets/logo2.svg";
import eyeslash from "../../assets/eye-slash-fill.svg";
import eye from "../../assets/eye-fill.svg";

const FormSignUp = () => {
  document.title = "Sign In";
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(click);
    setClick(!click);
  };
  return (
    <div className="form-login">
      <form className="form-style" action="">
        <img className="logo-mobile" src={logo2} alt="" />
        <span className="title-form">Sign In</span>
        <span className="title-form-desc">Fill your additional details</span>
        <div className="wrap-input">
          <label className="label-form">First Name</label>
          <div className="input">
            <input className="input-form" type="text" placeholder="Write your First Name" />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Last Name</label>
          <div className="input">
            <input className="input-form" type="text" placeholder="Write your Last Name" />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Phone Number</label>
          <div className="input">
            <input className="input-form" type="number" placeholder="Write your Phone Number" />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Email</label>
          <div className="input">
            <input className="input-form" type="email" placeholder="Write your email" />
          </div>
        </div>
        <div className="wrap-input">
          <label className="label-form">Password</label>
          <div className="input">
            <input className="input-form" type="password" placeholder="Write your password" />
            <button onClick={handleClick} className="btn-icon">
              {click === false ? (
                <img className="icon" src={eyeslash} alt="" />
              ) : (
                <img className="icon" src={eye} alt="" />
              )}
            </button>
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
