import React from "react";
import HeaderHome from "../../components/headerhome";
import NavBar from "../../components/navbar";
import NowShowing from "../../components/nowshowing";
import Upcoming from "../../components/upcoming";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <HeaderHome />
        <NowShowing />
        <Upcoming />
        <hr />
        <h1>Join</h1>
        <hr />
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
