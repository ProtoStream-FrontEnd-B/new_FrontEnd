import react from "react";

import { useHistory } from "react-router";
import verify from "../../Assets/icons/verify.svg";
import "./css/Scard.css";
import { useDispatch } from "react-redux";
import {
  OtpVerify,
  OtpLogin,
  OpenStep2,
  OpenStep3,
  CreateStep2,
  CreateStep3,
} from "../../redux/actions/startupAction";

const Scard = ({ head, para, btnName, img, status, route, func, data }) => {
  // enable, disable, completed
  //   var status = "enable";
  //   var status = "disable";
  const history = useHistory();
  const dispatch = useDispatch();
  const checkFunc = (func, data) => {
    if (func === "step-1") {
      console.log("step-1 run...");
      dispatch(OtpLogin(data));
    } else if (func === "step-2") {
      console.log("step- 2 run .....");
      dispatch(OpenStep2(data));
    } else if (func === "step-3") {
      console.log("Step-3 is running...");
      dispatch(OpenStep3(data));
    }
  };
  const onBtnClick = (route) => {
    console.log(route);
    checkFunc(func , data);
    history.push(route);
  };
  return (
    <button
      disabled={status == "disable"}
      className={status == "disable" ? "Scard disabled-card" : "Scard hover"}
      onClick={() => alert("clicked")}
    >
      <header>
        <h1 className="heading">{head}</h1>
        {status == "completed" ? (
          <img src={verify} alt="" className="verify-icon" />
        ) : null}
      </header>
      <main>
        <img src={img} alt="" className="illustration" />
        <p className="para">{para}</p>
      </main>
      <footer>
        <button
          onClick={() => {
            onBtnClick(route);
          }}
          disabled={status == "disable"}
        >
          {status == "completed" ? "Completed" : `${btnName}`}
        </button>
      </footer>
    </button>
  );
};

export default Scard;
