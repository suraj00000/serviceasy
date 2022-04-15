import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/User/Auth/Login";
import { Signup } from "./components/User/Auth/Signup";
import { ServiceProvider_Login } from "./components/ServiceProvider/Auth/ServiceProvider_Login";
import { ServiceProvider_Signup } from "./components/ServiceProvider/Auth/ServiceProvider_Signup";
function App() {
  const element = `Servic<span style={{ color: "#db048c" }}>Easy</span>`;
  const envfile = process.env.REACT_APP_PUBLIC_URL
  console.log(envfile);
  return (
    <>
      <Router>
        <Navbar title="ServicEasy"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home env={envfile} />} />
            <Route exact path="/login" element={<Login heading="Login to Your Account" />} />
            <Route exact path="/signup" element={<Signup heading="Create a new account" />} />
            <Route exact path="/SPlogin" element={<ServiceProvider_Login heading="Login to Your Account"/>} />
            <Route exact path="/SPsignup" element={<ServiceProvider_Signup heading="Create a new account"/>} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
