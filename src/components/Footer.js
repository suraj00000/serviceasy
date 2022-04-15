import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on socials:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div >
            <a href="#" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-twitter"></i>
            </a>            
            <a href="#" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/suraj--kushwaha/" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/suraj00000" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h1 className=" fw-bold mb-4">
                    Servic<span style={{color: "#db048c"}}>Easy</span>
                </h1>
                <p>
                  Whatever your need maintenance work done on AC unit or groceries delivered to you for. This is your fast and reliable solution. Select what you need where and when you need it, and we will send your request to all service providers or browse our list of vendors with in selected service group
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link to="#!" className="text-reset">Salon for Men/Women</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Spa</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Electricians</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Plumbers</Link>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="#!" className="text-reset">Pricing</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Settings</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Partners</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">About us</Link>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Shamlaji Road, Aravali District, Modasa, Gujarat 383315</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 91 00000 00000</p>
                <p><i className="fas fa-phone me-3"></i> + 91 00000 00000</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{backgroundcolor: "rgba(0, 0, 0, 0.05)"}}
        >
          © 2022 Copyright:
          <Link className="text-reset fw-bold text-decoration-none" to="#"
            >ServicEasy.com</Link
          >
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
