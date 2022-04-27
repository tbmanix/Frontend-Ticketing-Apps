import React from "react";

import logocinema from "../../assets/ebv.id 2.png";

import "./index.css";

const Schedule = () => {
  return (
    <>
      <section className="schedule">
        <div className="container-fluid">
          <h3 className="my-5 text-center fw-bold">Showtime and Tickets</h3>
          <div className="schedule__dropdown d-flex justify-content-center">
            <div className="schedule__dropdown--date m-3">
              <button
                className="bi-calendar btn-dropdown dropdown-toggle d-flex justify-content-between align-items-center"
                type="button"
                id="dropdownMenuDates"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                21/07/2022
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuDates">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="schedule__dropdown--place m-3">
              <button
                className="bi-pin-map btn-dropdown dropdown-toggle d-flex justify-content-between align-items-center"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Purwokerto
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="schedule__cinema">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-schedule border-light shadow my-4">
                  <div className="card-header bg-transparent border-secondary">
                    <div className="row">
                      <div className="col d-flex align-items-center justify-content-center">
                        <img src={logocinema} alt="" />
                      </div>
                      <div className="col-md d-flex flex-column card-title">
                        <p className="schedule__cinema--title">ebv.id</p>
                        <p className="fw-light fw-light-schedule">
                          Whatever Street No.12 South Purwukerto
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="schedule__cinema--button d-flex justify-content-start p-1 mt-4 w-100">
                      <button className="btn btn-time disabled">08.30 am</button>
                      <button className="btn btn-time disabled">10.30 am</button>
                      <button className="btn btn-time">12.30 pm</button>
                      <button className="btn btn-time">14.30 pm</button>
                      <button className="btn btn-time">16.30 am</button>
                      <button className="btn btn-time disabled">18.30 am</button>
                    </div>
                    <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
                      <p className="text-price">Price</p>
                      <p className="text-content-price">$10.00/seat</p>
                    </div>
                    <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
                      <div className="btn btn-primary w-100 m-2">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-schedule border-light shadow my-4">
                  <div className="card-header bg-transparent border-secondary">
                    <div className="row">
                      <div className="col-md d-flex align-items-center justify-content-center">
                        <img src={logocinema} alt="" />
                      </div>
                      <div className="col d-flex flex-column">
                        <p className="schedule__cinema--title">ebv.id</p>
                        <p className="fw-light fw-light-schedule">
                          Whatever Street No.12 South Purwukerto
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="schedule__cinema--button d-flex justify-content-between">
                      <button className="btn btn-time disabled">08.30 am</button>
                      <button className="btn btn-time">10.30 am</button>
                      <button className="btn btn-time">12.30 pm</button>
                      <button className="btn btn-time">14.30 pm</button>
                      <button className="btn btn-time">08.30 am</button>
                    </div>
                    <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
                      <p className="text-price">Price</p>
                      <p className="text-content-price">$10.00/seat</p>
                    </div>
                    <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
                      <div className="btn btn-primary w-100 m-2">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-schedule border-light shadow my-4">
                  <div className="card-header bg-transparent border-secondary">
                    <div className="row">
                      <div className="col-md d-flex align-items-center justify-content-center">
                        <img src={logocinema} alt="" />
                      </div>
                      <div className="col d-flex flex-column">
                        <p className="schedule__cinema--title">ebv.id</p>
                        <p className="fw-light fw-light-schedule">
                          Whatever Street No.12 South Purwukerto
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="schedule__cinema--button d-flex justify-content-between">
                      <button className="btn btn-time disabled">08.30 am</button>
                      <button className="btn btn-time">10.30 am</button>
                      <button className="btn btn-time">12.30 pm</button>
                      <button className="btn btn-time">14.30 pm</button>
                      <button className="btn btn-time">08.30 am</button>
                    </div>
                    <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
                      <p className="text-price">Price</p>
                      <p className="text-content-price">$10.00/seat</p>
                    </div>
                    <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
                      <div className="btn btn-primary w-100 m-2">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-schedule border-light shadow my-4">
                  <div className="card-header bg-transparent border-secondary">
                    <div className="row">
                      <div className="col-md d-flex align-items-center justify-content-center">
                        <img src={logocinema} alt="" />
                      </div>
                      <div className="col d-flex flex-column">
                        <p className="schedule__cinema--title">ebv.id</p>
                        <p className="fw-light fw-light-schedule">
                          Whatever Street No.12 South Purwukerto
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="schedule__cinema--button d-flex justify-content-between">
                      <button className="btn btn-time disabled">08.30 am</button>
                      <button className="btn btn-time">10.30 am</button>
                      <button className="btn btn-time">12.30 pm</button>
                      <button className="btn btn-time">14.30 pm</button>
                      <button className="btn btn-time">08.30 am</button>
                    </div>
                    <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
                      <p className="text-price">Price</p>
                      <p className="text-content-price">$10.00/seat</p>
                    </div>
                    <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
                      <div className="btn btn-primary w-100 m-2">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-schedule border-light shadow my-4">
                  <div className="card-header bg-transparent border-secondary">
                    <div className="row">
                      <div className="col d-flex align-items-center justify-content-center">
                        <img src={logocinema} alt="" />
                      </div>
                      <div className="col d-flex flex-column">
                        <p className="schedule__cinema--title">ebv.id</p>
                        <p className="fw-light fw-light-schedule">
                          Whatever Street No.12 South Purwukerto
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="schedule__cinema--button d-flex justify-content-between">
                      <button className="btn btn-time disabled">08.30 am</button>
                      <button className="btn btn-time">10.30 am</button>
                      <button className="btn btn-time">12.30 pm</button>
                      <button className="btn btn-time">14.30 pm</button>
                      <button className="btn btn-time">08.30 am</button>
                    </div>
                    <div className="schedule__cinema--price d-flex justify-content-between p-1 mt-4">
                      <p className="text-price">Price</p>
                      <p className="text-content-price">$10.00/seat</p>
                    </div>
                    <div className="schedule__cinema--buttonjoin d-flex justify-content-center">
                      <div className="btn btn-primary w-100 m-2">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center my-5">View More</p>
        </div>
      </section>
    </>
  );
};

export default Schedule;
