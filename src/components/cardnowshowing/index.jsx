import React from "react";

import "./index.css";
import logo from "../../assets/Rectangle 119.png";

const CardNowShowing = (props) => {
  const { id, name, category, image } = props.data;
  const cloudinary = process.env.REACT_APP_IMAGE_CLOUDINARY;
  //   console.log(props);

  return (
    <>
      <div className="card card-home card-body text-center shadow">
        <img
          src={
            image
              ? `${cloudinary}/${image}`
              : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          }
          alt="image-movie"
          className="nowshowing__movie--items"
        />
        <div className="card-desc pt-3">
          <span className="nowshowing__text--items">{name}</span>
          <span className="d-block nowshowing__text--items-secondary pt-0">{category}</span>
          <button onClick={() => props.handleDetail(id)} className="nowshowing__btn">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

CardNowShowing.defaultProps = {
  category: "Default Category",
  data: {
    id: "",
    name: "",
    category: ""
  }
};

export default CardNowShowing;
