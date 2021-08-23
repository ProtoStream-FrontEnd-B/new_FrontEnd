//Static Pages
import Home from './Static/Homepage/Home'
import Signin from './Static/Authentacion/Signin'
import Signup from './Static/Authentacion/Signup'
import About from './Static/Footerpages/About'
import Team from './Static/Footerpages/Team'
import Privacy from './Static/Footerpages/Privacy'
import Contact from './Static/Footerpages/Contact'
import Error404 from './Static/Errorpages/Error404'
import Error99 from './Static/Errorpages/Error99'
import Resources from './Static/Resources/Resources'
import Header from './Components/Header/NavBar'

// import Header from "./Components/Header/Header"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
                </Switch>
            </div>
        </Router>
    )
}


export default Routes