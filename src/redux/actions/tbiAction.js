import axios from "axios";
import {
  GET_ALL_IDEA_TBI,
  SELECT_IDEA_TBI,
  EDIT_IDEA_TBI,
  LOGIN_TBI,
  REGISTER_TBI,
  GET_TBI_INFO,
  CREATE_SLOT,
  CHECK_SLOT,
  CHECK_ATTENDANCE_SLOT,
  UPDATE_ATTENDANCE
} from "./types";
import { API } from "../../API/backend";


const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const GetAllIdea = (id) => async (dispatch) => {
  try {
    const Ideas = await axios.get(`${API}/idea/getTBIIdeas/${id}`);
    if (Ideas) {
      console.log(Ideas);
      dispatch({
        type: GET_ALL_IDEA_TBI,
        payload:{Ideas: Ideas.data.Ideas},
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const SelectIdea = ({id , ideaId})=> async (dispatch)=>{



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

export const EditIdea = ({id , status , IdeaId})=> async (dispatch)=>{

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


// export const EditIdea = ({id ,email , password})=> async (dispatch)=>{

//   const body = {
//     email: email,
//     password: password
//   }

//   try {
//     const Trl = await axios.post(`${API}/login` , body, config);
//   if (Trl) {
//     dispatch({
//       type: LOGIN_TBI,
//       payload: Trl,
//     });
//   }
//   } catch (error) {
//     console.log(error);
//   }
  

// }

export const GetTbiInfo = ({id })=> async(dispatch)=>{



  try {
    const TRL = await axios.get(`${API}/${id}` , config);
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

export const CreateSlot = ({id , ideaId , Slot})=> async(dispatch)=>{

const body = {
  ideaId: ideaId,
  Slot: Slot
}

try {
  const TRL = await axios.post(`${API}/idea/createSlot/${id}` , body, config);
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

export const CheckSlot = ({check_slot , id}) => async (dispatch)=>{

  const body = {
    check_slot: check_slot
  }

  try {
    const TRL = await axios.post(`${API}/idea/checkslot/${id}` , body , config);

    if(TRL){
      dispatch({
        type:CHECK_SLOT,
        payload: TRL
      })
    }
    
  } catch (error) {
    console.log(error);
  }
}

export const CheckAttendanceSlot = ({id , check_slot}) => async (dispatch)=>{

const body = {
  check_slot: check_slot
}

try {
  const TRL = await axios.post(`${API}/idea/checkAttendanceSlot/${id}` , body , config);

  if(TRL){
    dispatch({
      type: CHECK_ATTENDANCE_SLOT,
      payload: TRL
    })
  }
  
} catch (error) {
  console.log(error);
}

}

export const UpdateAttendance = ({id , attend , ideaId  , slot_no})=> async (dispatch)=>{

const body = {
  attend: attend,
  ideaId: ideaId,
  slot_no: slot_no,
}

try {
  const TRL =  await axios.post(`${API}/idea/updateAttendance/${id}` , body , config);
  if(TRL){
    dispatch({
      type: UPDATE_ATTENDANCE,
      payload: TRL
    })
  }
  
} catch (error) 
{
console.log(error)  
}

}

