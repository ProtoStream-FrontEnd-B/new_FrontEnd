import axios from "axios";

import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "./types";

export const SignUp = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    dispatch({
      type: USER_LOADING,
      payload: "loading",
    });

    const data2 = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/register`,
      data,
      config
    );
    console.log(data2);
    if (data2.data.error == "Email already registered") {
      console.log("this error ran ");

      dispatch({
        type: REGISTER_FAIL,
        payload: { err_msg: "Email already registered" },
      });
    }
    if (data2.data.user) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data2.data,
      });
    }
  } catch (error) {
    console.log(`${error} error is here `);

    dispatch({
      type: REGISTER_FAIL,
      payload: "Please check the details",
    });
  }
};

export const Loading = () => {
  console.log("I ran i m sure of it ");
  return {
    type: USER_LOADING,
  };
};

export const Login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    console.log("User is not loaded");
    dispatch({
      type: USER_LOADING,
      payload: "loading",
    });

    const data2 = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/login`,
      data,
      config
    );
    if (data2.data.error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: data2.data.error },
      });
    }
    if (data2.data.user && data2.data.token) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data2.data,
      });

      console.log("User is laoded ");
    }
    console.log("data", data2);
  } catch (error) {
    console.log(error);
    alert("Please check your details");
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

export const Logout = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: null,
  };
};

export const isLogin = (data) => {
  console.log("hfsuayduiuui" + !data.token);
  if (!data.token || !data.user) {
    return {
      type: AUTH_ERROR,
      payload: null,
    };
  }

  if (data.token && data.user) {
    console.log("This runs perfectly");
    return {
      type: USER_LOADED,
      payload: data,
    };
  } else {
    return {
      type: AUTH_ERROR,
      payload: null,
    };
  }
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
