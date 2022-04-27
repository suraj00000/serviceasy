import React from "react";

export const HomeRepair = () => {
  const cartStyle = {
    width: "15rem",
  };
  return (
    <div className="mt-5">
      <h3 className="text-center"> Home repair</h3>
      <div className="d-flex align-items-center justify-content-around flex-wrap ">
        <div className="  my-3">
          <div className="card" style={cartStyle}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Carpenter</h5>
            </div>
          </div>
        </div>
        <div className="  my-3">
          <div className="card" style={cartStyle}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/electrician.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Electricians</h5>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="card" style={cartStyle}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Plumbers</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
