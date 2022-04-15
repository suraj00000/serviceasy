import React from "react";
import "../assets/style/Home.css";
// console.log(process.env.REACT_APP_PUBLIC_URL);
const home = () => {
  const cartStyle = {
    width: "15rem",
  };
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
      <div className="mt-5">
        <h3 className="text-start">Browse categories</h3>
        {/* main start */}
        <div className="d-flex flex-row justify-content-center flex-wrap">
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>{" "}
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>
          <div className="box m-2 d-flex align-items-center ">
            <a className="HomeLink" href="#">
              <div className="d-flex flex-column align-items-center  ">
                <img
                  className="Homeimage"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                  alt=""
                />
                <div className="text-wrap text-center">Salon for women</div>
              </div>
            </a>
          </div>
        </div>
        {/* main end */}
      </div>
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
    </>
  );
};

export default home;
