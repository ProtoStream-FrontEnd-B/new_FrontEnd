import axios from "axios";
import {
  GET_ALL_IDEA_TBI,
  SELECT_IDEA_TBI,
  EDIT_IDEA_TBI,
  LOGIN_TBI,
  REGISTER_TBI,
  GET_TBI_INFO,
  CREATE_SLOT,
} from "./types";
import { API } from "../../API/backend";


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
        type: GET_ALL_IDEA_TBI,
        payload: Trl.data.Trl_value,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const SelectIdea = ({id , ideaId})=> (dispatch)=>{



  try {
    const Trl = await axios.post(`${API}/idea/selectIdea3/${id}` , ideaId , config);
    if (Trl) {
      dispatch({
        type: SELECT_IDEA_TBI,
        payload: Trl.data.Trl_value,
      });
    }
  } catch (error) {
    console.log(error);
  }

  
}

export const EditIdea = ({id , status , IdeaId})=> (dispatch)=>{

  const body = {
    value: status,
    ideaId: IdeaId
  }

  try {
    const Trl = await axios.post(`${API}//idea/editIdea3/${id}` , body, config);
  if (Trl) {
    dispatch({
      type: EDIT_IDEA_TBI,
      payload: Trl.data.Trl_value,
    });
  }
  } catch (error) {
    console.log(error);
  }
  

}


export const EditIdea = ({id ,email , password})=> (dispatch)=>{

  const body = {
    email: email,
    password: password
  }

  try {
    const Trl = await axios.post(`${API}/login` , body, config);
  if (Trl) {
    dispatch({
      type: LOGIN_TBI,
      payload: Trl,
    });
  }
  } catch (error) {
    console.log(error);
  }
  

}

export const GetTbiInfo = ({id })=> (dispatch)=>{



  try {
    const TRL = axios.get(`${API}/${id}` , config);
    if(TRL){
      dispatch({
        type:GET_TBI_INFO,
        payload: TRL
      })
    }
    
  } catch (error) {
    console.log(error)
  }
  
}

export const CreateSlot = ({id , ideaId , Slots})=> (dispatch)=>{

const body = {
  ideaId: ideaId,
  Slot: Slots
}

try {
  const TRL = axios.post(`${API}/idea/createSlot/${id}` , body, config);
  if(TRL){
    dispatch({
      type:CREATE_SLOT,
      payload: TRL
    })
  }
  
} catch (error) {
  console.log(error)
}

}

export const GetSlot = ({id })=>(dispatch)=>{

}