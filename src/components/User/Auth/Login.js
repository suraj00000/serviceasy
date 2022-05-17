import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/USER/auth/UserContext";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const userContext = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!dataValidate()){
      const data = userContext.login(credentials.email, credentials.password);
      if(!data.success){
        props.showAlert("Plese use valid email and password","danger");        
      }
    }else{
      props.showAlert("Plese use valid email and password","danger");
    }
    
  };
  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  };


  const dataValidate = ()=>{    
    if(!validateEmail(credentials.email)){
      console.log(credentials.email);
      return true
    }else if(credentials.password == ""){
      console.log(credentials.password);
      return true
    }
    return false
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
      <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4">
        <form onSubmit={handleSubmit}>
          <h3 className="mt-3 text-center ">{props.heading}</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
              required
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
              name="password"
              className="form-control"
              id="password"
              value={credentials.password}
              onChange={onChange}
              required
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
              Not a member? <Link to="/signup">Register</Link>
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

export default Login;
