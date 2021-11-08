import React, { useState } from "react";
import { Link } from "react-router-dom";
import Overlay1 from "../../Assets/Illustrations/Overlay1.svg";
import Overlay2 from "../../Assets/Illustrations/Overlay2.svg";
import "./css/Auth.css";

function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const onHandleSubmit = (e)=>{
    e.preventDefault();  
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
        <div className="heading">Sign in</div>
        <div className="sub-head">
          Sign in and continue your Entrepreneurial Journey
        </div>
        <form action="" className="form">
          <input
            name="email"
            value={data.email}
            type="email"
            placeholder="E-mail"
            className="inp-box"
            onChange={onHandleChange}
          />
          <input
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            className="inp-box"
            onChange={onHandleChange}
          />
          <div className="remember">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <p className="para">
            <Link to="#">Forgot Password.</Link> New here?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
          <button onClick = {onHandleSubmit} className="sign-btn">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
