import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import SPContext from "../../../context/SERVICEPROVIDER/auth/SPContext";

export const ServiceProviderSignup = (props) => {
  let element = ["password", "confirmpassword", "inputCity", "fname", "lname", "email", "inputAddress", "OragnizationName", "inputZip"];

  const spContext = useContext(SPContext);

  const [credentials, setCredentials] = useState({ fname: "", lname: "", email: "", OragnizationName: "", password: "", confirmpassword: "", inputAddress: "", inputAddress2: "", inputCity: "", inputState: "", inputZip: "" });

  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    removeWarningTag();
    console.log(credentials);
    if (!dataChecker()) {
      spContext.signup(credentials.fname+" "+credentials.lname,credentials.email, credentials.OragnizationName, credentials.inputAddress+" "+credentials.inputAddress2+" "+credentials.inputCity+" "+credentials.inputState+" "+credentials.inputZip, credentials.password);
    }else{
      console.log("Enter a valid data:");
    }
  }

  const dataChecker = () => {
    let error = false;
    if (credentials.fname === "" || credentials.lname === "") {
      warningTag('fname');
      warningTag('lname');
      error = true;
      return error;
    } else if ((credentials.password != credentials.confirmpassword) || credentials.password === "") {
      warningTag("password");
      warningTag("confirmpassword");
      error = true;
      return error;

    } else if ((credentials.inputZip.length != 6) || isNaN(credentials.inputZip)) {
      warningTag("inputZip");
      error = true;
      return error;

    } else if ( credentials.email === "" || credentials.email.length!=10 ) {
      warningTag("email");
      error = true;
      return error;
    } else if (credentials.OragnizationName == "") {
      warningTag("OragnizationName");
      error = true;
      return error;

    } else if (credentials.inputAddress == "") {
      warningTag("inputAddress");
      error = true;
      return error;

    } else if (credentials.inputCity == "") {
      warningTag("inputCity");
      error = true;
      return error;
    }

    return error;
  }
  const warningTag = (id) => {
    console.log(id);
    const a = document.getElementById(id);
    a.classList.add("border-danger");
  }

  function removeWarningTag() {
    element.forEach((value) => {
      const a = document.getElementById(value);
      a.classList.remove("border-danger");
    })
  }





  return (
    <div className="row d-flex justify-content-center align-items-center max_width">
      <div className="col-12 col-sm-12 col-md-8 col-xl-6 col-xxl-6">
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
                aria-label="First name"
                name="fname"
                id="fname"
                onChange={onChange}
                // required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="lname"
                id="lname"
                onChange={onChange}
                // required
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
              aria-describedby="emailHelp"
              id="OragnizationName"
              name="OragnizationName"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              id="email"
              name="email"
              onChange={onChange}
              // required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                // required
              />
            </div>
            <div className="col mb-3">
              <label htmlFor="confirmpassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                onChange={onChange}
                // required
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-12  mb-3">
              <label htmlFor="Address line 1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="inputAddress"
                placeholder="1234 Main St"
                onChange={onChange}
                // required
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
                name="inputAddress2"
                placeholder="Apartment, studio, or floor"
                onChange={onChange}
              />
            </div>
            <div className="col-md-5 mb-3">
              <label htmlFor="inputCity" className="form-label" >
                City
              </label>
              <input type="text" className="form-control" id="inputCity" name="inputCity" onChange={onChange} />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState"  name="inputState" className="form-select" onChange={onChange}>
                <option value={"asdff"} >
                  Choose...
                </option>
                <option value={"Andhra Pradesh"}>Andhra Pradesh </option>
                <option value={"Arunachal Pradesh"}>Arunachal Pradesh </option>
                <option value={"Assam"}>Assam </option>
                <option value={"Bihar"}>Bihar </option>
                <option value={"Chhattisgarh "}>Chhattisgarh </option>
                <option value={"Goa"}>Goa </option>
                <option value={"Gujarat"}>Gujarat </option>
                <option value={"Haryana"}>Haryana </option>
                <option value={"Himachal Pradesh"}>Himachal Pradesh </option>
                <option value={"Jharkhand"}>Jharkhand </option>
                <option value={"Karnataka"}>Karnataka </option>
                <option value={"Kerala"}>Kerala </option>
                <option value={"Madhya Pradesh"}>Madhya Pradesh </option>
                <option value={"Maharashtra"}>Maharashtra </option>
                <option value={"Manipur"}>Manipur </option>
                <option value={"Meghalaya"}>Meghalaya </option>
                <option value={"Mizoram"}>Mizoram </option>
                <option value={"Nagaland"}>Nagaland </option>
                <option value={"Odisha"}>Odisha </option>
                <option value={"Punjab"}>Punjab </option>
                <option value={"Rajasthan"}>Rajasthan </option>
                <option value={"Sikkim"}>Sikkim </option>
                <option value={"Tamil"}>Tamil Nadu </option>
                <option value={"Telangana"}>Telangana </option>
                <option value={"Tripura"}>Tripura </option>
                <option value={"Uttar Pradesh"}>Uttar Pradesh </option>
                <option value={"Uttarakhand"}>Uttarakhand </option>
                <option value={"West Bengal"}>West Bengal </option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" name="inputZip" onChange={onChange} />
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
