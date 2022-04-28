import React from "react";
import HeaderHome from "../../components/headerhome";
import NavBar from "../../components/navbar";
import NowShowing from "../../components/nowshowing";
import Upcoming from "../../components/upcoming";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import FormJoin from "../../components/formjoin";

const Home = (props) => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <HeaderHome />
        <NowShowing />
        <Upcoming />
        <FormJoin />
        <Footer />
      </div>
    </>
  );
};

export default Home;
