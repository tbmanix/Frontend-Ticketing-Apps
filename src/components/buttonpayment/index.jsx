import React from "react";

import "./index.css";

const ButtonPayment = (props) => {
  return (
    <>
      <div className="main__button mt-4">
        <div className="mobile-btn">
          <div className="desktop btn btn-outline-primary btn-prev">Previous Step</div>
          <div className="btn btn-primary btn-pay" onClick={props.hanldeCreateBooking}>
            Pay Your Order
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonPayment;
