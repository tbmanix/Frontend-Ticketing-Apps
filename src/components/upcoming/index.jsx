import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import "./index.css";

import Card from "../card";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const limit = 99;
  const [page, setPage] = useState(1);
  const [releaseDate, setReleaseDate] = useState(new Date().getMonth() + 2);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const month = [
    { number: 1, title: "Januari" },
    { number: 2, title: "Februari" },
    { number: 3, title: "Maret" },
    { number: 4, title: "April" },
    { number: 5, title: "Mei" },
    { number: 6, title: "Juni" },
    { number: 7, title: "Juli" },
    { number: 8, title: "Agustus" },
    { number: 9, title: "September" },
    { number: 10, title: "Oktober" },
    { number: 11, title: "November" },
    { number: 12, title: "Desember" }
  ];

  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovie();
  }, [releaseDate]);

  const getdataMovie = async () => {
    try {
      console.log("GET DATA MOVIE");

      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      const resultMovie = await axios.get(`movie/?limit=${limit}&searchReleaseDate=${releaseDate}`);
      // console.log(resultMovie);
      // Output
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
      // setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(releaseDate);

  // console.log(data);
  // console.log(pageInfo);
  const handleDetailMovie = (id) => {
    console.log(id);
  };

  return (
    <div className="upcoming">
      <div className="d-flex justify-content-between">
        <a href="" className="nowshowing__text">
          Upcoming
        </a>
        <Link to="/viewall" className="nowshowing__text">
          View All
        </Link>
      </div>
      <div className="d-flex flex-nowrap overflow-auto text-center my-5">
        {month.map((item) => (
          <button
            type="button"
            className="upcoming__btn"
            // className={`btn mx-1 my-2 ${
            //   item.number === releaseDate ? "btn-primary" : "btn-outline-primary"
            // }`}
            onClick={() => setReleaseDate(item.number)}
            // onChange={handlemonth}
            key={item.number}
          >
            {item.title}
          </button>
        ))}
        {/* <button type="button" className="upcoming__btn">
          January
        </button>
        <button type="button" className="upcoming__btn">
          February
        </button>
        <button type="button" className="upcoming__btn">
          March
        </button>
        <button type="button" className="upcoming__btn">
          April
        </button>
        <button type="button" className="upcoming__btn">
          May
        </button>
        <button type="button" className="upcoming__btn">
          June
        </button>
        <button type="button" className="upcoming__btn">
          July
        </button>
        <button type="button" className="upcoming__btn">
          Agustus
        </button>
        <button type="button" className="upcoming__btn">
          September
        </button>
        <button type="button" className="upcoming__btn">
          October
        </button>
        <button type="button" className="upcoming__btn">
          November
        </button>
        <button type="button" className="upcoming__btn">
          Desember
        </button> */}
      </div>
      <div className="d-flex flex-nowrap overflow-auto text-center mt-5">
        {data.map((item) => (
          <Card key={item.id} data={item} handleDetail={handleDetailMovie} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
