import React from "react";

import "./index.css";

const ButtonOrder = () => {
  return (
    <>
      <div className="main__button mt-4">
        <div className="mobile-btn">
          <div className="desktop btn btn-outline-primary btn-change">Change Your Movie</div>
          <div className="btn btn-primary btn-checkout">CheckOut Now</div>
        </div>
      </div>
    </>
  );
};

export default ButtonOrder;
