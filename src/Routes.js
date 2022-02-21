//Static Pages
import Home from "./Static/Homepage/Home";
import IdeaDetail from "./app/startups/IdeaDetail";
import { useEffect } from "react";
import TbiDashboard from "./app/dashboard/TbiDashboard";
import Attendence from "./app/dashboard/Attendance";
import ideasList from "./app/dashboard/IdeaList";
import MentorDashboard from "./app/dashboard/MentorDashboard";
import PublicRoute from "./auth_routes/public_route";
import TbiRoute from "./auth_routes/tbi_route";
import MentorRoute from "./auth_routes/mentor_route";
import DetailedForm from "./app/startups/pages/DetailedForm";
import Form from "./app/startups/pages/Form";
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
import { setJson } from "./Global/Helper";
import StartupDetailsForm from "./app/dashboard/StartupDetailsForm.jsx";
import Step3 from "./app/startups/pages/Step3";
import AllInternships from "./app/Internships/AllInternships";
import Scheme from "./app/schemes/Scheme";
import AllSchemes from "./app/schemes/AllSchemes";
import AddSchemes from "./app/schemes/AddSchemes";
import NidhiEir from "./app/schemes/NidhiEir";
import ItPolicy from "./app/schemes/ItPolicy";
import NidhiPrayas from "./app/schemes/NidhiPrayas";
import TRL from "./app/startups/TRL/TRL";
import ProjectMain from "./app/Project/ProjectMain";
import Branches from "./app/Project/Branches";
import Dform from "./app/startups/pages/Dform";
import YearlyProjectsModal from "./Components/Modal/YearlyProjectsModal";
import AllProjects from "./app/Project/AllProjects";
import ProjectModal from "./Components/Modal/ProjectModal";
import AllInnotech from "./app/Project/AllInnotech";
// import AddForm from "./app/Project/Form/Addform";
// import StartupDashboard from "./app/dashboard/StartupDashboard";

const Routes = () => {
  // const user = useSelector(state=> state.auth);
  // console.log(user)
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  const userid = setJson(localStorage.getItem("user"));

  const startup_data = useSelector((state) => state.startup);
  console.log(startup_data);

  let maindata = { token, user };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogin(maindata));
    if (userid && userid.role === 0) {
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
          <Route path="/trl_test" exact component={TRL} />
          <Route path="/dev" exact component={StartupDetailsForm} />
          {/* <Route path="/dev-check" exact component={Step3} /> */}
          <Route path="/dev-check" exact component={ProjectModal} />

          <PrivateRoute path="/projects" exact component={ProjectMain} />
          <PrivateRoute
            path="/projects/hackathons"
            exact
            component={AllProjects}
          />

          <PrivateRoute
            path="/projects/innotech"
            exact
            component={AllInnotech}
          />
          <PrivateRoute
            path="/projects/final_year"
            exact
            component={Branches}
          />

          {/* Internships */}
          <PrivateRoute path="/internships" exact component={AllInternships} />
          {/* Schemes */}
          <PrivateRoute path="/schemes" exact component={Scheme} />
          <PrivateRoute
            path="/schemes/competitions"
            exact
            component={AllSchemes}
          />
          <PrivateRoute
            path="/schemes/addscheme"
            exact
            component={AddSchemes}
          />
          <Route path="/schemes/NidhiEir" exact component={NidhiEir} />
          <Route path="/schemes/NidhiPrayas" exact component={NidhiPrayas} />
          <Route path="/schemes/it_policy" exact component={ItPolicy} />
          <PrivateRoute
            path="/schemes/addscheme"
            exact
            component={AddSchemes}
          />
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
          <TbiRoute path="/tbi-dashboard" component={TbiDashboard} exact />
          <MentorRoute
            path="/Mentor-dashboard"
            component={MentorDashboard}
            exact
          />
          <PrivateRoute
            path="/startups/Register/Dform"
            component={DetailedForm}
            exact
          />
          <TbiRoute
            path="/tbi-dashboard/Attendence"
            component={Attendence}
            exact
          />
          <TbiRoute
            path="/tbi-dashboard/IdeaList"
            component={ideasList}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

// sudo apt update and sudo apt not-update and what else can you do huh ?? so hello everyone my name is Himanshu Pandey and I'm a
// 3rd year computer science and engineering student at KIET Group of Institutions
