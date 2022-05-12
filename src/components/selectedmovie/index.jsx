import React from "react";

import "./index.css";

const SelectedMovie = (props) => {
  const { name } = props.data;
  return (
    <>
      <div className="main__movie">
        <span className="main__title">Movie Selected</span>
        <div className="card card-order">
          <div className="mx-3 d-flex justify-content-between align-items-center p-2">
            <span className="main__title--items">{name}</span>
            <button className="btn-main__title" type="button">
              Change Movie
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedMovie;
