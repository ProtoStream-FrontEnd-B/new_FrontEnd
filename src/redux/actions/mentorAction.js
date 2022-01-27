import axios from "axios";
import { API } from "../../API/backend";
import {
  GET_ALL_IDEA,
  SELECT_IDEA,
  EDIT_IDEA,
  LOGIN_MENTOR,
  GET_MENTOR_INFO,
  REGISTER_MENTOR,
} from "./types";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const GetAllIdea =
  ({ id }) =>
  async  (dispatch) => {
    try {
      const Idea = await axios.get(`${API}/idea/getMENTORIdeas/${id}`);
      if (Idea) {
        dispatch({
          type: GET_ALL_IDEA,
          payload: Idea,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const SelectIdea =
  ({ id, ideaId }) =>
   async (dispatch) => {
    const body = {
      ideaId: ideaId,
    };
    try {
      const Idea = await axios.post(`${API}/idea/selectIdea/${id}`, body, config);
   
      if (Idea) {
        console.log(Idea)
      
        dispatch({
          type: SELECT_IDEA,
          payload:{
            Step2:Idea.data.Step2,
          } 
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const EditIdea =
  ({ id, value, ideaId }) =>
  async (dispatch) => {
    const body = {
      value: value,
      ideaId: ideaId,
    };

    try {
      const Idea = await axios.post(`${API}/idea/editIdea/${id}`,body, config);
      if (Idea) {
        dispatch({
          type: EDIT_IDEA,
          payload: {Message: Idea.data.Message},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const GetMentorInfo =
  ({ id }) =>
  async (dispatch) => {
    try {
      const Idea = await axios.get(`${API}/getMentor/${id}`);
      if(Idea){
        dispatch({
          type: GET_MENTOR_INFO,
          payload: Idea
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
