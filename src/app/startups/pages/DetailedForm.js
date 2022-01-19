import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import arrow from "../../../Assets/icons/arrow.svg";
import { setJson } from "../../../Global/Helper";
import { CreateStep3, GetIdea } from "../../../redux/actions/startupAction";
import { OpenStep3, GetStep2 } from "../../../redux/actions/startupAction";

// const  DetailedForm = ()=> {
//     const[isVerified,setisVerified]=useState(true)
//     const[underVeriication,setunderVerfication]=useState(true)
//    const showbutton= !underVeriication && !isVerified

//   return (
//     // <div className="container">
//     //   <div className="step3__heading">Step 3</div>
//     //   <form className="step3__form">
//     //     <div className="step3__form-upper">
//     //       <div className="step3__form-upperleft">
//     //         <div>
//     //           <div className="step3__form-field">
//     //             <p>Latest Photo</p>
//     //             <input  type="file" />
//     //           </div>
//     //           <div  className="step3__form-field">
//     //             <p>Gender</p>
//     //             <input type="text" />
//     //           </div>
//     //           <div className="step3__form-field">
//     //             <p>Aadhaar Number</p>

//     //             <input type="number" />
//     //           </div>
//     //           <div className="step3__form-field">
//     //             <p>PAN Number(if any)</p>
//     //             <input type="number" />
//     //           </div>
//     //           <div className="step3__form-field">
//     //             <p>Category</p>

//     //             <input type="text" />
//     //           </div>
//     //         </div>
//     //         <div className="step3__form-upperleft-left"></div>
//     //       </div>

//     //       <div className="step3__form-upperright">
//     //         <div className="step3__form-field">
//     //           <p>Current Carrer Status</p>
//     //           <input type="text" />
//     //         </div>
//     //         <div className="step3__form-field">
//     //           <p> How did you came to know about TBI </p>
//     //           <input type="text" />
//     //         </div>
//     //         <div className="step3__form-field">
//     //           <p>Educational qualifications with specilisation</p>
//     //           <input type="text" />
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="form__lower">
//     //       <div className="form__lower-field">
//     //         <p>
//     //           Any experiences realting to entrepreneurship, leadership, fund
//     //           raising, organizing activities/ events etc
//     //         </p>
//     //         <div className="form__lower-field-options">
//     //           <div className="form__lower-field-option1">
//     //             <input type="checkbox" />
//     //             <p>Yes</p>
//     //           </div>
//     //           <div className="form__lower-field-option1">
//     //             <input type="checkbox" />
//     //             <p>No</p>
//     //           </div>

//     //         </div>
//     //       </div>
//     //       <div className="form__lower-field">
//     //         <p>
//     //             Have you started and registered your own Venture (startup) ?
//     //         </p>
//     //         <div className="form__lower-field-options">
//     //           <div className="form__lower-field-option1">
//     //             <input type="checkbox" />
//     //             <p>Yes</p>
//     //           </div>
//     //           <div className="form__lower-field-option1">
//     //             <input type="checkbox" />
//     //             <p>No</p>
//     //           </div>

//     //         </div>
//     //       </div>
//     //       <div className="form__lower-field">
//     //         <p>
//     //           Have you recived financial support/award for your present work from any other sources ? (if so, please furnish details)
//     //         </p>
//     //         <div className="form__lower-field-options">
//     //           <div className="form__lower-field-option1">
//     //             <input type="checkbox" />
//     //             <p>Yes</p>
//     //           </div>
//     //           <div className="form__lower-field-option1">
//     //             <input type="checkbox" />
//     //             <p>No</p>
//     //           </div>

//     //         </div>
//     //       </div>
//     //       <div className="form__lower-field">
//     //           <p>Status of work already carried out on the scale of TRL</p>
//     //           <input type="number" placeholder="Select level" />
//     //       </div>
//     //       <div className="form__lower-field">
//     //           <p>Please describe the technology for which you are seeking marketing opportunities or market for whichyou are seeking technology opportunities. </p>
//     //           <textarea  />
//     //       </div>
//     //       <div className="form__lower-field">
//     //           <p>Applicant confirms that he/she is fully commited to exploring a buisness idea </p>
//     //           <div className="form__lower-field-options1">
//     //           <input className="checkbox"  type="checkbox" placeholder="Select level" />
//     //           <p>I agree</p>
//     //           </div>
//     //       </div>
//     //       <div className="form__lower-field">
//     //           <p>
//     //               I declare that all the statements made in the application are true, complete and correct to the best of my knowledge and belief <br></br>
//     //           If any information found false or incorrect my candidature will stand cancelled and all my claims will be forfeited <br></br>
//     //           I have not reiceved any financial assistance for the present proposal from any other agency. <br></br>
//     //           if agree please upload your scanned signature/digital signature

//     //           </p>

