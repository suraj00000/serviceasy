import React from "react";
import { Link } from "react-router-dom";

export const ServiceProviderSignup = (props) => {
  return (
    <div className="row d-flex justify-content-center align-items-center max_width">
      <div className="col-12 col-sm-12 col-md-8 col-xl-6 col-xxl-6">
        <form>
        <h3 className="mt-3 text-center ">{props.heading}</h3>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Name
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
            <label htmlFor="OragnizationName">
              Enter Your Organization name:
            </label>
            <input
              type="text"
              className="form-control"
              id="OragnizationName"
              aria-describedby="emailHelp"
            />
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
          <div className="row">
            <div className="col mb-3">
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
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-12  mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12  mb-3">
              <label htmlFor="inputAddress2" className="form-label">
                Address line 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-5 mb-3">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" name="state" className="form-select">
                <option value={0} selected>
                  Choose...
                </option>
                <option value={"Andhra Pradesh"}>Andhra Pradesh </option>
                <option>Arunachal Pradesh </option>
                <option>Assam </option>
                <option>Bihar </option>
                <option>Chhattisgarh </option>
                <option>Goa </option>
                <option>Gujarat </option>
                <option>Haryana </option>
                <option>Himachal Pradesh </option>
                <option>Jharkhand </option>
                <option>Karnataka </option>
                <option>Kerala </option>
                <option>Madhya Pradesh </option>
                <option>Maharashtra </option>
                <option>Manipur </option>
                <option>Meghalaya </option>
                <option>Mizoram </option>
                <option>Nagaland </option>
                <option>Odisha </option>
                <option>Punjab </option>
                <option>Rajasthan </option>
                <option>Sikkim </option>
                <option>Tamil Nadu </option>
                <option>Telangana </option>
                <option>Tripura </option>
                <option>Uttar Pradesh </option>
                <option>Uttarakhand </option>
                <option>West Bengal </option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Save Login
            </label>
          </div>
          <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
          <div className="text-center">
            <p>
              Already a member? <Link to="/SPlogin">Login</Link>
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
