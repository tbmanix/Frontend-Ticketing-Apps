import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation, useParams } from "react-router-dom";
import axios from "../../utils/axios";

// import image from "../../assets/Rectangle 119.png";

import "./index.css";

const HeaderDetail = () => {
  const params = useParams();
  // console.log(params.id);
  const navigate = useNavigate();
  const limit = 99;
  const [page, setPage] = useState(1);
  const [releaseDate, setReleaseDate] = useState(4);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    getdataMovieById();
  }, []);

  const getdataMovieById = async () => {
    try {
      // console.log("GET DATA MOVIE");
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      const resultMovieById = await axios.get(`movie/${params.id}`);
      // const resultMovieById = await axios.get(`schedule/3`);
      // console.log(resultMovieById.data.data[0]);
      // Output
      setData(resultMovieById.data.data[0]);
      // setPageInfo(resultMovie.data.pagination);
      // setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <header className="header-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 detail__image">
              <div className="detail__image d-flex justify-content-center align-items-center">
                <div className="card-image">
                  <div className="card-body-image">
                    <img
                      src={
                        data.image
                          ? `https://res.cloudinary.com/dx8zjtlv8/image/upload/v1651042190/${data.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      className="card-image-item"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 detail__text">
              <div className="detail__text d-flex flex-column justify-content-center">
                <span className="header__title">{data.name}</span>
                <span className="header__genre">{data.category}</span>
                <div className="row">
                  <div className="col-4 mobile">
                    <span className="header__title--detail">Release Date</span>
                    <span className="header__content--detail">
                      {data.releaseDate ? data.releaseDate.split("T")[0] : ""}
                    </span>
                  </div>
                  <div className="col-8 mobile">
                    <span className="header__title--detail">Directed By</span>
                    <span className="header__content--detail">{data.director}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 mobile">
                    <span className="header__title--detail">Duration</span>
                    <span className="header__content--detail">{data.duration}</span>
                  </div>
                  <div className="col-8 mobile">
                    <span className="header__title--detail">Cast</span>
                    <span className="header__content--detail">{data.cast}</span>
                  </div>
                </div>
                <hr />
                <h1 className="header__title--synopsis">Synopsis</h1>
                <span className="header__content--synopsis">{data.synopsis}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderDetail;
