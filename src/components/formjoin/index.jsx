import React from "react";

import "./index.css";

const FormJoin = () => {
  return (
    <section className="join">
      <div className="container-fluid">
        <div className="join__card">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span className="text-secondary">Be the vanguard of the</span>
            <span className="join__text--primary">Moviegoers</span>
            <form className="join__form">
              <input
                className="form-control join__form--input"
                type="email"
                placeholder="Type your email"
              />
              <button className="join__form--button" type="submit">
                Join now
              </button>
            </form>
            <p className="join__text">By joining you as a Tickitx member.</p>
            <p className="join__text">we will always send you the latest updates via email</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormJoin;
