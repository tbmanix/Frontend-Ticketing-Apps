import React from "react";

import "./index.css";

const PersonalInfo = () => {
  return (
    <>
      <div className="main__personal">
        <h2 className="main__title--text">Personal Info</h2>
        <div className="card border-light my-4">
          <div className="card-body bg-transparent">
            <form className="mt-3">
              <div className="my-3">
                <label className="form-label" for="">
                  Nama
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control form-rounded p-3"
                  placeholder="Tubagus Manix Hara"
                />
              </div>
              <div className="my-3">
                <label className="form-label" for="">
                  Email
                </label>
                <input
                  type="email"
                  id=""
                  className="form-control form-rounded p-3"
                  placeholder="tubagusmanixh@gmail.com"
                />
              </div>
              <div className="my-3">
                <label className="form-label" for="">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="hp"
                  id="hp"
                  pattern="+62 - [0-9]{3} - [0-9]{4} - [0-9]{3}"
                  value="+62"
                  className="form-control form-rounded p-3"
                />
              </div>
              <div className="alert alert-warning bi-exclamation-triangle" role="alert">
                Fill your data correctly.
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
