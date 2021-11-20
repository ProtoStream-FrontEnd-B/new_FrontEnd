import axios from "axios";
import {
  GET_TRL,
  GET_IDEA,
  OPEN_STEP_2,
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

export const getTrl = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const Trl = await axios.get(`http://localhost:8000/getTrl/${id}`);
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
        `http://localhost:8000/updateTrl/${id}`,
        data,
        config
      );
      if (TrlData) {
        dispatch({
          type: UPDATE_TRL,
          payload: TrlData,
        });
      }
    } catch (error) {}
  };

export const CreateIdea = (id) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const CreatedIdea = axios.post(
      `http://localhost:8000/createIdea/${id}`,
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
        `http://localhost:8000/createIdea/${id}`,
        
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

  export const ChooseBranch = ({id , body})=>(dispatch)=>{
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      try {
          const Branch = axios.post(`http://localhost:8000/idea/chooseBranch/${id}` , config ,body);

          if(Branch){
              dispatch({
                  type:CHOOSE_BRANCH, 
                  payload: Branch
              })
          }
      } catch (error) {
          
      }
  }


  export const DropIdea = ({id})=>(dispatch)=>{


    try {
        const data = axios.get(`http://localhost:8000/idea/dropIdea/${id}`);
        if(data){
            dispatch({
                type:DROP_IDEA, 
                payload:null
            })
        }
    } catch (error) {
        
    }
  }


  export const OtpLogin = ({id})=>(dispatch)=>{


    try {
        const data = axios.get(`http://localhost:8000/idea/otplogin/${id}`)
        if(data){
            dispatch({
                type:OTP_LOGIN,
                payload: data
            })
        }
    } catch (error) {
        
    }
  }

  export const OtpVerify = ({id , code})=>(dispatch)=>{

    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      try {
          const data = axios.post(`http://localhost:8000/idea/otpverify/${id}` , config , data);
          if(data){
              dispatch({
                  type:OTP_VERIFY, 
                  payload:null
              })
          }
      } catch (error) {
          
      }

  }