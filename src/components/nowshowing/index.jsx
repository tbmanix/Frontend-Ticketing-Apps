import React, { useState, useEffect } from "react";
import imagemovie from "../../assets/Rectangle 119.png";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import "./index.css";
import CardNowShowing from "../cardnowshowing";

const NowShowing = () => {
  const navigate = useNavigate();
  const limit = 99;
  const [page, setPage] = useState(1);
  const [releaseDate, setReleaseDate] = useState(new Date().getMonth());
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  console.log(releaseDate);
  useEffect(() => {
    getdataMovie();
  }, []);

  const getdataMovie = async () => {
    try {
      // console.log("GET DATA MOVIE");
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      // const resultMovie = await axios.get(`movie/?limit=${limit}&searchReleaseDate=${releaseDate}`);
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

  const handleDetailMovie = (id) => {
    // console.log(id);
    navigate(`/moviedetail/${id}`);
  };

  return (
    <div className="nowshowing">
      <div className="d-flex justify-content-between">
        <a href="" className="nowshowing__text">
          Now Showing
        </a>
        <a href="" className="nowshowing__text">
          view all
        </a>
      </div>
      <div className="d-flex flex-nowrap overflow-auto text-center mt-4">
        {data.map((item) => (
          <CardNowShowing key={item.id} data={item} handleDetail={handleDetailMovie} />
        ))}

        {/* <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-0">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div>
        <div className="card card-home card-body text-center shadow">
          <img src={imagemovie} alt="image-movie" className="nowshowing__movie--items" />
          <div className="card-desc pt-3">
            <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
            <span className="d-block nowshowing__text--items-secondary pt-1">
              Action, Adventure, Sci-Fi
            </span>
            <button type="button" className="nowshowing__btn">
              Details
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NowShowing;
