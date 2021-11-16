import React, { useState } from "react";
import { Link } from "react-router-dom";
import Overlay1 from "../../Assets/Illustrations/Overlay1.svg";
import Overlay2 from "../../Assets/Illustrations/Overlay2.svg";
import "./css/Auth.css";

function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e)=>{
      e.preventDefault()
      console.log(data);

  }
  return (
    <section className="auth">
      <div className="overlay1">
        <img src={Overlay1} alt="" />
      </div>
      <div className="overlay2">
        <img src={Overlay2} alt="" />
      </div>
      <div className="container">
        <div className="heading">Sign Up</div>
        <div className="sub-head">
          Sign up and start your Entrepreneurial Journey
        </div>
        <form action="" className="form">
          <input
            name="email"
            value={data.email}
            onChange={onHandleChange}
            type="email"
            placeholder="E-mail"
            className="inp-box"
          />
          <input
            name="password"
            onChange={onHandleChange}
            value={data.password}
            type="password"
            placeholder="Password"
            className="inp-box"
          />
          <input
            name="confirmPassword"
            onChange={onHandleChange}
            value={data.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="inp-box"
          />
          <p className="para">
            Already have an Account? <Link to="/signin">Sign in</Link>
          </p>
          <button onClick = {onHandleSubmit} className="sign-btn">Signup</button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
