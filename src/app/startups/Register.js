import React from "react";
import { useSelector } from "react-redux";
import Scard from "../../Components/Cards/Scard";
import OtpVerify from "../../Assets/Illustrations/Otpverify.svg";
import formIcon from "../../Assets/icons/formIcon.svg";
import ThirdStep from "../../Assets/icons/3rdStep.svg";
import "./css/Register.css";

const Register = () => {
  const startup_details = useSelector((state) => state.startup);
  console.log(startup_details);
  let user = localStorage.getItem("user");
  const userid = JSON.parse(localStorage.getItem("user"));
  const id = userid._id;

  const step1_data = {
    id: id,
  };
  const step2_data = {
    id: id,
  };
  const step3_data = {
    id: id,
  };
  return (
    <div className="register">
      <div className="container">
        <Scard
          data={step1_data.id}
          func="step-1"
          route="/startups/Register/Otpverify"
          head="Step 1"
          para="Register your Mobile Number"
          btnName="Go"
          img={OtpVerify}
          status="enable"
        />
        <Scard
          data={step2_data}
          func="step-2"
          route="/startups/Register/form"
          head="Step 2"
          para="Enter some details about your Startup Idea, which helps you to provide a mentorship for your Idea."
          btnName="Go"
          img={formIcon}
          status="disable"
        />
        <Scard
          data={step3_data}
          func="step-3"
          route="/startups/Register/FormReview"
          head="Step 3"
          para="After completing Step 2, you have to fill some more details which is directly sent to TBI Head for verification of your Startup Idea."
          btnName="Go"
          img={ThirdStep}
          status="completed"
        />
      </div>
    </div>
  );
};

export default Register;
