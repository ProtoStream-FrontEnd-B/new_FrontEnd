import {
  GET_ALL_IDEA_TBI,
  SELECT_IDEA_TBI,
  EDIT_IDEA_TBI,
  LOGIN_TBI,
  REGISTER_TBI,
  GET_TBI_INFO,
  CREATE_SLOT,
} from "../actions/types";

const initialState = {
  Ideas: null,
  TBI: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_IDEA_TBI:
      return {
        ...state,
        Ideas: action.payload,
      };
    case SELECT_IDEA_TBI:
      return {
        ...state,
        Ideas: action.payload,
      };
    case EDIT_IDEA_TBI:
      return {
        ...state,
        Ideas: action.payload,
      };

    case GET_TBI_INFO:
      return {
        ...state,
        TBI: action.payload,
      };

    case CREATE_SLOT:
      return {
        ...state,
        Ideas: action.payload,
      };

    default:
      return state;
  }
}
