import axios from "axios";
import {
  GET_ALL_IDEA_TBI,
  SELECT_IDEA_TBI,
  EDIT_IDEA_TBI,
  LOGIN_TBI,
  REGISTER_TBI,
  GET_TBI_INFO,
  OPEN_IDEA_TBI,
  CREATE_SLOT,
  CHECK_SLOT,
  CHECK_ATTENDANCE_SLOT,
  UPDATE_ATTENDANCE,
  CLEAR_STATE
} from "./types";
import { API } from "../../API/backend";
import { useDispatch } from "react-redux";


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
    const Idea = await axios.post(`${API}/idea/selectIdea3/${id}` , ideaId , config);
    if (Idea) {
      dispatch({
        type: SELECT_IDEA_TBI,
        payload: {Idea:Idea.data.Step3},
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
    const Idea = await axios.post(`${API}/idea/editIdea3/${id}` , body, config);
  if (Idea) {
    dispatch({
      type: EDIT_IDEA_TBI,
      payload: {Step3: Idea.data.Step3, Message: Idea.data.Message}
    });
  }
  } catch (error) {
    console.log(error);
  }
  

}


export const OpenIdea = ({id , ideaId})=> async (dispatch)=>{

  const body = {
    
    ideaId: ideaId
  }
  console.log(body);

  try {
    const Idea = await axios.post(`${API}/idea/openIdea/${id}` , body, config);
    console.log(Idea)
  if (Idea) {
    dispatch({
      type: OPEN_IDEA_TBI,
      payload: {Step3: Idea.data.Step3, Message: Idea.data.Message , Idea: Idea.data.Idea}
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


export const Get_Ideas_for_Tbi = ({id})=> async (dispatch)=>{

console.log("Hey i just confiremed that get idea run")
  try {
    const data = await  axios.get(`${API}/idea/getIdeas/${id}`);

    if(data){

      console.log(data);
      dispatch({
        type: GET_ALL_IDEA_TBI,
        payload: {Ideas:data.data.UserIDeas}
      })
    }


  } catch (error) {
    console.log(error);
  }
}


export const CheckSlot = ({check_slot , id}) => async (dispatch)=>{

  const body = {
    check_slot: check_slot
  }

  try {
    const TRL = await axios.post(`${API}/idea/checkSlot/${id}` , body , config);

    if(TRL){
      console.log('hey the check slot run ')
      console.log(TRL);

      dispatch({
        type:CHECK_SLOT,
        payload: TRL
      })
    }
    alert(TRL.data.message);
    
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

export const CreateSlot = ({id , ideaId , Slot})=> async(dispatch)=>{

const body = {
  ideaId: ideaId,
  Slot: Slot
}

console.log("Hey this bloody works",body);

try {

  console.log("Hey create slot ")
  const TRL = await axios.post(`${API}/idea/createSlot/${id}` , body, config);
  if(TRL){
    console.log(TRL);
    dispatch({
      type:CREATE_SLOT,
      payload: {Idea: TRL.data.Idea}
    })
  }

  alert("Idea invited for the selected slot ");
  
} catch (error) {
  console.log(error)
  alert(error);
}

}


export const CheckAttendanceSlot = ({id , check_slot}) => async (dispatch)=>{

const body = {
  check_slot: check_slot
}

try {
  const TRL = await axios.post(`${API}/idea/checkAttendanceSlot/${id}` , body , config);

  if(TRL){
    console.log(TRL);
    console.log(TRL.data.Idea_List);
    dispatch({
      type: CHECK_ATTENDANCE_SLOT,
      payload: {Ideas:TRL.data.Idea_List}
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
  console.log(body);
  
  const TRL =  await axios.post(`${API}/idea/updateAttendance/${id}` , body , config);
  if(TRL){
    console.log(TRL);
    dispatch({
      type: UPDATE_ATTENDANCE,
      payload: TRL
    })
  }
  alert("Attendance updated...");
  
} catch (error) 
{alert(error);

console.log(error)  
}

}

export const ClearState = ()=>{

  console.log("Hey thos is clear state")
  return{
    type: CLEAR_STATE,
    payload: null
  }
}

