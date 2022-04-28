import React from "react";
import PaymentInfo from "../../components/paymentinfo";
import NavBar from "../../components/navbar";

import "./index.css";
import PersonalInfo from "../../components/personalinfo";
import ButtonPayment from "../../components/buttonpayment";
import PaymentMethod from "../../components/paymentmethod";
import Footer from "../../components/footer";

const Payment = () => {
  return (
    <>
      <NavBar />
      <section className="main-payment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <PaymentInfo />
              <PaymentMethod />
            </div>
            <div className="col-md-4">
              <PersonalInfo />
            </div>
            <div className="col-md-8 mb-5">
              <ButtonPayment />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payment;
