import {
  GET_TRL,
  GET_IDEA,
  OPEN_STEP_2,
  OPEN_STEP_3,
  CREATE_IDEA,
  CREATE_STEP_2,
  CREATE_STEP_3,
  GET_STEP_2,
  GET_STEP_3,
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
  Step2: null
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
        Idea: action.payload.Idea,
        Message: action.payload.Message
      };
    case UPDATE_TRL:
      return {
        ...state,
        Trl_value: action.payload,
      };

    case CHOOSE_BRANCH:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message
      };

    case OTP_LOGIN:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message
      }

    case OTP_VERIFY:
      return {
        ...state,
        Idea: action.payload.Idea ,
        Message: action.payload.Message
      }

    case DROP_IDEA:
      return {
        ...state,
        Trl_value: null,
        Idea: null,
        Message: null
      }

    case CREATE_IDEA:
      return {
        ...state,
       Idea: action.payload
      }

    case OPEN_STEP_2:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message
      }

    case CREATE_STEP_2:
      console.log(action.payload)
      return {
        ...state,
        Idea: action.payload.Idea,
        Step2: action.payload.Step2,
        Message: action.payload.Message
      }

    case GET_STEP_2:
      return {
        ...state,

      }

    case OPEN_STEP_3:
      return {
        ...state,
      }

    case CREATE_STEP_3:
      return {
        ...state,
      }

    case GET_STEP_3:

      return {
        ...state
      }


    default:
      return state;
  }
}
