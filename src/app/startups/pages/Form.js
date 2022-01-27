import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import arrow from "../../../Assets/icons/arrow.svg";
import { setJson } from "../../../Global/Helper";
import { CreateStep2, GetIdea } from "../../../redux/actions/startupAction";
import { OpenStep3, GetStep2 } from "../../../redux/actions/startupAction";

const Form = () => {
  const idea_detail = useSelector((state) => state.startup);
  const Idea_status = idea_detail.status;
  // const [verified, setverified] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  

  const [data, setData] = useState({
    Fullname: "",
    Personal_email: "",
    current_year: 1,
    Idea_title: "",
    Brief_Idea: "",
    URL: "",
    Carrer:"",
    Mentor: null,
    MobNo: null,
    verified:0
  });
  const startup_detail = useSelector((state) => state.startup);
 

  const handleonLoad =  () => {

    
   
   
    console.log(startup_detail, "hey its the new startup detail")
    if (idea_detail.Idea.status === "Step1-complete") {
    console.log("its the open step2 form ")
     
     
    } else if (idea_detail.Idea.status === "under-reviewed") {

      if(startup_detail.Step2!=null|| startup_detail.Step2!=undefined){
        const {BriefData , Carrer , Name , Email,MobNo , URL ,Idea} = startup_detail.Step2;
        setData({Fullname:Name , Personal_email:Email , Idea_title:Idea ,MobNo: MobNo , URL:URL  ,Brief_Idea: BriefData , verified:1})
   
      }
     
      

    } else if(idea_detail.Idea.status==='approved'|| idea_detail.Idea.status==='verified'|| idea_detail.Idea.status==='under-verified'){

      if(startup_detail.Step2!=null || startup_detail.Step2!=undefined){
        const {BriefData , Carrer , Name , Email,MobNo , URL ,Idea} = startup_detail.Step2;
        setData({...data,Fullname:Name , Personal_email:Email , Idea_title:Idea ,MobNo: MobNo , URL:URL  ,Brief_Idea: BriefData , verified:2})
      }
     

    }
  
  };


  useEffect(() => {
    handleonLoad();
  },[startup_detail]);

  const onHandleBack = () => {
    history.push("/startups/Register");
  };

  const onStep3 = () => {
    const userid = setJson(localStorage.getItem("user"));
    const id = userid._id;

    dispatch(OpenStep3(id))
    history.push("/startups/Register/Dform");
  };

  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const mentors = startup_detail.Mentor;
 
 
  
 
  

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const userid = setJson(localStorage.getItem("user"));
   
    let id = userid._id;
    console.log(data.Mentor);
    console.log(data);
    const body = {
      Name: data.Fullname,
      MobNo: 8445775919,
      Email: data.Personal_email,
      Carrer: "student",
      Idea: data.Idea_title,
      BriefData: data.Brief_Idea,
      URL: "https/::drivelink/data/vpcoket",
      mentorId: data.Mentor,
    };

    
    console.log("This is the data that gets send",body);

    const Fdata = {
      id: id,
      Formdata: body,

    };

  
    dispatch(CreateStep2(Fdata));
    history.push('/startups/Register')
    console.log(data);
  };
  //const nextstep

  const verified = data.verified;
  return (
    <div className="form">
      <form>
        <label>
          Your Name:
          {verified == 0 && (
            <input
              name="Fullname"
              type="text"
              value={data.Fullname}
              onChange={onHandleChange}
            />
          )}
        </label>

        {(verified === 1 || verified === 2) && <p>{data.Fullname}</p>}
        <br />
        <label>
          Personal Email:
          {verified == 0 && (
            <input
              name="Personal_email"
              type="email"
              value={data.Personal_email}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Personal_email}</p>}
        <br />
        <label>
          Current year:
          {verified === 0 && (
            <input
              name="current_year"
              type="number"
              value={data.current_year}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.current_year}</p>}
        <br />
        <label>
          Idea Title:
          {verified === 0 && (
            <input
              name="Idea_title"
              type="text"
              value={data.Idea_title}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Idea_title}</p>}
        <br />
        <label>
          Brief Idea:
          {verified === 0 && (
            <input
              name="Brief_Idea"
              type="text"
              value={data.Brief_Idea}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Brief_Idea}</p>}
        <br />
        <label>
          URL:
          {verified === 0 && (
            <input
              name="URL"
              type="text"
              value={data.URL}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.URL}</p>}
        <br />
        <label>
          Mentor:
          {verified === 0 && (
            <select value={data.Mentor} onChange={onHandleChange} name="Mentor">
              {mentors!=null && mentors.map((mentor) => (
                <option key={mentor._id} value={mentor._id}>
                  {mentor.profiledata.Profilename}
                </option>
              ))}
              ;
            </select>
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Mentor}</p>}

        {verified === 0 && <button onClick={onHandleSubmit}>Submit </button>}
        {verified === 1 && <button onClick={onHandleBack}>Back</button>}
        {verified === 2 && <button onClick={onStep3}>Step 3</button>}
      </form>
    </div>
  );
};

export default Form;
