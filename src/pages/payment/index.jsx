import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./index.css";
import PaymentInfo from "../../components/paymentinfo";
import NavBar from "../../components/navbar";
import PersonalInfo from "../../components/personalinfo";
import ButtonPayment from "../../components/buttonpayment";
import PaymentMethod from "../../components/paymentmethod";
import Footer from "../../components/footer";
import axios from "../../utils/axios";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // console.log(state);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChangePayment = (data) => {
    // console.log(e);
    setPaymentMethod(data);
  };

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const dataOrder = { ...state, paymentMethod: paymentMethod };

  console.log(dataOrder);
  useEffect(() => {
    if (!dataOrder) {
      navigate("/");
    }
  }, []);
  const handleCreateBooking = async () => {
    try {
      const createBooking = await axios.post("booking/", dataOrder);
      console.log(createBooking);

      // const resultBooking = await axios.get(`booking/id/${createBooking.data.data.id}`);
      // console.log(resultBooking);

      setIsError(false);
      setMessage(createBooking.data.data.message);
      // navigate(`${createBooking.data.data.redirectUrl}`);
      // window.location = `${createBooking.data.data.redirectUrl}`;
      // window.location = `/home`;
      window.open(`${createBooking.data.data.redirectUrl}`);
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data.message);
    }
  };

  console.log(paymentMethod);
  return (
    <>
      <NavBar />
      <section className="main-payment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <PaymentInfo data={state} />
              {/* <PaymentMethod handleChangePayment={handleChangePayment} /> */}
            </div>
            <div className="col-md-4">
              <PersonalInfo />
            </div>
            <div className="col-md-8 mb-5">
              {/* <ButtonPayment handleCreateBooking={handleCreateBooking} /> */}
              <div className="main__button mt-4">
                <div className="mobile-btn">
                  <div className="desktop btn btn-outline-primary btn-prev">Previous Step</div>
                  <div className="btn btn-primary btn-pay" onClick={handleCreateBooking}>
                    Pay Your Order
                  </div>
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

export default Payment;
