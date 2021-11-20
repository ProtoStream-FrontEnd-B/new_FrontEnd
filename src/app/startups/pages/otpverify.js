import React, { useState } from "react";
import Otpimage from "../../../Assets/Illustrations/Otpverify.svg";
import arrow from "../../../Assets/icons/arrow.svg";
import "../css/otp.css";

const OTP = () => {
  const number = 7882748219;
  let newNumber = number.toString();
  let array = newNumber.split("");

  for (var i = 0; i < array.length - 4; i++) {
    array[i] = "*";
  }

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
  const handleSubmit = () => {
    const OTP = otp.join("");
    console.log(OTP);
  };

  const error = false;

  return (
    <div className="OTP">
      <div className="otp_container">
        <div className="img_container">
          <img className="otpimage" src={Otpimage} alt="" />
        </div>

        <div className="main_container">
          <h1 className="head">OTP Verification</h1>
          <div className="form_container">
            <h2 className="form_head">{`Enter the OTP sent to +91${array.join(
              ""
            )}`}</h2>

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

            <p className="para">
              Didn't get the OTP ?{" "}
              <span onClick={ResendOTP} className="resend">
                Resend OTP
              </span>
            </p>
            <span className="error">
              {error ? "The OTP did not match" : ""}
            </span>
          </div>
          <div className="btn_div">
            <button onClick={handleSubmit} className="btn">
              Verify <img className="arrow" src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;