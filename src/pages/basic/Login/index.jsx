import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";

function BasicLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // console.log(form);
    try {
      event.preventDefault();
      const resultLogin = await axios.post("auth/login", form);
      // console.log(resultLogin);

      const resultUser = [
        {
          id: 1,
          name: "bagus"
        }
      ];

      setIsError(false);
      setMessage(resultLogin.data.msg);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      localStorage.setItem("dataUser", JSON.stringify(resultUser[0]));
      navigate("/basic/home");
      //   UNTUK GET DATA USER
      //   const dataUser = JSON.parse(localStorage.getItem(dataUser));
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };
  return (
    <div className="text-center container">
      <h1>Login Page</h1>
      {!message ? null : isError ? (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      ) : (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input type="email" placeholder="Input email" name="email" onChange={handleChangeForm} />
        <br />
        <input
          type="password"
          placeholder="Input Password"
          name="password"
          onChange={handleChangeForm}
        />
        <br />
        <button className="btn btn-outline-primary" type="reset">
          Reset
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default BasicLogin;
