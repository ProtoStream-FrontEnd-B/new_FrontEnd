//Static Pages
import Home from "./Static/Homepage/Home";
import IdeaDetail from "./app/startups/IdeaDetail";
import { useEffect } from "react";
import TbiDashboard from "./app/dashboard/TbiDashboard";
import Attendence from "./app/dashboard/Attendance"; 
import ideasList from "./app/dashboard/IdeaList"
import MentorDashboard from "./app/dashboard/MentorDashboard"
import PublicRoute from "./auth_routes/public_route";
import TbiRoute from "./auth_routes/tbi_route";
import MentorRoute from "./auth_routes/mentor_route";
import DetailedForm from "./app/startups/pages/DetailedForm";
import  Form  from "./app/startups/pages/Form";
import Signin from "./Static/Authentication/Signin";
import Signup from "./Static/Authentication/Signup";
import About from "./Static/Footerpages/About";
import Team from "./Static/Footerpages/Team";
import { useDispatch } from "react-redux";
import Privacy from "./Static/Footerpages/Privacy";
import Contact from "./Static/Footerpages/Contact";
import Error404 from "./Static/Errorpages/Error404";
import Error99 from "./Static/Errorpages/Error99";
import Resources from "./Static/Resources/Resources";
import Header from "./Components/Header/NavBar";
import StudentDashboard from "./app/dashboard/StudentDashboard";

import Register from "./app/startups/Register";
import Cdepartment from "./app/startups/CDepartment";
import Main from "./app/startups/Main";
import { useSelector } from "react-redux";
import otpverify from "./app/startups/pages/otpverify";

import PrivateRoute from "./auth_routes/private_route";

// nothing
// import Header from "./Components/Header/Header"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isLogin } from "./redux/actions/authAction";
import { getTrl, UpdateTRL, GetIdea } from "./redux/actions/startupAction";

const Routes = () => {
  // const user = useSelector(state=> state.auth);
  // console.log(user)
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  const userid = JSON.parse(localStorage.getItem("user"));

  const startup_data = useSelector((state) => state.startup);
  console.log(startup_data);

  let maindata = { token, user };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogin(maindata));
    if (userid && userid.role===0) {
      const id = userid._id;

      const trl_data = {
        id,
        trl_value: {
          TRL_Test: "pass",
        },
      };
      dispatch(UpdateTRL(trl_data));
      dispatch(GetIdea(id));
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PublicRoute path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/about" exact component={About} />
          <Route path="/team" exact component={Team} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/error_404" exact component={Error404} />
          <Route path="/error_99" exact component={Error99} />
          <Route path="/resources" exact component={Resources} />
          <PrivateRoute path="/user-dashboard" component={StudentDashboard} />
          {/* <Route path="/admin-dashboard" component={TbiDashboard} /> */}
          <PrivateRoute exact path="/startups" component={Main} />
          <PrivateRoute path="/startups/CYB" component={Cdepartment} exact />
          <PrivateRoute path="/startups/Register" component={Register} exact />
          <PrivateRoute
            path="/startups/Register/Otpverify"
            component={otpverify}
            exact
          />
          <PrivateRoute path="/startups/Register/form" component={Form} exact />
          <TbiRoute path = "/tbi-dashboard" component = {TbiDashboard} exact/>
          <MentorRoute path = "/Mentor-dashboard" component = {MentorDashboard} exact/>
          <PrivateRoute path = "/startups/Register/Dform" component = {DetailedForm} exact/> 
          <TbiRoute path = "/tbi-dashboard/Attendence" component  = {Attendence} exact />
          <TbiRoute path = "/tbi-dashboard/IdeaList"   component = {ideasList} exact/>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
