import React from "react";

import "./index.css";
import image1 from "../../assets/banner1.png";
import image2 from "../../assets/banner2.png";
import image3 from "../../assets/banner3.png";

const HeaderHome = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-6">
          <div className="banner-text d-flex flex-column justify-content-center align-items-start">
            <div className="banner-text-secondary">Nearest Cinema, Newest Movie</div>
            <div className="banner-text-primary">Find Out Now !</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="frame d-flex justify-content-center align-items-center">
            <div className="frame-image d-flex justify-content-center align-items-center">
              <img className="image-items align-self-end" src={image1} alt="" />
              <img className="image-items align-self-center" src={image2} alt="" />
              <img className="image-items align-self-start" src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
