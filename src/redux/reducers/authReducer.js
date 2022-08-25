import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  err: false,
  err_msg: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      console.log(" hey now i m loading");
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));


      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,


      };
    // case USER_LOADING:
    //      console.log("hey now i am loading ")
    //      return{
    //        ...state ,
    //        isLoading: true
    //      };
    case AUTH_ERROR:
      console.log("Register fail run")
      localStorage.removeItem("token");
      localStorage.removeItem("user");


      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        err: false

      };


    case LOGOUT_SUCCESS:
      console.log("Register fail run")
      localStorage.removeItem("token");
      localStorage.removeItem("user");


      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        err: false

      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:

      console.log("Register fail run")
      localStorage.removeItem("token");
      localStorage.removeItem("user");


      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        err: true,
        err_msg: action.payload

      };

    default:
      return state;
  }
}