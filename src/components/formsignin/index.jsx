import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import logo2 from "../../assets/logo2.svg";
import eyeslash from "../../assets/eye-slash-fill.svg";
import eye from "../../assets/eye-fill.svg";
import "./index.css";
import { useDispatch } from "react-redux";
import { getUserById } from "../../stores/actions/user";

const FormSignIn = () => {
  document.title = "Sign In";
  // const [click, setClick] = useState(false);

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   console.log(click);
  //   setClick(!click);
  // };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const resultLogin = await axios.post("auth/login", form);
      // console.log(resultLogin);

      // const resultUser = await axios.get(`user/id/${resultLogin.data.data.id}`, {
      //   headers: {
      //     Authorization: `Bearer ${resultLogin.data.data.token}`
      //   }
      // });

      setIsError(false);
      setMessage(resultLogin.data.message);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      // localStorage.setItem("id", resultLogin.data.data.id);

      // const resultUser = await axios.get(`user/id/${resultLogin.data.data.id}`);
      // console.log(resultUser);
      // localStorage.setItem("dataUser", JSON.stringify(resultUser.data.data));

      await dispatch(getUserById(resultLogin.data.data.id));
      navigate("/");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.message);
      setForm({
        email: "",
        password: ""
      });
    }
  };

  const handleReset = (event) => {
    // event.preventDefault();
    console.log("Reset Form");
    setForm({
      email: "",
      password: ""
    });
  };

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
        <span className="title-form">Sign In</span>
        <span className="title-form-desc">
          Sign in with your data that you entered during your registration
        </span>
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
