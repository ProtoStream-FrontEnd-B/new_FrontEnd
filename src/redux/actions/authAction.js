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





export const SignUp =
  ({ email, password, confirmPassword }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password, confirmPassword });

    try {
      const data = await axios.post("api", body, config);
      if (data) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data.data,
        });
      }
    } catch (error) {}
  };


export const Login = ({email , password})=> async dispatch =>{


    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ email, password });

      try {
        const data = await axios.post("api", body, config);
        if (data) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data,
          });
        }
      } catch (error) {}
   
}

export const tokenConfig = (getState)=>{
  
  const  token = getState().auth.token;

  const config = {
    headers:{
      'Content-type':'application/json'
    }
  }

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;

}