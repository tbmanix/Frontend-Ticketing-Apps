import React from "react";
import ButtonOrder from "../../components/buttonorder";
import NavBar from "../../components/navbar";
import OrderInfo from "../../components/orderinfo";
import Seat from "../../components/seat";
import SelectedMovie from "../../components/selectedmovie";

import "./index.css";

const OrderPage = () => {
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
              <ButtonOrder />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderPage;
