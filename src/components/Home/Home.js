import React from "react";
import "../../assets/style/Home.css";
import { Categories } from "./Categories";
import { HomeRepair } from "./HomeRepair";
// console.log(process.env.REACT_APP_PUBLIC_URL);
const home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide mt-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../assets/image/1.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../assets/image/2.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../assets/image/3.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Browse categories */}
      <Categories />
      {/* Home Repair */}
      <HomeRepair />
    </>
  );
};

export default home;
