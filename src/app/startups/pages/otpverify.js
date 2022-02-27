import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Otpimage from "../../../Assets/Illustrations/Otpverify.svg";
import arrow from "../../../Assets/icons/arrow.svg";
import "../css/otp.css";
import { useHistory } from "react-router";
import { setJson } from "../../../Global/Helper";
import { OtpVerify } from "../../../redux/actions/startupAction";

const OTP = () => {
  const userid = setJson(localStorage.getItem("user"));
  const number = userid.number;
  console.log(number);

  let newNumber = number.toString();
  let array = newNumber.split("");
  const dispatch = useDispatch();
  const history = useHistory();
  const idea_detail = useSelector((state) => state.startup);
  console.log(idea_detail);
  let user = localStorage.getItem("user");
  // const userid = JSON.parse(localStorage.getItem("user"));

  for (var i = 0; i < array.length - 4; i++) {
    array[i] = "*";
  }
  const handlePush = () => {
    if (idea_detail.Idea.status === "Step1-complete") {
      console.log("hey its the handlepush");
      const id = userid._id;

      history.push("/startups/Register");
    }
  };

  useEffect(() => {
    handlePush();
  });

  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const ResendOTP = () => {
    console.log("otp sent!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const OTP = otp.join("");

    console.log(OTP);
    const otp_data = {
      id: userid._id,
      code: OTP,
    };
    dispatch(OtpVerify(otp_data));
  };

  const error = false;

  return (
    <div className="OTP">
      <div className="img_container">
        <img className="otpimage" src={Otpimage} alt="" />
      </div>

      <div className="otp-container">
        <form action="" className="otp-form">
          <div className="head">OTP Verification</div>
          <div className="sub-line">
            {`Enter the OTP sent to +91${array.join("")}`}
          </div>

          <div className="otp_input">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <p className="otp-para">
            Didn't get the OTP ?
            <span onClick={ResendOTP} className="resend">
              Resend OTP
            </span>
          </p>
          <span className="error">{error ? "The OTP did not match" : ""}</span>

          <button onClick={handleSubmit} className="otp-btn" type="submit">
            Verify <img className="arrow" src={arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTP;
