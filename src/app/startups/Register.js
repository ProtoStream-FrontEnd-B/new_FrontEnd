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
  return (
    <div className="register">
      <div className="container">
        <Scard
          func="step-1"
          route="/startups/Register/Otpverify"
          head="Step 1"
          para="Register your Mobile Number"
          btnName="Go"
          img={OtpVerify}
          status="enable"
        />
        <Scard
          func="step-2"
          route="/startups/Register/form"
          head="Step 2"
          para="Enter some details about your Startup Idea, which helps you to provide a mentorship for your Idea."
          btnName="Go"
          img={formIcon}
          status="disable"
        />
        <Scard
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
