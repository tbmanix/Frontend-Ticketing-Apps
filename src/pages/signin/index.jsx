import React, { useState } from "react";
import banner from "../../assets/banner.png";
import logo2 from "../../assets/logo2.svg";
import eyeslash from "../../assets/eye-slash-fill.svg";
import eye from "../../assets/eye-fill.svg";
import "./index.css";
import TitleBanner from "../../components/titlebanner";
import FormSignIn from "../../components/formsignin";
// import { useNavigate } from "react-router-dom";
import "./index.css";

function SignIn() {
  document.title = "Tickitz | Home";
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(click);
    setClick(!click);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 banner">
            <div className="background-img">
              <TitleBanner />
            </div>
          </div>
          <div className="col-4 form">
            <FormSignIn />
          </div>
        </div>
      </div>
      {/* <div className={"container-fluid"}>
        <div className="row">
          <div className="col-8 banner">
            <div className="background-img">
              <div className="title">
                <img className="title-logo" src={logo} alt="logo" />
                <h3 className="text-center text-light">WAIT, WATCH, WOW!</h3>
              </div>
            </div>
          </div>
          <div className="col-4 form">
            <div className="form-login">
              <form className="form-style" action="">
                <img className="logo-mobile" src={logo2} alt="" />
                <span className="title-form">Sign In</span>
                <span className="title-form-desc">
                  Sign in with your data that you entered during your registration
                </span>
                <div className="wrap-input">
                  <label className="label-form">Email</label>
                  <div className="input">
                    <input className="input-form" type="email" placeholder="Write your email" />
                  </div>
                </div>
                <div className="wrap-input">
                  <label className="label-form">Password</label>
                  <div className="input">
                    <input
                      className="input-form"
                      type="password"
                      placeholder="Write your password"
                    />
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
                    Sign In
                  </button>
                </div>
                <div className="wrap-"></div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SignIn;
