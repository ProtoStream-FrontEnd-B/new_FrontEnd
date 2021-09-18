import React, { useState } from "react";
import "./css/Header.css";
import { NavLink, useHistory } from "react-router-dom";

import logo from "../../Assets/icons/logo.svg"
import { isAuthenticated } from "../../auth/index";






const Header = () => {
    const history = useHistory();
    const [click, setClick] = useState(false);
    // const [user, setUser] = useState(isAuthenticated());
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { user, error } = isAuthenticated();
    const errorRedirect = () => {
        if (error) {
            history.push("/error_99");
            window.location.reload();
        }
    };

    const headerElement = () => (
        <header className="header">
            <div className="logo-div"> <NavLink to={user ? "/" : "/"} className="navbar-logo">
                <img src={logo} alt="" className="logo" />
            </NavLink></div>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div className="nav-menu-div"><ul className={click ? " nav-menu mobile-nav " : "nav-menu"}>
                {/* Designing Dashboard According to user roless...  pending */}
                {user && user.role === 1 ? (
                    <li className="nav-item">
                        <NavLink
                            to="/user/dashboard"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                ) : (
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                )}
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/internships"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Internships
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/schemes"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Schemes
                    </NavLink>
                </li>
                {user && user.role === 1 ? (
                    <NavLink to="/startups" className="buttons">
                        <button className="btn">Startups</button>
                    </NavLink>
                ) : (
                    <li className="nav-item">
                        <NavLink
                            to="/startups"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Startups
                        </NavLink>
                    </li>
                )}




            </ul>


                {!user ? (<span className={click ? "nav-item" : "none"} >
                    <NavLink to="/signin" className="buttons">
                        <button className="nav-btn">Login</button>
                    </NavLink>
                </span>) : ("")}
            </div>
            {
                !user ? (
                    <NavLink to="/signin" className="buttons">
                        <button className="btn">Login</button>
                    </NavLink>
                ) : (
                    ""
                )
            }
        </header >
    )
    return (
        <div>
            {errorRedirect()}
            {headerElement()}
        </div>
    );
};

export default Header;
