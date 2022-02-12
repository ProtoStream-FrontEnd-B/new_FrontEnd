import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login , Loading } from "../../redux/actions/authAction";
import { Link , useHistory } from "react-router-dom";
import Overlay1 from "../../Assets/Illustrations/Overlay1.svg";
import { isLogin  } from "../../redux/actions/authAction";
import Overlay2 from "../../Assets/Illustrations/Overlay2.svg";
import "./css/Auth.css";
import { setJson } from "../../Global/Helper";

function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const resp = useSelector((state) => state.auth);
  const {isLoading} = resp;
  const userid = setJson(localStorage.getItem("user"));
  const { isAuthenticated } = resp;

  const pushTo = (isAuth) => {
    
    if (isAuth) {
      console.log(resp)
     
      if(userid.role===0){
        
        history.push("/user-dashboard");
      }
      else if(userid.role===2){

        history.push("/tbi-dashboard")
      }

      else if(userid.role===3){
        history.push("/Mentor-dashboard");
      }
     
    }
  };

  // useEffect(()=>{
    
  //   pushTo(isAuthenticated);
  // },[])

  
  useEffect(() => {

    
 
   pushTo(isAuthenticated);
    
  }, [isAuthenticated])
  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(Loading());
    dispatch(Login(data));
    
    console.log(isAuthenticated);
   
  };
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
          <button disabled = {isLoading} onClick = {onHandleSubmit} className={!isLoading?"sign-btn":"sign-btn-hid"}>Login</button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
