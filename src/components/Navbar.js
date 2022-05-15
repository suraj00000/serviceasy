import React from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

const Navbar = () => {
  let userType='none';
  if(localStorage.getItem('type')=='user'){
      userType='user';
  }else if(localStorage.getItem('type')=='SP'){
    userType='SP';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Servic<span style={{ color: "#db048c" }}>Easy</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex me-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <Links userType={userType}/>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
