// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { UpdateTRL } from "../../redux/actions/startupAction";
// import { SignUp } from "../../redux/actions/authAction";
// import { Link, useHistory } from "react-router-dom";
// import Overlay1 from "../../Assets/Illustrations/Overlay1.svg";
// import Overlay2 from "../../Assets/Illustrations/Overlay2.svg";
// import "./css/Auth.css";
// import { setJson } from "../../Global/Helper";

// function Signin() {
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     number: 8445775919,
//     branch: "",
//   });
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const resp = useSelector((state) => state.auth);

//   const { isAuthenticated } = resp;

//   const onHandleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // to set the branch in the mentor login without making a new route for mentor 
// useEffect(()=>{
//   console.log("useEffect ran")
//   const mentorRegx = /^([a-z]+)(\.)([a-z]{2,4})(@)(kiet)(\.)(edu)$/;
//   if(mentorRegx.test(data.email)){
//     console.log("i know it run")
//     const a = data.email.split(".");
//     const branchArray = a[1].split("@");
//     const branch = branchArray[0];
//     const newbranch = branch.toUpperCase();
//     setData({ ...data, branch: newbranch});
    
//   }
// },[data.email])
//   const pushTo = (isAuth) => {
//     if (isAuth) {
//       const userid = setJson(localStorage.getItem("user"));
//       const id = userid._id;

//       if (isAuth) {
//         console.log(resp);

//         if (resp.user.role === 0) {
//           console.log("hi im the user");
//           const trl_data = {
//             id,
//             trl_value: {
//               TRL_Test: "pass",
//             },
//           };
//           dispatch(UpdateTRL(trl_data));

//           console.log("he");
//           history.push("/user-dashboard");
//         } else if (resp.user.role === 2) {
//           history.push("/tbi-dashboard");
//         } else if (resp.user.role === 3) {
//           history.push("/Mentor-dashboard");
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     pushTo(isAuthenticated);
//   }, [isAuthenticated]);

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     // const mentorRegx = /^([a-z]+)(\.)([a-z]{2,4})(@)(kiet)(\.)(edu)$/;
//     // if(mentorRegx.test(data.email)){
//     //   console.log("i know it run")
//     //   const a = data.email.split(".");
//     //   const branchArray = a[1].split("@");
//     //   const branch = branchArray[0];
//     //   const newbranch = branch.toUpperCase();
//     //   setData({ ...data, branch: newbranch});
      
//     // }
    
//     console.log(data);
//     dispatch(SignUp(data));
//   };
//   return (
//     <section className="auth">
//       <div className="overlay1">
//         <img src={Overlay1} alt="" />
//       </div>
//       <div className="overlay2">
//         <img src={Overlay2} alt="" />
//       </div>
//       <div className="container">
//         <div className="heading">Sign Up</div>
//         <div className="sub-head">
//           Sign up and start your Entrepreneurial Journey
//         </div>
//         <form action="" className="form">
//           <input
//             name="email"
//             value={data.email}
//             onChange={onHandleChange}
//             type="email"
//             placeholder="E-mail"
//             className="inp-box"
//           />
//           <input
//             name="password"
//             onChange={onHandleChange}
//             value={data.password}
//             type="password"
//             placeholder="Password"
//             className="inp-box"
//           />
//           <input
//             name="confirmPassword"
//             onChange={onHandleChange}
//             value={data.confirmPassword}
//             type="password"
//             placeholder="Confirm Password"
//             className="inp-box"
//           />
//           <input
//             name="number"
//             onChange={onHandleChange}
//             value={data.number}
//             type="number"
//             placeholder="Mobile no"
//             className="inp-box"
//           />
//           <p className="para">
//             Already have an Account? <Link to="/signin">Sign in</Link>
//           </p>
//           <button onClick={onHandleSubmit} className="sign-btn">
//             Signup
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Signin;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTRL } from "../../redux/actions/startupAction";
import { SignUp } from "../../redux/actions/authAction";
import { Link, useHistory } from "react-router-dom";
import Overlay1 from "../../Assets/Illustrations/Overlay1.svg";
import Overlay2 from "../../Assets/Illustrations/Overlay2.svg";
import "./css/Auth.css";
import { setJson } from "../../Global/Helper";

function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    number: null,
    branch: "",
  });
  const history = useHistory();

  const resp = useSelector((state) => state.auth);

  const { isAuthenticated } = resp;
  const {isLoading} = resp;
console.log(isLoading)
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // to set the branch in the mentor login without making a new route for mentor 
useEffect(()=>{
  console.log("useEffect ran")
  const mentorRegx = /^([a-z]+)(\.)([a-z]{2,4})(@)(kiet)(\.)(edu)$/;
  if(mentorRegx.test(data.email)){
    console.log("i know it run")
    const a = data.email.split(".");
    const branchArray = a[1].split("@");
    const branch = branchArray[0];
    const newbranch = branch.toUpperCase();
    setData({ ...data, branch: newbranch});
    
  }
},[data.email])
  const pushTo = (isAuth) => {
    if (isAuth) {
      const userid = setJson(localStorage.getItem("user"));
      const id = userid._id;

      if (isAuth) {
        console.log(resp);

        if (resp.user.role === 0) {
          console.log("hi im the user");
          const trl_data = {
            id,
            trl_value: {
              TRL_Test: "pass",
            },
          };
          dispatch(UpdateTRL(trl_data));

          console.log("he");
          history.push("/user-dashboard");
        } else if (resp.user.role === 2) {
          history.push("/tbi-dashboard");
        } else if (resp.user.role === 3) {
          history.push("/Mentor-dashboard");
        }
      }
    }
  };

  useEffect(() => {
    pushTo(isAuthenticated);
  }, [isAuthenticated]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // const mentorRegx = /^([a-z]+)(\.)([a-z]{2,4})(@)(kiet)(\.)(edu)$/;
    // if(mentorRegx.test(data.email)){
    //   console.log("i know it run")
    //   const a = data.email.split(".");
    //   const branchArray = a[1].split("@");
    //   const branch = branchArray[0];
    //   const newbranch = branch.toUpperCase();
    //   setData({ ...data, branch: newbranch});
      
    // }
    
    console.log(data);
    dispatch(SignUp(data));
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
          <input
            name="number"
            onChange={onHandleChange}
            value={data.number}
            type="number"
            placeholder="Mobile no"
            className="inp-box"
          />
          <p className="para">
            Already have an Account? <Link to="/signin">Sign in</Link>
          </p>
          <button disabled = {isLoading} onClick={onHandleSubmit} className={!isLoading?"sign-btn":"sign-btn-hid"}>
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signin;