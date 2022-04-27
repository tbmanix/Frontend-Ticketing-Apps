import React from "react";

import "./index.css";
import logo from "../../assets/Rectangle 119.png";

const Card = (props) => {
  const { id, name, category, image } = props.data;
  // console.log(props);

  return (
    <>
      <div className="card-upcoming card-body text-center shadow">
        <img
          src={
            image
              ? `https://res.cloudinary.com/dx8zjtlv8/image/upload/v1651042190/${image}`
              : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          }
          alt="image-upcoming"
          className="upcoming-image"
        />
        <div className="card-desc-upcoming pt-2">
          <span className="nowshowing__text--items">{name}</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">{category}</span>
        </div>
        <button onClick={() => props.handleDetail(id)} className="nowshowing__btn">
          Details
        </button>
      </div>
      {/* <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
      <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
      <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
      <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
      <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
      <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
      <div className="card card-body text-center shadow">
        <img src={logo} alt="image-upcoming" className="upcoming__image" />
        <div className="card-desc-upcoming pt-3">
          <span className="nowshowing__text--items">Spider-Man: Homecoming</span>
          <span className="d-block nowshowing__text--items-secondary pt-1">
            Action, Adventure, Sci-Fi
          </span>
          <button type="button" className="nowshowing__btn">
            Details
          </button>
        </div>
      </div> */}
    </>
  );
};

Card.defaultProps = {
  category: "Default Category",
  data: {
    id: "",
    name: "",
    category: ""
  }
};

export default Card;
