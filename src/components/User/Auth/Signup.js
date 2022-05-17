import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/USER/auth/UserContext";


export const Signup = (props) => {
  let element1 = ["password","confirmpassword","phone","fname","lname","email"];
  const userState = useContext(UserContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    removeWarningTag();
    if (!dataChecker()) {
      const data =userState.signup(credentials.fname + " " + credentials.lname, credentials.email, credentials.phone, credentials.password);      
      if(!data.success){
        props.showAlert("Something went wrong","danger");
      }
    } 

  }
  const [credentials, setCredentials] = useState({ fname: "", lname: "", email: "", phone: "", password: "", confirmpassword: "" });
  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }
  const dataChecker = () => {
    // console.log("Data checker");
    let error = false;
    if (credentials.fname === "" || credentials.lname === "" ) {
      warningTag('fname');
      warningTag('lname');
      props.showAlert("Plese Enter a first and second name","danger");
      error = true
    } else if ((credentials.password != credentials.confirmpassword)||credentials.password=== "") {
      warningTag("password");
      warningTag("confirmpassword")
      props.showAlert("Password doesn't match","danger");
      error = true;
    } else if ((credentials.phone.length != 10) || isNaN(credentials.phone)) {
      props.showAlert("Enter a valid phone number","danger");
      warningTag("phone");
      error = true;
    }else if(credentials.email === "" || !validateEmail(credentials.email)){
      warningTag("email");
      props.showAlert("Enter a valid email address","danger");
      error = true;
    }
    return error;
  }
  const warningTag = (id) => {
    // element1.push(id);
    const a = document.getElementById(id);
    a.classList.add("border-danger");
  }

  function removeWarningTag() {
    // console.log("<<<<<<<<<<<<<<<"+element1);
    // console.log("Remove");
    element1.forEach((value) => {
      const a = document.getElementById(value);
      a.classList.remove("border-danger");
      // console.log("Removed"+value);
    })
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
  };

  return (
    <div className="row d-flex justify-content-center align-items-center max_width">
      <div className="col-12 col-sm-12 col-md-6 ">
        <form onSubmit={handleSubmit}>
          <h3 className="mt-3 text-center ">{props.heading}</h3>
          <div className="row mb-3">
            <label htmlFor="name" className="form-label">
              Enter Name
            </label>
            <div className="col ">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="fname"
                aria-label="First name"
                name="fname"
                onChange={onChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="lname"
                name="lname"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                onChange={onChange}
                required
              />
            </div>
          </div>
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
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 ">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              required
              onChange={onChange}
            />
          </div>
          <div className="row mb-3">
            <div className=" col mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                id="password"
                name="password"
                onChange={onChange}
                required
              />
            </div>
            <div className="col mb-3">
              <label htmlFor="confirmpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                onChange={onChange}
                required
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
