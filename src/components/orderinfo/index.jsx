import React from "react";

import logo from "../../assets/ebv.id 2.png";

import "./index.css";

const OrderInfo = () => {
  return (
    <>
      <div className="main__order">
        <span className="main__title">Order Info</span>
        <div className="card card-order">
          <div className="card-header bg-transparent border-success">
            <div className="text-center mobile">
              <img src={logo} alt="" />
              <span className="main__order--items">CinemaOne 21 Cinema</span>
            </div>
            <div className="">
              <div className="d-flex justify-content-between align-items-center mobile pt-2">
                <p className="main__order--title desktop">Movie Selected</p>
                <p className="main__order--content mobile-text">Spider-Man: Homecoming</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="main__order--title">Tuesday, 07 July 2020</p>
                <p className="main__order--content">02:00</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="main__order--title">One ticket price</p>
                <p className="main__order--content">$10</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="main__order--title">Seat choosed</p>
                <p className="main__order--content">C4, C5, C6</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="price d-flex justify-content-between pt-4">
              <p className="main__title--price">Price</p>
              <p className="main__content--price">$30</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
