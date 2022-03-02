import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetIdea, getTrl } from "../../redux/actions/startupAction";

import "./css/Main.css";
import StartupCard from "../../Components/Cards/StartupCard";
import { useHistory } from "react-router";
import { setJson } from "../../Global/Helper";

const Main = () => {
  const userid = setJson(localStorage.getItem("user"));
  const id = userid._id;
  const dispatch = useDispatch();
  const history = useHistory();
  const start_up = useSelector((state) => state.startup);
  console.log(start_up);
  const onHandleLoad = (id) => {
    dispatch(getTrl(id));

    if (start_up.Idea != null) {
      console.log(start_up);
      history.push("/startups/CYB");
    }
  };
  useEffect(() => {
    onHandleLoad(id);
  }, []);

  const onRegisterClick = () => {
    if (start_up.Idea === null) {
      history.push("/startups/CYB");
    }
  };

  const startup_data = useSelector((state) => state.startup);
  console.log(startup_data);

  const route2 = startup_data.Trl_value == "pass" ? "/startups/CYB" : "/";
  return (
    <div className="start_page">
      <StartupCard
        route1="/"
        route2="/trl_test"
        head="Evaluate"
        para=" “Evaluate your startup potential and check the viability of you product by using the TRL Test created by NASA to assess the potential and state of a startup idea or prototype.”  "
        btn2="Take TRL Test"
      />
      <StartupCard
        route1="/resources"
        route2={route2}
        head="Startup"
        para=" “Innovation distinguishes between a leader and a follower.” "
        btn1="Know about Startup"
        btn2="Register Startup Idea"
      />
    </div>
  );
};

export default Main;
