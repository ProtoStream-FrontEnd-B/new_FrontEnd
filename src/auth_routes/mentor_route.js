import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const MentorRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state=> state.auth);
const isAuthenticated = user.isAuthenticated;
const userid = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userid.role===3 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default MentorRoute;