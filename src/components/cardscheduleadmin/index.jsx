import React from "react";

import logocinema from "../../assets/ebv.id 2.png";

const CardScheduleAdmin = (props) => {
  const { premiere, price, location, time } = props.data;
  // console.log(props);

  return (
    <div className="col-md-4">
      <div className="card card-schedule border-light shadow my-4">
        <div className="card-header bg-transparent border-secondary">
          <div className="row">
            <div className="col-md d-flex align-items-center justify-content-center">
              <img src={logocinema} alt="" />
            </div>
            <div className="col d-flex flex-column">
              <p className="schedule__cinema--title">{premiere}</p>
              <p className="fw-light fw-light-schedule">{location}</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="schedule__cinema--button d-flex justify-content-between">
            {time.map((item) => (
              <button className="btn btn-time" key={item}>
                {item}
              </button>
            ))}
          </div>
          <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
            <p className="text-price">Price</p>
            <p className="text-content-price">{price}/seat</p>
          </div>
          <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
            <button onClick={() => props.setUpdate(props.data)} className="btn__update me-4">
              Update
            </button>
            <button onClick={() => props.handleDelete(props.data)} className="btn__delete ms-4">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardScheduleAdmin.defaultProps = {
  category: "Default Category",
  data: {
    premiere: "",
    price: "",
    location: "",
    time: ""
  }
};

export default CardScheduleAdmin;