//     //           <div className="form__lower-field-options1">
//     //           <input className="checkbox"  type="checkbox" placeholder="Select level" />
//     //           <p>I agree</p>
//     //           </div>
//     //       </div>
//     //       <div className="form-footer">
//     //           <input type="file" />
//     //           <div className="form-footer-left" >
//     //          {isVerified &&   <p className="form-footer-left-verify"> Under Verfication By</p>}
//     //          {underVeriication &&  <p className="form-footer-left-verify"> is Verified By</p> }
//     //           {isVerified &&  <p className="form-footer-left-tbi">TBI</p>}
//     //          {showbutton && <button  type="submit"> Submit</button>}
//     //           </div>
//     //           </div>
//     //     </div>
//     //   </form>
//     // </div>
//     <div className="form">
//     <form>
//       <label>
//         Your Name:
//         {verified == 0 && (
//           <input
//             name="Fullname"
//             type="text"
//             value={data.Fullname}
//             onChange={onHandleChange}
//           />
//         )}
//       </label>

//       {(verified === 1 || verified === 2) && <p>{data.Fullname}</p>}
//       <br />
//       <label>
//         Personal Email:
//         {verified == 0 && (
//           <input
//             name="Personal_email"
//             type="email"
//             value={data.Personal_email}
//             onChange={onHandleChange}
//           />
//         )}
//       </label>
//       {(verified === 1 || verified === 2) && <p>{data.Personal_email}</p>}
//       <br />
//       <label>
//         Current year:
//         {verified === 0 && (
//           <input
//             name="current_year"
//             type="number"
//             value={data.current_year}
//             onChange={onHandleChange}
//           />
//         )}
//       </label>
//       {(verified === 1 || verified === 2) && <p>{data.current_year}</p>}
//       <br />
//       <label>
//         Idea Title:
//         {verified === 0 && (
//           <input
//             name="Idea_title"
//             type="text"
//             value={data.Idea_title}
//             onChange={onHandleChange}
//           />
//         )}
//       </label>
//       {(verified === 1 || verified === 2) && <p>{data.Idea_title}</p>}
//       <br />
//       <label>
//         Brief Idea:
//         {verified === 0 && (
//           <input
//             name="Brief_Idea"
//             type="text"
//             value={data.Brief_Idea}
//             onChange={onHandleChange}
//           />
//         )}
//       </label>
//       {(verified === 1 || verified === 2) && <p>{data.Brief_Idea}</p>}
//       <br />
//       <label>
//         URL:
//         {verified === 0 && (
//           <input
//             name="URL"
//             type="text"
//             value={data.URL}
//             onChange={onHandleChange}
//           />
//         )}
//       </label>
//       {(verified === 1 || verified === 2) && <p>{data.URL}</p>}
//       <br />
//       <label>
//         Mentor:
//         {verified === 0 && (
//           <select value={data.Mentor} onChange={onHandleChange} name="Mentor">
//             {mentors.map((fbb) => (
//               <option key={fbb.key} value={fbb.name}>
//                 {fbb.name}
//               </option>
//             ))}
//             ;
//           </select>
//         )}
//       </label>
//       {(verified === 1 || verified === 2) && <p>{data.Mentor}</p>}

//       {verified === 0 && <button onClick={onHandleSubmit}>Submit </button>}
//       {verified === 1 && <button onClick={onHandleBack}>Back</button>}
//       {verified === 2 && <button onClick={onStep3}>Step 3</button>}
//     </form>
//   </div>
//   );
// }

// export default DetailedForm;

