import React, { useEffect, useState } from "react";

import "./index.css";

const Seat = (props) => {
  const { rowSeat, selectedSeat, reserved, selected } = props;
  const [leftSeat, setLeftSeat] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [rightSeat, setRightSeat] = useState([8, 9, 10, 11, 12, 13, 14]);

  useEffect(() => {
    setupSeat();
  }, []);
  const setupSeat = () => {
    const leftSeatRow = leftSeat.map((item) => `${rowSeat}${item}`);
    const RightSeatRow = rightSeat.map((item) => `${rowSeat}${item}`);
    // console.log(leftSeatRow);
    setLeftSeat(leftSeatRow);
    setRightSeat(RightSeatRow);
  };

  return (
    <>
      <div className="seat">
        <div className="row seat__row">
          <div className="col seat__col seat__col--text "> {rowSeat}</div>

          {leftSeat.map((item) => (
            <div className="col seat__col" key={item}>
              <div
                className={`seat__list ${
                  reserved.includes(item)
                    ? "seat__list--sold"
                    : selected.includes(item)
                    ? "seat__list--selected"
                    : "seat__list--available"
                }`}
                onClick={() => {
                  reserved.includes(item) ? null : selectedSeat(item);
                }}
              ></div>
            </div>
          ))}

          <div className="col seat__col"></div>

          {rightSeat.map((item) => (
            <div className="col seat__col" key={item}>
              <div
                className={`seat__list ${
                  reserved.includes(item)
                    ? "seat__list--sold"
                    : selected.includes(item)
                    ? "seat__list--selected"
                    : "seat__list--available"
                }`}
                onClick={() => {
                  reserved.includes(item) ? null : selectedSeat(item);
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="main__seat mt-5">
        <span className="main__title">Choose Your Seat</span>
        <div className="card p-5">
          <div className="card-body">
            <p className="fs-5 text-secondary fw-bold text-center">Screen</p>
            <hr className="fw-bold text-secondary " />
            <div>kosong</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Seat;
