import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import "./index.css";

import Card from "../card";

const Upcoming = () => {
  const limit = 99;
  const [page, setPage] = useState(1);
  const [releaseDate, setReleaseDate] = useState(4);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    getdataMovie();
  }, []);

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
        <a href="" className="nowshowing__text">
          view all
        </a>
      </div>
      <div className="d-flex flex-nowrap overflow-auto text-center my-5">
        <button type="button" className="upcoming__btn">
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
        </button>
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
