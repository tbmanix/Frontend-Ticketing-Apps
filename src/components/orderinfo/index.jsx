import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/ebv.id 2.png";

import "./index.css";

const OrderInfo = (props) => {
  // const [data, setData] = useState([]);
  // console.log(props);
  const { state } = useLocation();
  const { premiere, name, price } = props.data;
  const { selectedSeat } = props.selectedSeat;
  const { totalPayment } = props.totalPayment;
  // useEffect(() => {
  //   getScheduleById();
  // }, []);

  // const getScheduleById = async () => {
  //   try {
  //     const resultScheduleById = await axios.get(`schedule/${state.scheduleId}`);

  //     setData(resultScheduleById.data.data[0]);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  return (
    <>
      <div className="main__order">
        <span className="main__title">Order Info</span>
        <div className="card card-order">
          <div className="card-header bg-transparent border-success">
            <div className="text-center mobile">
              <img src={logo} alt="" />
              <span className="main__order--items">{premiere}</span>
            </div>
            <div className="">
              <div className="d-flex justify-content-between align-items-center mobile pt-2">
                <p className="main__order--title desktop">Movie Selected</p>
                <p className="main__order--content mobile-text">{name}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="main__order--title">{state.dateBooking}</p>
                <p className="main__order--content">{state.timeBooking}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="main__order--title">One ticket price</p>
                <p className="main__order--content">{price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="main__order--title">Seat choosed</p>
                <p className="main__order--content">{selectedSeat}</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="price d-flex justify-content-between pt-4">
              <p className="main__title--price">Price</p>
              <p className="main__content--price">{totalPayment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
