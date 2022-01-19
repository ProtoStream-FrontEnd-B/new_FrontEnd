import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { setJson } from "../Global/Helper";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state=> state.auth);
    const userid = setJson(localStorage.getItem("user"));
const isAuthenticated = user.isAuthenticated;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userid.role===0? (
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

export default PrivateRoute;