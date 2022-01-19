import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { setJson } from "../Global/Helper";

const TbiRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state=> state.auth);
const isAuthenticated = user.isAuthenticated;
const userid = setJson(localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userid.role===2 ? (
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

export default TbiRoute;