import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation, useParams } from "react-router-dom";
import axios from "../../utils/axios";

import logocinema from "../../assets/ebv.id 2.png";

import "./index.css";
// import CardSchedule from "../cardschedule";

const Schedule = () => {
  const params = useParams();
  const navigate = useNavigate();
  const limit = 99;
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  useEffect(() => {
    getdataScheduleById();
  }, []);

  useEffect(() => {
    getdataScheduleById();
  }, [location]);

  console.log(location);

  const getdataScheduleById = async () => {
    try {
      // console.log("GET DATA MOVIE");
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      const resultScheduleById = await axios.get(
        `schedule/?limit=${limit}&searchMovieId=${params.id}&searchLocation=${location}`
      );
      // console.log(`schedule/?limit=${limit}&searchMovieId=${params.id}&searchLocation=${location}`);
      // Output
      setData(resultScheduleById.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const [dataOrder, setDataOrder] = useState({
    userId: dataUser[0].id,
    movieId: params.id,
    dateBooking: new Date().toISOString().split("T")[0]
  });

  console.log(dataOrder);

  // const disableDates = () => {
  //   let today, dd, mm, yyyy;
  //   today = new Date();
  //   dd = today.getDate() + 1;
  //   mm = today.getMonth() + 1;
  //   yyyy = today.getFullYear();
  //   return yyyy + "-" + mm + "-" + dd;
  // };

  const handleDate = (e) => {
    setDataOrder({
      ...dataOrder,
      dateBooking: e.target.value
    });
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
    // getdataScheduleById();
    // console.log(e.target.value);
  };

  // console.log(location);

  const changeDataBooking = (data) => {
    setDataOrder({ ...dataOrder, ...data });
  };
  // console.log(changeDataBooking);

  const handleBooking = () => {
    // console.log(id);
    navigate(`/orderpage`, { state: dataOrder });
  };

  return (
    <>
      <section className="schedule">
        <div className="container-fluid">
          <h3 className="my-5 text-center fw-bold">Showtime and Ticketss</h3>
          <div className="schedule__dropdown d-flex justify-content-center">
            <div className="schedule__dropdown--date m-3">
              <input
                type="date"
                value={dataOrder.dateBooking}
                min={dataOrder.dateBooking}
                onChange={handleDate}
              />
            </div>
            <div className="schedule__dropdown--place m-3">
              <select name="location" onChange={handleLocation}>
                <option value="">Select Location</option>
                <option value="parung">Parung</option>
                <option value="bogor">Bogor</option>
              </select>
            </div>
          </div>
          <div className="schedule__cinema">
            <div className="row">
              {data.map((item) => (
                // <CardSchedule key={item.id} data={item} handleBook={handleBookNow} />
                <div className="col-md-4" key={item.id}>
                  <div className="card card-schedule border-light shadow my-4">
                    <div className="card-header bg-transparent border-secondary">
                      <div className="row">
                        <div className="col-md d-flex align-items-center justify-content-center">
                          <img src={logocinema} alt="" />
                        </div>
                        <div className="col d-flex flex-column">
                          <p className="schedule__cinema--title">{item.premiere}</p>
                          <p className="fw-light fw-light-schedule">{item.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="schedule__cinema--button d-flex justify-content-between">
                        {item.time.map((itemTime) => (
                          <button
                            className="btn btn-time"
                            key={itemTime}
                            onClick={() =>
                              changeDataBooking({ timeBooking: itemTime, scheduleId: item.id })
                            }
                          >
                            {itemTime}
                          </button>
                        ))}
                      </div>
                      <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
                        <p className="text-price">Price</p>
                        <p className="text-content-price">{item.price}/seat</p>
                      </div>
                      <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
                        <button
                          className="btn btn-primary w-100 m-2"
                          disabled={item.id === dataOrder.scheduleId ? false : true}
                          onClick={handleBooking}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center my-3">View More</p>
          {/* <hr /> */}
          {/* <h5>{JSON.stringify(dataOrder)}</h5> */}
        </div>
      </section>
    </>
  );
};

export default Schedule;
