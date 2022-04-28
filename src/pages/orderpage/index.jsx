import React from "react";
import ButtonOrder from "../../components/buttonorder";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import OrderInfo from "../../components/orderinfo";
import Seat from "../../components/seat";
import SelectedMovie from "../../components/selectedmovie";
import { useNavigate } from "react-router-dom";

import "./index.css";

const OrderPage = () => {
  const navigate = useNavigate();
  const handleChangeMovie = () => {
    // console.log(id);
    navigate(`/home`);
  };
  const handleCheckOutNow = () => {
    // console.log(id);
    navigate(`/payment`);
  };
  return (
    <>
      <NavBar />
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <SelectedMovie />
              <Seat />
            </div>
            <div className="col-md-4">
              <OrderInfo />
            </div>
            <div className="col-md-8 mb-5">
              <ButtonOrder handleChange={handleChangeMovie} handleCheckOut={handleCheckOutNow} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderPage;