const DetailedForm = () => {
  const idea_detail = useSelector((state) => state.startup);
  const Idea_status = idea_detail.status;
  const [verified, setverified] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  let user = localStorage.getItem("user");
  const userid = setJson(localStorage.getItem("user"));
  const [data, setData] = useState({
    comment: "",
    Gender: "",
    Aadhar: null,
    PAN: "",
    Category: "",
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
  });
  const startup_detail = useSelector((state) => state.startup);

  const handleonLoad = () => {
    const userid = setJson(localStorage.getItem("user"));
    const id = userid._id;
   
    console.log(startup_detail, "hey its the new startup detail");
    // if (idea_detail.Idea.status === "Step1-complete") {
    //   console.log("its the open step2 form ");

    //   dispatch(OpenStep2({ id }));
    // } else if (idea_detail.Idea.status === "under-reviewed") {
    //   console.log("hey hey hey its not working");

    //   console.log("step 2 already filled");
    //   console.log(startup_detail);
    //   const { BriefData, Carrer, Name, Email, MobNo, URL, Idea } =
    //     startup_detail.Step2;
    //   setData({
    //     Fullname: Name,
    //     Personal_email: Email,
    //     Idea_title: Idea,
    //     MobNo: MobNo,
    //     URL: URL,
    //     Brief_Idea: BriefData,
    //   });
    //   setverified(1);
    // } else if (
    //   idea_detail.Idea.status === "approved" ||
    //   idea_detail.Idea.status === "verified"
    // ) {
    //   // const {BriefData , Carrer , Name , Email,MobNo , URL ,Idea} = startup_detail.Step2;
    //   // setData({Fullname:Name , Personal_email:Email , Idea_title:Idea ,MobNo: MobNo , URL:URL  ,Brief_Idea: BriefData})
    //   setverified(2);
    // }


    
    if (idea_detail.Idea.status === "approved") {
    console.log("its the open step2 form ")
     
     
    } else if (idea_detail.Idea.status === "under-verified") {

      if(startup_detail.Step3!==null){
        const {comment , Gender , Aadhar , PAN, Category , Q1 ,Q2 , Q3, Q4 , Q5 , Q6 , Q7} = startup_detail.Step3;
        setData({...data ,comment:comment , Gender:Gender , Aadhar:Aadhar,PAN:PAN, Category:Category  ,Q1:Q1 , Q2:Q2, Q3:Q3, Q4:Q4, Q5:Q5, Q6:Q6, Q7:Q7})
        setverified(1);
      }
     
      

    } else if( idea_detail.Idea.status==='verified'){

      if(startup_detail.Step3!==null){

        const {comment , Gender , Aadhar , PAN, Category , Q1 ,Q2 , Q3, Q4 , Q5 , Q6 , Q7} = startup_detail.Step3;
        setData({...data ,comment:comment , Gender:Gender , Aadhar:Aadhar,PAN:PAN, Category:Category  ,Q1:Q1 , Q2:Q2, Q3:Q3, Q4:Q4, Q5:Q5, Q6:Q6, Q7:Q7})
        setverified(2);
      }
     

    }
  };
  useEffect(() => {
    handleonLoad();
  }, [startup_detail]);

  const onHandleBack = () => {
    history.push("/startups/Register");
  };

  const onStep3 = () => {
    history.push("/startups/Register");
  };

  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const userid = setJson(localStorage.getItem("user"));
    console.log(userid);
    console.log(userid.number);
    let id = userid._id;
    const body = {
      comment: data.comment,
      Gender: data.Gender,
      Aadhar: data.Aadhar,
      PAN: data.PAN,
      Category: data.Category,
      Q1: data.Q1,
      Q2: data.Q2,
      Q3: data.Q3,
      Q4: data.Q4,
      Q5: data.Q5,
      Q6: data.Q6,
      Q7: data.Q7,
    };
    console.log(body);

    const Fdata = {
      id: id,
      Formdata: body,
    };

    dispatch(CreateStep3(Fdata));
    history.push("/startups/Register");
    console.log(data);
  };
  //const nextstep

  return (
    <div className="form">
      <form>
        <label>
          Comment:
          {verified == 0 && (
            <input
              name="comment"
              type="text"
              value={data.comment}
              onChange={onHandleChange}
            />
          )}
        </label>

        {(verified === 1 || verified === 2) && <p>{data.comment}</p>}
        <br />
        <label>
          Gender:
          {verified == 0 && (
            <input
              name="Gender"
              type="text"
              value={data.Gender}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Gender}</p>}
        <br />
        <label>
          Aadhar:
          {verified === 0 && (
            <input
              name="Aadhar"
              type="number"
              value={data.Aadhar}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Aadhar}</p>}
        <br />
        <label>
          PAN:
          {verified === 0 && (
            <input
              name="PAN"
              type="text"
              value={data.PAN}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Idea_title}</p>}
        <br />
        <label>
          Q1:
          {verified === 0 && (
            <input
              name="Q1"
              type="text"
              value={data.Q1}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q1}</p>}
        <br />
        <label>
          Q2:
          {verified === 0 && (
            <input
              name="Q2"
              type="text"
              value={data.Q2}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q2}</p>}
        <br />
        <label>
          Q3:
          {verified === 0 && (
            <input
              name="Q3"
              type="text"
              value={data.Q3}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q3}</p>}
        <br />
        <label>
          Q4:
          {verified === 0 && (
            <input
              name="Q4"
              type="text"
              value={data.Q4}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q4}</p>}
        <br />
        <label>
          Q5:
          {verified === 0 && (
            <input
              name="Q5"
              type="text"
              value={data.Q5}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q5}</p>}
        <br />
        <label>
          Q6:
          {verified === 0 && (
            <input
              name="Q6"
              type="text"
              value={data.Q6}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q6}</p>}
        <br />
        <label>
          Q7:
          {verified === 0 && (
            <input
              name="Q7"
              type="text"
              value={data.Q7}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q7}</p>}
        <br />
        {verified === 0 && <button onClick={onHandleSubmit}>Submit </button>}
        {verified === 1 && <button onClick={onHandleBack}>Back</button>}
        {verified === 2 && <button onClick={onStep3}>Step 3 Done</button>}
      </form>
    </div>
  );
};

export default DetailedForm;
