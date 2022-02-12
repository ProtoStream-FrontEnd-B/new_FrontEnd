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
  IS_LOADING
} from "./types";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const getTrl = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: "Loading.."
    })

    const Trl = await axios.get(`${API}/getTrl/${id}`);
    if (Trl) {
      dispatch({
        type: GET_TRL,
        payload: Trl.data.Trl_value,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const UpdateTRL = (userid) => async (dispatch) => {
  const { id, trl_value } = userid;

  try {
    dispatch({
      type: IS_LOADING,
      payload: "Loading.."
    })
    const TrlData = await axios.post(
      `${API}/updateTrl/${id}`,
      trl_value,
      config
    );
    console.log(TrlData);
    if (TrlData) {
      console.log(TrlData.data.Trl_value);
      dispatch({
        type: UPDATE_TRL,
        payload: TrlData.data.Trl_value,
      });
    }
  } catch (error) {
    alert("TRL VALUE WAS NOT UPDATED DUE TO SOME ISSUE ");
    console.log(error);
  }
};

export const CreateIdea = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    dispatch({
      type: IS_LOADING,
      payload: "Loading.."
    })
    const CIdea = await axios.post(`${API}/createIdea/${id}`, config);

    if (CIdea) {
      console.log(CIdea);
      dispatch({
        type: CREATE_IDEA,
        payload: CIdea.data.Idea,
      });
    }
  } catch (error) {
    console.log(error);
    alert("Idea was not created")
  }
};

export const GetIdea = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    dispatch({
      type: IS_LOADING,
      payload: "Loading.."
    })
    const Idea = await axios.get(`${API}/getIdea/${id}`, config);
    if (Idea.data) {
      console.log(Idea);
      dispatch({
        type: GET_IDEA,
        payload: { Idea: Idea.data.Idea, Message: Idea.data.Message },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const ChooseBranch =
  ({ id, trl_value }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const Branch = await axios.post(
        `${API}/idea/chooseBranch/${id}`,

        trl_value,
        config
      );

      if (Branch) {
        console.log("huuiuuuhhh");
        console.log(Branch);
        dispatch({
          type: CHOOSE_BRANCH,
          payload: {
            Message: Branch.data.Message,
            Idea: Branch.data.Idea,
          },
        });
      }
    } catch (error) {
      console.log(error);
      alert("Branch was not updated ")
    }
  };

export const DropIdea =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.get(`${API}/idea/dropIdea/${id}`);
      if (data) {
        dispatch({
          type: DROP_IDEA,
          payload: null,
        });
      }
    } catch (error) {}
  };

export const OtpLogin = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: "Loading.."
    })
    const data = await axios.get(`${API}/idea/otplogin/${id}`);

    if (data) {
      console.log("Hey i m the otp login ....", data);
      dispatch({
        type: OTP_LOGIN,
        payload: { Idea: data.data.Idea, Message: data.data.Message },
      });
    }
  } catch (error) {
    console.log("Error");
    alert("Otp was not send to the user");
  }
};

export const OtpVerify =
  ({ id, code }) =>
  async (dispatch) => {
    const body = {
      code: code,
    };
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.post(
        
        `${API}/idea/otpverify/${id}`,
        body,
        config
      );
      if (data) {
        console.log("Hey i m the otp verify req console ", data);
        dispatch({
          type: OTP_VERIFY,
          payload: { Idea: data.data.Idea, Message: data.data.Message },
        });
      }
    } catch (error) {
      console.log(error);
      alert("OTP NOT MATCHED")
    }
  };

export const OpenStep2 = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: "Loading.."
    })
    const data = await axios.get(`${API}/idea/clickStep2/${id}`);

    if (data) {
      console.log(data, "Open step 2 got run");
      dispatch({

        type: OPEN_STEP_2,
        payload: {Idea: data.data.Idea , Message: data.data.Message , Step2: data.data.Step2 , Mentor: data.data.Mentor},
      });
     
    }
  } catch (error) {
    console.log(error);
  }
};

export const CreateStep2 =
  ({ id, Formdata }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.post(
        `${API}/idea/createStep2/${id}`,
        Formdata,
        config
      );
      

      if (data) {
        console.log("Hye create step got run")
        console.log(data)
        dispatch({
          type: CREATE_STEP_2,
          payload: {
            Idea: data.data.Idea,
            Step2: data.data.Step2,
            Message: data.data.Message,
            Mentor: data.data.Mentor
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const GetStep2 =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.post(`${API}/idea/getStep2/${id}`);

      dispatch({
        type: GET_STEP_2,
        payload: data,
      });
    } catch (error) {}
  };

export const OpenStep3 =
  ( id ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.get(`${API}/idea/clickStep3/${id}`);
      if (data) {
        console.log("Hey its me step 3 i ran")
        dispatch({
          type: OPEN_STEP_3,
          payload: {
            Idea: data.data.Idea,
            Step2: data.data.Step2,
            Message: data.data.Message,
            Step3: data.data.Step3,
          },
        });
      }
    } catch (error) {}
  };

export const CreateStep3 =
  ({ id, Formdata }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.post(
        `${API}/idea/createStep3/${id}`,
        Formdata,
        config
      );

      if (data) {
        console.log(data);
        dispatch({
          type: CREATE_STEP_3,
          payload: {
            Idea: data.data.Idea,
            Step3: data.data.Step3,
            Message: data.data.Message,
          },
        });
      }
    } catch (error) {}
  };

export const GetStep3 =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: "Loading.."
      })
      const data = await axios.post(`${API}/idea/getStep3/${id}`);

      dispatch({
        type: GET_STEP_3,
        payload: data,
      });
    } catch (error) {}
  };
