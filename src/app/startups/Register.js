import {React , useEffect, useState}  from "react";
import { useSelector , useDispatch } from "react-redux";
import Scard from "../../Components/Cards/Scard";
import OtpVerify from "../../Assets/Illustrations/Otpverify.svg";
import formIcon from "../../Assets/icons/formIcon.svg";
import ThirdStep from "../../Assets/icons/3rdStep.svg";
import { GetIdea } from "../../redux/actions/startupAction";
import "./css/Register.css";
import { setJson } from "../../Global/Helper";

const Register = () => {
  const startup_details = useSelector((state) => state.startup);
  const {isLoading} = startup_details;
  console.log(startup_details);
  const dispatch = useDispatch();
  const userid = setJson(localStorage.getItem("user"));
  const id = userid._id;

  const step1_data = {
    id: id,
  };
  const step2_data = {
    id: id,
  };
  const step3_data = {
    id: id,
  };

  const [card_status , setCard_status]= useState({card_status1:"enable" , card_status2:"disable" , card_status3:"disable"});
  // const [card_status2 , setCard_status2]= useState("disable");
  // const [card_status3 , setCard_status3]= useState("disable");
  const idea_detail = useSelector(state=> state.startup);


  useEffect(() => {
    // dispatch(GetIdea(id));
   console.log("hey the useEffect got run");
   if(idea_detail.Idea.phonestatus==="approved"|| idea_detail.Idea.Step2!=null ||idea_detail.Idea.status==="under-reviewed"){
    
    //  setCard_status1("completed");
    //  setCard_status2("enable");
    setCard_status({card_status1:"completed" , card_status2:"enable" , card_status3:"disable"});
     
     
     
   }
   if(idea_detail.Idea.status==="approved"|| idea_detail.Idea.Step3!=null || idea_detail.Idea.status === "Step3-form-open" ){
     console.log("hola it ran ")
    //  setCard_status1("completed")
    // setCard_status2("completed");
    // setCard_status3("enable");
    setCard_status({card_status1:"completed" , card_status2:"completed" , card_status3:"enable"});
   }


  if(idea_detail.Idea.status==="verified"){
 
    setCard_status({card_status1:"disable" , card_status2:"disable" , card_status3:"disable"});
   }

   

  },[idea_detail])
  return (
    <div className="register">
      <div className="container">
        <Scard
          data={step1_data.id}
          func="step-1"
          route="/startups/Register/Otpverify"
          head="Step 1"
          para="Register your Mobile Number"
          btnName="Go"
          img={OtpVerify}
          
          status={card_status.card_status1}
        />
        <Scard
          data={step2_data.id}
          func="step-2"
          route="/startups/Register/form"
          head="Step 2"
          para="Enter some details about your Startup Idea, which helps you to provide a mentorship for your Idea."
          btnName="Go"
          img={formIcon}
          status={card_status.card_status2}
        />
        <Scard
          data={step3_data.id}
          func="step-3"
          route="/startups/Register/Dform"
          head="Step 3"
          para="After completing Step 2, you have to fill some more details which is directly sent to TBI Head for verification of your Startup Idea."
          btnName="Go"
          img={ThirdStep}
          status={card_status.card_status3}
        />
      </div>
    </div>
  );
};

export default Register;
