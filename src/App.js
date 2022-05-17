import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About";
import Login from "./components/User/Auth/Login";
import { Signup } from "./components/User/Auth/Signup";
import { ServiceProviderLogin } from "./components/ServiceProvider/Auth/ServiceProviderLogin";
import { ServiceProviderSignup } from "./components/ServiceProvider/Auth/ServiceProviderSignup";
import UserState from "./context/USER/auth/UserState";
import SPState from "./context/SERVICEPROVIDER/auth/SPState";
import SPDashboard from "./components/ServiceProvider/SPDashboard";
import Alert from "./components/About";
function App() {
  // const element = `Servic<span style={{ color: "#db048c" }}>Easy</span>`;
  const envfile = process.env.REACT_APP_PUBLIC_URL;
  // console.log(envfile);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <>
      <Router>
        <UserState>
          <SPState>
            <Navbar />
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home env={envfile} />} />
                <Route
                  exact
                  path="/login"
                  element={<Login heading="Login to Your Account" showAlert={showAlert} />}
                />
                <Route
                  exact
                  path="/signup"
                  element={<Signup heading="Create a new account" showAlert={showAlert} />}
                />
                <Route
                  exact
                  path="/SPlogin"
                  element={
                    <ServiceProviderLogin heading="Login to Your Account" showAlert={showAlert} />
                  }
                />
                <Route
                  exact
                  path="/SPsignup"
                  element={
                    <ServiceProviderSignup heading="Create a new account" showAlert={showAlert}/>
                  }
                />
                <Route
                  exact
                  path="/SPdashboard"
                  element={
                    <SPDashboard />
                  }
                />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </div>
            <Footer />
          </SPState>
        </UserState>
      </Router>
    </>
  );
}

export default App;
