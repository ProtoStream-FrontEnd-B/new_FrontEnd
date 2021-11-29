import axios from "axios";
import { API } from "../../API/backend";
import {
  GET_TRL,
  GET_IDEA,
  OPEN_STEP_2,
  GET_STEP_2,
  GET_STEP_3,
  OPEN_STEP_3,
  CREATE_IDEA,
  CREATE_STEP_2,
  CREATE_STEP_3,
  CHOOSE_BRANCH,
  UPDATE_TRL,
  DROP_IDEA,
  OTP_LOGIN,
  OTP_VERIFY,
} from "./types";


const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const getTrl = (id) => async (dispatch) => {


  try {
    const Trl = await axios.get(`${API}/getTrl/${id}`);
    if (Trl) {
      dispatch({
        type: GET_TRL,
        payload: Trl,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const UpdateTRL =
  ({ id, data }) =>
    async (dispatch) => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      try {
        const TrlData = await axios.post(
          `${API}/updateTrl/${id}`,
          data,
          config
        );
        if (TrlData) {
          dispatch({
            type: UPDATE_TRL,
            payload: TrlData,
          });
        }
      } catch (error) { }
    };

export const CreateIdea = (id) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const CreatedIdea = axios.post(
      `${API}/createIdea/${id}`,
      config
    );
    if (CreatedIdea) {
      dispatch({
        type: CREATE_IDEA,
        payload: CreatedIdea,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const GetIdea = (id) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const Idea = axios.get(
      `${API}/createIdea/${id}`,

    );
    if (Idea) {
      dispatch({
        type: GET_IDEA,
        payload: Idea,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const ChooseBranch = ({ id, body }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const Branch = axios.post(`${API}/idea/chooseBranch/${id}`, config, body);

    if (Branch) {
      dispatch({
        type: CHOOSE_BRANCH,
        payload: Branch
      })
    }
  } catch (error) {

  }
}


export const DropIdea = ({ id }) => (dispatch) => {


  try {
    const data = axios.get(`${API}/idea/dropIdea/${id}`);
    if (data) {
      dispatch({
        type: DROP_IDEA,
        payload: null
      })
    }
  } catch (error) {

  }
}


export const OtpLogin = ({ id }) => (dispatch) => {


  try {
    const data = axios.get(`${API}/idea/otplogin/${id}`)
    if (data) {
      dispatch({
        type: OTP_LOGIN,
        payload: data
      })
    }
  } catch (error) {

  }
}

export const OtpVerify = ({ id, code }) => (dispatch) => {



  try {
    const data = axios.post(`${API}/idea/otpverify/${id}`, config, data);
    if (data) {
      dispatch({
        type: OTP_VERIFY,
        payload: null
      })
    }
  } catch (error) {

  }

}


export const OpenStep2 = ({ id }) => (dispatch) => {


  try {


    const data = axios.get(`${API}idea/clickStep2/${id}`);
    if (data) {
      dispatch({
        type: OPEN_STEP_2,
        payload: data
      })
    }
  } catch (error) {

  }


}


export const CreateStep2 = ({ id, Formdata }) => (dispatch) => {
  try {

    const data = axios.post(`${API}/idea/createStep2/${id}`, config, Formdata);

    if (data) {
      dispatch({
        type: CREATE_STEP_2,
        payload: data,
      })
    }
  } catch (error) {

  }
}

export const GetStep2 = ({id})=>(dispatch)=>{
  try {
    const data = axios.post(`${API}/idea/getStep2/${id}`);

    dispatch({
      type: GET_STEP_2,
      payload: data,
    })
  } catch (error) {
    
  }
}


export const OpenStep3 = ({ id }) => (dispatch) => {


  try {


    const data = axios.get(`${API}/idea/clickStep3/${id}`);
    if (data) {
      dispatch({
        type: OPEN_STEP_3,
        payload: data
      })
    }
  } catch (error) {

  }


}


export const CreateStep3 = ({ id, Formdata }) => (dispatch) => {
  try {

    const data = axios.post(`${API}/idea/createStep3/${id}`, config, Formdata);

    if (data) {
      dispatch({
        type: CREATE_STEP_3,
        payload: data,
      })
    }
  } catch (error) {

  }
}

export const GetStep3 = ({id})=>(dispatch)=>{
  try {
    const data = axios.post(`${API}/idea/getStep3/${id}`);

    dispatch({
      type: GET_STEP_3,
      payload: data,
    })
  } catch (error) {
    
  }
}