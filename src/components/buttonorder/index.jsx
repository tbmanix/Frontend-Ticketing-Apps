import React from "react";

import "./index.css";

const ButtonOrder = (props) => {
  return (
    <>
      <div className="main__button mt-4">
        <div className="mobile-btn">
          <button
            onClick={() => props.handleChange()}
            className="desktop btn btn-outline-primary btn-change"
          >
            Change Your Movie
          </button>
          <button onClick={() => props.handleCheckOut()} className="btn btn-primary btn-checkout">
            CheckOut Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonOrder;
