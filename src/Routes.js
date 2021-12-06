//Static Pages
import Home from "./Static/Homepage/Home";
import Signin from "./Static/Authentication/Signin";
import Signup from "./Static/Authentication/Signup";
import About from "./Static/Footerpages/About";
import Team from "./Static/Footerpages/Team";
import Privacy from "./Static/Footerpages/Privacy";
import Contact from "./Static/Footerpages/Contact";
import Error404 from "./Static/Errorpages/Error404";
import Error99 from "./Static/Errorpages/Error99";
import Resources from "./Static/Resources/Resources";
import Header from "./Components/Header/NavBar";
import StudentDashboard from "./app/dashboard/StudentDashboard";
import TbiDashboard from "./app/dashboard/TbiDashboard";
import IdeaList from "./app/dashboard/IdeaList";
import Attendence from "./app/dashboard/Attendence";
import Register from "./app/startups/Register";
import Cdepartment from "./app/startups/CDepartment";
import Main from "./app/startups/Main";
import MentorDashboard from "./app/dashboard/MentorDashboard";

//Schemes Import

import AddSchemes from "./app/schemes/AddSchemes";
import AllSchemes from "./app/schemes/AllSchemes";
import NidhiEir from "./app/schemes/NidhiEir";
import NidhiPrayas from "./app/schemes/NidhiPrayas";
import Scheme from "./app/schemes/Scheme";
import ItPolicy from "./app/schemes/ItPolicy";

//TBI

// import Header from "./Components/Header/Header"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IdeaDetails from "./app/startups/IdeaDetails";

const Routes = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/about" exact component={About} />
          <Route path="/team" exact component={Team} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/error_404" exact component={Error404} />
          <Route path="/error_99" exact component={Error99} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/user-dashboard" exact component={StudentDashboard} />
          <Route path="/admin-dashboard" exact component={TbiDashboard} />
          <Route path="/admin-dashboard/ideas" exact component={IdeaList} />
          <Route
            path="/admin-dashboard/attendence"
            exact
            component={Attendence}
          />
          <Route path="/mentor-dashboard" exact component={MentorDashboard} />
          <Route path="/dev-check" exact component={IdeaDetails} />

          <Route path="/student/schemes/" exact component={Scheme} />
          <Route path="/student/schemes/all" exact component={AllSchemes} />
          <Route path="/student/schemes/nidhi_eir" exact component={NidhiEir} />
          <Route
            path="/student/schemes/nidhi_prayas"
            exact
            component={NidhiPrayas}
          />
          <Route path="/student/schemes/it_policy" exact component={ItPolicy} />
          <Route path="/schemes/add_scheme" exact component={AddSchemes} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
