import React from "react";

export const Categories = () => {
  return (
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
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png"
                alt=""
              />
              <div className="text-wrap text-center">
                Hair, Skin &#38; Nails
              </div>
            </div>
          </a>
        </div>{" "}
        <div className="box m-2 d-flex align-items-center ">
          <a className="HomeLink" href="#">
            <div className="d-flex flex-column align-items-center  ">
              <img
                className="Homeimage"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
                alt="3"
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
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
                alt="4"
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
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
                alt="5"
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
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"
                alt="6"
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
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg"
                alt="7"
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
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"
                alt="8"
              />
              <div className="text-wrap text-center">Salon for women</div>
            </div>
          </a>
        </div>{" "}
      </div>
      {/* main end */}
    </div>
  );
};
