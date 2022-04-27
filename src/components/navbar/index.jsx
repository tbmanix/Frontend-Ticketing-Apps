import React, { useState } from "react";
import logo from "../../assets/Vector.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./index.css";

const NavBar = () => {
  const navigate = useNavigate();
  // setToken = localStorage.getItem("token");

  // const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  // console.log(dataUser[0].firstName);
  // console.log(token);

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
        <div className="container-fluid">
          <Link to="/home">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-center">
                <Link to="/home">
                  <a className="nav-link  mx-5 fw-bold" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <hr />
              <li className="nav-item text-center">
                <Link to="/home">
                  <a className="nav-link mx-5 fw-bold" href="#">
                    Link
                  </a>
                </Link>
              </li>
              <hr />
            </ul>
            <div className="d-flex justify-content-center">
              {localStorage.getItem("token") ? (
                <button className="btn btn__signin" type="button">
                  Logout
                </button>
              ) : (
                <button className="btn btn__signin" onClick={() => handleNavigate("signin")}>
                  Sign In
                </button>
              )}
              {/* <button className="btn btn__signin" type="button">
                Sign In
              </button> */}
            </div>
            <hr />
            <div className="d-flex justify-content-center">
              <div className="nav__copyright col py-3">
                <p>
                  Tubagus Manix Hara<i className="bi bi-heart-fill ms-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
