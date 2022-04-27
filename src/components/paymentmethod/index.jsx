import React from "react";

const PaymentMethod = () => {
  return (
    <div className="main__paymentmethod mt-5">
      <h2 className="main__title--text">Choose a Payment Method</h2>
      <div className="card-button">
        <div className="row">
          <div className="col-3">
            <div className="btn btn-payment">
              <img className="img-fluid" src="assets/img/logos_google-pay.png" alt="" />
            </div>
          </div>

          <div className="col-3">
            <div className="btn btn-payment">
              <img className="img-fluid" src="assets/img/logos_visa.png" alt="" />
            </div>
          </div>

          <div className="col-3">
            <div className="btn btn-payment">
              <img
                className="img-fluid"
                src="assets/img/Logo GoPay (SVG-240p) - FileVector69 1.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-3">
            <div className="btn btn-payment">
              <img className="img-fluid" src="assets/img/logos_paypal.png" alt="" />
            </div>
          </div>

          <div className="col-3">
            <div className="btn btn-payment">
              <img
                className="img-fluid"
                src="assets/img/Logo DANA (PNG-240p) - FileVector69 1.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-3">
            <div className="btn btn-payment">
              <img
                className="img-fluid"
                src="assets/img/Bank BCA Logo (SVG-240p) - FileVector69 1.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-3">
            <div className="btn btn-payment">
              <img
                className="img-fluid"
                src="assets/img/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-3">
            <div className="btn btn-payment">
              <img className="img-fluid" src="assets/img/Vector.png" alt="" />
            </div>
          </div>
        </div>
        <d className="d-flex align-items-center justify-content-center my-2">
          <hr className="w-100 align-self-start" />
          <p className="mx-4">or</p>
          <hr className="w-100 align-self-start" />
        </d>
        <div className="my-4">
          <p className="text-paycash">Pay via cash.</p>
          <a className="seehow" href="">
            See how it work
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
