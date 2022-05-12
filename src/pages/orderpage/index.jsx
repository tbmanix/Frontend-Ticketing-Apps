import React, { useState, useEffect } from "react";
import ButtonOrder from "../../components/buttonorder";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import OrderInfo from "../../components/orderinfo";
import Seat from "../../components/seat";
import SelectedMovie from "../../components/selectedmovie";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

import "./index.css";

import logo from "../../assets/ebv.id 2.png";

const OrderPage = () => {
  const navigate = useNavigate();
  // const handleChangeMovie = () => {
  //   // console.log(id);
  //   navigate(`/home`);
  // };
  const [data, setData] = useState([]);
  // const [seatBooking, setSeatBooking] = useState([]);

  const { state } = useLocation();

  const listSeat = ["A", "B", "C", "D", "E", "F", "G"];

  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);

  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    getScheduleById();
    getSeatBookingById();
  }, []);

  const getScheduleById = async () => {
    try {
      const resultScheduleById = await axios.get(`schedule/${state.scheduleId}`);

      setData(resultScheduleById.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getSeatBookingById = async () => {
    try {
      const resultSeatBookingById = await axios.get(
        `booking/seat?scheduleId=${state.scheduleId}&dateBooking=${state.dateBooking}&timeBooking=${state.timeBooking}`
      );

      console.log(resultSeatBookingById);
      setReservedSeat(resultSeatBookingById.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // console.log(seatBooking);
  // console.log(data);

  // setReservedSeat(seatBooking);
  console.log(reservedSeat);

  const handleSelectedSeat = (seat) => {
    console.log(seat);

    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter((el) => {
        return el !== seat;
      });
      setSelectedSeat(deleteSeat);
      setTotalPayment(totalPayment - data.price);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
      setTotalPayment((selectedSeat.length + 1) * data.price);
    }
  };
  console.log(totalPayment);
  console.log(selectedSeat);
  // setTotalPayment(selectedSeat.length * data.price);

  const handleCheckOut = () => {
    // const dataOrder = {
    //   ...state,
    //   seat: selectedSeat,
    //   totalPayment: totalPayment
    // };
    // console.log(id);
    navigate(`/payment`, {
      state: { ...state, seat: selectedSeat, totalPayment: totalPayment }
    });

    // setTotalPayment(selectedSeat.length * data.price);
    // console.log(state);
    // console.log(selectedSeat);
    // console.log(totalPayment);
    // console.log(dataOrder);
  };
  const handleChangeMovie = () => {
    // console.log(id);
    navigate(`/home`);
  };
  return (
    <>
      <NavBar />
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <SelectedMovie data={data} />
              <div className="main__seat mt-5">
                <span className="main__title">Choose Your Seat</span>
                <div className="card p-5">
                  <div className="card-body">
                    <p className="fs-5 text-secondary fw-bold text-center">Screen</p>
                    <hr className="fw-bold text-secondary " />
                    {listSeat.map((item) => (
                      <div key={item}>
                        <Seat
                          rowSeat={item}
                          selectedSeat={handleSelectedSeat}
                          reserved={reservedSeat}
                          selected={selectedSeat}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* <OrderInfo data={data} selectedSeat={selectedSeat} totalPayment={totalPayment} /> */}
              <div className="main__order">
                <span className="main__title">Order Info</span>
                <div className="card card-order">
                  <div className="card-header bg-transparent border-success">
                    <div className="text-center mobile">
                      <img src={logo} alt="" />
                      <span className="main__order--items">{data.premiere}</span>
                    </div>
                    <div className="">
                      <div className="d-flex justify-content-between align-items-center mobile pt-2">
                        <p className="main__order--title desktop">Movie Selected</p>
                        <p className="main__order--content mobile-text">{data.name}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="main__order--title">{state.dateBooking}</p>
                        <p className="main__order--content">{state.timeBooking}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="main__order--title">One ticket price</p>
                        <p className="main__order--content">{data.price}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="main__order--title">Seat choosed</p>
                        <p className="main__order--content">{selectedSeat.toString()}</p>
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
            </div>
            <div className="col-md-8 mb-5">
              {/* <ButtonOrder handleChange={handleChangeMovie} handleCheckOut={handleCheckOutNow} /> */}
              <div className="main__button mt-4">
                <div className="mobile-btn">
                  <button
                    onClick={handleChangeMovie}
                    className="desktop btn btn-outline-primary btn-change"
                  >
                    Change Your Movie
                  </button>
                  <button onClick={handleCheckOut} className="btn btn-primary btn-checkout">
                    CheckOut Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderPage;
