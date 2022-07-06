import React, { useState } from "react";
import logo from "../../assets/Vector.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";

// import "./index.css";

const NavBarAdmin = () => {
  const navigate = useNavigate();
  // setToken = localStorage.getItem("token");

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const { image, role } = dataUser ? dataUser[0] : "";
  // console.log(dataUser[0].firstName);
  // console.log(image);
  // console.log(token);

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
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
                <Link className="nav-link  mx-5 fw-bold" to="/">
                  Dashboard
                </Link>
              </li>
              <hr />
              <li className="nav-item text-center">
                <Link className="nav-link mx-5 fw-bold" to="/managemovie">
                  Manage Movie
                </Link>
              </li>
              <hr />
              <li className="nav-item text-center">
                <Link className="nav-link mx-5 fw-bold" to="/manageschedule">
                  Manage Schedule
                </Link>
              </li>
              <hr />
            </ul>
            <div className="d-flex justify-content-center">
              {localStorage.getItem("token") ? (
                <Link className="nav-link mx-5 fw-bold" to="/profile">
                  <img
                    src={
                      image
                        ? `https://res.cloudinary.com/dx8zjtlv8/image/upload/v1651042190/${image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    alt="image-profile"
                    className="image-profile"
                  />
                </Link>
              ) : (
                <button className="btn btn__signin" onClick={() => handleNavigate("signin")}>
                  Sign In
                </button>
              )}
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

export default NavBarAdmin;
