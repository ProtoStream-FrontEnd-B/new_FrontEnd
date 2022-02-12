import {
  GET_ALL_IDEA,
  SELECT_IDEA,
  EDIT_IDEA,
  LOGIN_MENTOR,
  REGISTER_MENTOR,
  IS_LOADING,
  GET_MENTOR_INFO,
} from "../actions/types";

const initialState = {
  Ideas: null,
  Mentor: null,
  Step2: null,
  Message: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_IDEA:
      return {
        ...state,
        Ideas: action.payload.data.Ideas,
        isLoading: false,
      };
    case SELECT_IDEA:
      return {
        ...state,
        Step2: action.payload,
        isLoading: false,
      };
    case EDIT_IDEA:
      return {
        ...state,
        Message: action.payload.Message,
        isLoading: false,
      };

    case GET_MENTOR_INFO:
      return {
        ...state,
        Mentor: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
