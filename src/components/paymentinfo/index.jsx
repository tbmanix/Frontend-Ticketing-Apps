import React from "react";
import moment from "moment";

import "./index.css";
import Rupiah from "../../helpers/rupiah";

const PaymentInfo = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="main__title-payment">
      <h2 className="dekstop main__title--text">Payment Info</h2>
      <div className="card-payment border-light my-4">
        <div className="d-flex flex-column px-5 py-4 card-mobile">
          <div className="dekstop">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
              <p className="fs-5 fw-light">Date & time</p>
              <p className="fs-5 fw-bold">
                {moment(data.dateBooking).format("LL")}, {data.timeBooking}
              </p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Movie title</p>
              <p className="fs-5 fw-bold">{data.name}</p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Cinema name</p>
              <p className="fs-5 fw-bold">{data.premiere}</p>
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
              <p className="fs-5 fw-light">Number of tickets</p>
              <p className="fs-5 fw-bold">{data.seat.length} pieces</p>
            </div>
            <hr className="m-0" />
          </div>
          <div className="mobile d-flex justify-content-between align-items-center mb-2 mt-4">
            <p className="fs-5 fw-light">Total payment</p>
            <p className="fs-5 fw-bold">
              <Rupiah number={data.totalPayment} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
