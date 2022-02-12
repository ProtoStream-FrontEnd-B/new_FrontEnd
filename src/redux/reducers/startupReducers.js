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
  IS_LOADING,
} from "../actions/types";

const initialState = {
  Trl_value: null,
  Idea: null,
  Message: null,
  Mentor: null,
  Step2: null, 
  Step3: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return{
        ...state,
        isLoading: true,
      }
    case GET_TRL:
      return {
        ...state,
        Trl_value: action.payload,
        isLoading: false
      };
    case GET_IDEA:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message,
        isLoading: false
      };
    case UPDATE_TRL:
      return {
        ...state,
        Trl_value: action.payload,
        isLoading: false
      };

    case CHOOSE_BRANCH:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message,
        isLoading: false
      };

    case OTP_LOGIN:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message,
        isLoading: false
      }

    case OTP_VERIFY:
      return {
        ...state,
        Idea: action.payload.Idea ,
        Message: action.payload.Message,
        isLoading: false
      }

    case DROP_IDEA:
      return {
        ...state,
        Trl_value: null,
        Idea: null,
        Message: null,
        isLoading: false
      }

    case CREATE_IDEA:
      return {
        ...state,
       Idea: action.payload,
       isLoading: false
      }

    case OPEN_STEP_2:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message, 
        Step2: action.payload.Step2,
        Mentor: action.payload.Mentor,
        isLoading: false
      }

    case CREATE_STEP_2:

      return {
        ...state,
        Idea: action.payload.Idea,
        Step2: action.payload.Step2,
        Message: action.payload.Message,
        Mentor: action.payload.Mentor,
        isLoading: false
      }

    case GET_STEP_2:
      console.log(action.payload)
      return {
        ...state,

      }

    case OPEN_STEP_3:
      return {
        ...state,
        Idea: action.payload.Idea,
        Message: action.payload.Message,
        Step2: action.payload.Step2,
        Step3: action.payload.Step3,
        isLoading: false
      }

    case CREATE_STEP_3:
      return {
        ...state,
        Idea: action.payload.Idea,
        Step3: action.payload.Step3,
        Message: action.payload.Message,
        isLoading: false

      }

    case GET_STEP_3:

      return {
        ...state
      }


    default:
      return state;
  }
}
