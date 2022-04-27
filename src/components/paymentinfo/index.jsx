import React from "react";

import "./index.css";

const PaymentInfo = () => {
  return (
    <div className="main__title-payment">
      <h2 className="dekstop main__title--text">Payment Info</h2>
      <div className="card-payment border-light my-4">
        <div className="d-flex flex-column px-5 py-4">
          <div className="dekstop">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
              <p className="fs-5 fw-light">Date & time</p>
              <p className="fs-5 fw-bold">Tuesday, 07 July 2020 at 02:00</p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Movie title</p>
              <p className="fs-5 fw-bold">Spider-Man: Homecoming</p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Cinema name</p>
              <p className="fs-5 fw-bold">CineOne21 Cinema</p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Movie Selected</p>
              <p className="fs-5 fw-bold">Spider-Man: Homecoming</p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Number of tickets</p>
              <p className="fs-5 fw-bold">3 pieces</p>
            </div>
            <hr className="m-0" />
          </div>
          <div className="mobile d-flex justify-content-between align-items-center mb-2 mt-4">
            <p className="fs-5 fw-light">Total payment</p>
            <p className="fs-5 fw-bold">$30,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
