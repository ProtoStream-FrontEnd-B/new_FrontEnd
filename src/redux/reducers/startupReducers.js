import {
  GET_TRL,
  GET_IDEA,
  OPEN_STEP_2,
  OPEN_STEP_3,
  CREATE_IDEA,
  CREATE_STEP_2,
  CREATE_STEP_3,
  CHOOSE_BRANCH,
  UPDATE_TRL,
  DROP_IDEA,
  OTP_LOGIN,
  OTP_VERIFY,
} from "../actions/types";

const initialState = {
  Trl_value: null,
  Idea: null,
  Message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRL:
      return {
        ...state,
        Trl_value: action.payload,
      };
    case GET_IDEA:
      return {
        ...state,
        Idea: action.payload,
      };
    case UPDATE_TRL:
      return {
        ...state,
        Trl_value: action.payload,
      };

    case CHOOSE_BRANCH:
      return {
        ...state,
        data: action.payload,
      };

    case OTP_LOGIN:
      return{
          ...state, 
          otp_status:"OTP SENT"
      }

      case OTP_VERIFY:
      return{
          ...state ,
          otp_status: action.payload
      }

      case DROP_IDEA:
          return{
              ...state , 
              Trl_value:null,
              Idea: null,
              Message:null
          }

    default:
      return state;
  }
}
