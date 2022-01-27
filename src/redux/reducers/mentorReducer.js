import {
  GET_ALL_IDEA,
  SELECT_IDEA,
  EDIT_IDEA,
  LOGIN_MENTOR,
  REGISTER_MENTOR,
  GET_MENTOR_INFO,
} from "../actions/types";

const initialState = {
  Ideas: null,
  Mentor: null,
  Step2:null,
  Message: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_IDEA:
      return {
        ...state,
        Ideas: action.payload.data.Ideas,
      };
    case SELECT_IDEA:
    
      return {
        ...state,
        Step2: action.payload,
      };
    case EDIT_IDEA:
      return {
        ...state,
        Message: action.payload.Message,
      };

    case GET_MENTOR_INFO:
      return {
        ...state,
        Mentor: action.payload,
      };

    default:
      return state;
  }
}
