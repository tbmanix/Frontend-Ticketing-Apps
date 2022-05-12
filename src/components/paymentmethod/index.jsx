import React, { useState } from "react";

const PaymentMethod = (props) => {
  return (
    <>
      <div className="main__paymentmethod mt-5">
        <h2 className="main__title--text">Choose a Payment Method</h2>
        <div className="card-button">
          <div className="row">
            <div className="col-3">
              <div
                className="btn btn-payment"
                // value="googlepay"
                onClick={() => props.handleChangePayment("googlepay")}
              >
                <img className="img-fluid" src="assets/img/logos_google-pay.png" />
              </div>
            </div>

            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("visa")}>
                <img className="img-fluid" src="assets/img/logos_visa.png" alt="" />
              </div>
            </div>

            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("gopay")}>
                <img
                  className="img-fluid"
                  src="assets/img/Logo GoPay (SVG-240p) - FileVector69 1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("paypal")}>
                <img className="img-fluid" src="assets/img/logos_paypal.png" alt="" />
              </div>
            </div>

            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("dana")}>
                <img
                  className="img-fluid"
                  src="assets/img/Logo DANA (PNG-240p) - FileVector69 1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("bca")}>
                <img
                  className="img-fluid"
                  src="assets/img/Bank BCA Logo (SVG-240p) - FileVector69 1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("bri")}>
                <img
                  className="img-fluid"
                  src="assets/img/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-payment" onClick={() => props.handleChangePayment("vector")}>
                <img className="img-fluid" src="assets/img/Vector.png" alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center my-2">
            <hr className="w-100 align-self-start" />
            <p className="mx-4">or</p>
            <hr className="w-100 align-self-start" />
          </div>
          <div className="my-4">
            <p className="text-paycash">Pay via cash.</p>
            <a className="seehow" href="">
              See how it work
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
