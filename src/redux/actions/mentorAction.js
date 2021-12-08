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
  (dispatch) => {
    try {
      const Idea = axios.get(`${API}/idea/getMENTORIdeas/${id}`);
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
  (dispatch) => {
    const body = {
      ideaId: ideaId,
    };
    try {
      const Idea = axios.post(`${API}/idea/selectIdea/{id}`, body, config);
      if (Idea) {
        dispatch({
          type: SELECT_IDEA,
          payload: Idea,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const EditIdea =
  ({ id, value, ideaId }) =>
  (dispatch) => {
    const body = {
      value: value,
      ideaId: ideaId,
    };

    try {
      const Idea = axios.post(`${API}/idea/ideaId/${id}`);
      if (Idea) {
        dispatch({
          type: EDIT_IDEA,
          payload: Idea,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const GetMentorInfo =
  ({ id }) =>
  (dispatch) => {
    try {
      const Idea = axios.get(`${API}/getMentor/${id}`);
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
