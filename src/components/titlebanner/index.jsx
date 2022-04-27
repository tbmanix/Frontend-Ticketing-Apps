import React from "react";

import logo from "../../assets/logo.png";
import "./index.css";

function TitleBanner() {
  return (
    <>
      <div className="title">
        <img className="title-logo" src={logo} alt="logo" />
        <h3 className="text-center text-light">WAIT, WATCH, WOW!</h3>
      </div>
    </>
  );
}

export default TitleBanner;
