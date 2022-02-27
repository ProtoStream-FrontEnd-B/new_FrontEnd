import axios from "axios";
import { API } from "../../API/backend";
import { GET_ALL_IDEA, SELECT_IDEA, EDIT_IDEA, GET_MENTOR_INFO , IS_LOADING } from "./types";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const GetAllIdea =
  ({ id }) =>
  async (dispatch) => {
    try {

      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
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
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })

      const Idea = await axios.post(
        `${API}/idea/selectIdea/${id}`,
        body,
        config
      );

      if (Idea) {
        console.log(Idea);

        dispatch({
          type: SELECT_IDEA,
          payload: {
            Step2: Idea.data.Step2,
          },
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
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })

      const Idea = await axios.post(`${API}/idea/editIdea/${id}`, body, config);
      if (Idea.data.Message==="Step3 form will open now") {
        
        dispatch({
          type: EDIT_IDEA,
          payload: { Message: Idea.data.Message },
        });

        alert(Idea.data.Action);

      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

export const GetMentorInfo =
  ({ id }) =>
  async (dispatch) => {
    try {

      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const Idea = await axios.get(`${API}/getMentor/${id}`);
      if (Idea) {
        dispatch({
          type: GET_MENTOR_INFO,
          payload: Idea,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
