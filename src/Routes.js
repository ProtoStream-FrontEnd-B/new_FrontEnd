//Static Pages
import Home from './Static/Homepage/Home'
import { useEffect } from 'react'
import Signin from './Static/Authentication/Signin'
import Signup from './Static/Authentication/Signup'
import About from './Static/Footerpages/About'
import Team from './Static/Footerpages/Team'
import { useDispatch } from 'react-redux'
import Privacy from './Static/Footerpages/Privacy'
import Contact from './Static/Footerpages/Contact'
import Error404 from './Static/Errorpages/Error404'
import Error99 from './Static/Errorpages/Error99'
import Resources from './Static/Resources/Resources'
import Header from './Components/Header/NavBar'
import StudentDashboard from './app/dashboard/StudentDashboard'
import TbiDashboard from "./app/dashboard/TbiDashboard"
import Register from './app/startups/Register'
import Cdepartment from './app/startups/CDepartment'
import Main from './app/startups/Main'
import { useSelector } from 'react-redux'
import PrivateRoute from './auth_routes/private_route'
 import Step3 from './app/startups/pages/Step3'
 import otpverify from './app/startups/pages/otpverify'
import Form from './app/startups/pages/Form'

// import Header from "./Components/Header/Header"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isLogin } from './redux/actions/authAction'


const Routes = () => {

    // const user = useSelector(state=> state.auth);
    // console.log(user)
    let token  = localStorage.getItem('token');
    let user = localStorage.getItem('user');
  
  
    let maindata = {token , user};
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(isLogin(maindata))
      
    }, [])
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
                    <PrivateRoute path="/user-dashboard" component={StudentDashboard} />
                    <Route path="/admin-dashboard" component={TbiDashboard} />
                    <Route path="/dev-check" component={Main} />
                    <Route path="/otpverify" component={otpverify} />
                    <Route path="/form" component={Form} />
                    <Route path="/cdepartment" component={Cdepartment} />
                    <Route path="/step3" component={Step3} />
                </Switch>
            </div>
            
        </Router>
       
    )
}


export default Routes

