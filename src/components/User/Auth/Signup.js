import React from "react";
import { Link } from "react-router-dom";
export const Signup = (props) => {
  return (
    <div className="row d-flex justify-content-center align-items-center max_width">
      <div className="col-12 col-sm-12 col-md-6 ">
        <form>
        <h3 className="mt-3 text-center ">{props.heading}</h3>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Name{" "}
            </label>
            <div className="col ">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputphone"
              required
            />
          </div>
          <div className="row mb-3">
            <div className=" col mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="col mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Save login
            </label>
          </div>
          <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
