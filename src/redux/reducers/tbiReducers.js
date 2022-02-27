import {
  GET_ALL_IDEA_TBI,
  SELECT_IDEA_TBI,
  EDIT_IDEA_TBI,
  LOGIN_TBI,
  REGISTER_TBI,
  GET_TBI_INFO,
  GET_TBI_IDEAS,
  CREATE_SLOT,
  OPEN_IDEA_TBI,
  CHECK_SLOT,
  CLEAR_STATE,
  CHECK_ATTENDANCE_SLOT,
  UPDATE_ATTENDANCE,
} from "../actions/types";


const initialState = {
  Ideas: null,
  TBI: null,
  Idea: null,
  Message: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_IDEA_TBI:
      return {
        ...state,
        Ideas: action.payload.Ideas,
      };
    case SELECT_IDEA_TBI:
      return {
        ...state,
        Idea: action.payload,
      };
    case EDIT_IDEA_TBI:
      return {
        ...state,
        Idea: action.payload.Idea,
        Step3: action.payload.Step3,
        Message: action.payload.Message
      };
    case OPEN_IDEA_TBI:
      return{
        ...state,
        Idea: action.payload.Idea,
        Step3: action.payload.Step3,
        Message: action.payload.Message
      }  

    case GET_TBI_INFO:
      return {
        ...state,
        TBI: action.payload,
      };

    case CREATE_SLOT:
      return {
        ...state,
        Idea: action.payload.Idea,
      };

    case CHECK_SLOT:
      return{
        ...state,
       
      }
      
    case CHECK_ATTENDANCE_SLOT:
      return{
        ...state,
        Ideas:  action.payload.Ideas
      } 
    case GET_TBI_IDEAS:
      return{
        ...state,
        Ideas: action.payload.Ideas
      }  
    case UPDATE_ATTENDANCE:
      return{
        ...state,
        // Ideas: action.payload
      }  
    case CLEAR_STATE:
      return{
        ...state,
        Ideas:[],
        Idea:null,
        Message: null,
      }
    default:
      return state;
  }
}
