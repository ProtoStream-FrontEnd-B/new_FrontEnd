import axios from "axios";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";




export const SignUp = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const data2 = await axios.post(
      "http://localhost:8000/register",
      data,
      config
    );
    console.log(data2);
    if (data2) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data2.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const Login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const data2 = await axios.post("http://localhost:8000/login", data, config);
    if (data2) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data2.data,
        
      
      });

    
      
     
    }
  } catch (error) {}
 
};


export const Logout = ()=> {
  return{
    type: LOGOUT_SUCCESS,
    payload: null
  }


}

export const isLogin = (data) => {
 
 
  if (data.token && data.user) {
    return {
      type: USER_LOADED,
      payload: data,
    };
  }

  else{
    return{
      type: LOGIN_FAIL,
      payload: null
    }
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
