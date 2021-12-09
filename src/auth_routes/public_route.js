import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state=> state.auth);
    const isAuthenticated = user.isAuthenticated;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (

            <Redirect
            to={{
              pathname: "/user-dashboard",
              state: { from: props.location },
            }}
          />
          
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;