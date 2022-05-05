import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import SPContext from "../../../context/SERVICEPROVIDER/auth/SPContext";

export const ServiceProviderLogin = (props) => {
  const spContext = useContext(SPContext);
  const [credentials, setcredentials] = useState({email:"",password:""});
  const onChange = (e)=>{
    setcredentials({
      ...credentials,[e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    spContext.login(credentials.email,credentials.password);
  }
  return (
    <div className="row d-flex justify-content-center align-items-center max_width">
      <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4">
        <form onSubmit={handleSubmit}>
        <h3 className="mt-3 text-center ">{props.heading}</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
            />
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
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
          <div className="text-center">
            <p>
              Not a member? <Link to="/SPsignup">Register</Link>
            </p>
            <p>or login up with:</p>
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
