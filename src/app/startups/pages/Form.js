import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import arrow from "../../../Assets/icons/arrow.svg";
import { setJson } from "../../../Global/Helper";
import { CreateStep2, GetIdea } from "../../../redux/actions/startupAction";
import { OpenStep3, GetStep2 } from "../../../redux/actions/startupAction";
import "./css/Step2.css";

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
    Carrer: "",
    Mentor: null,
    MobNo: null,
    verified: 0,
  });
  const startup_detail = useSelector((state) => state.startup);

  const handleonLoad = () => {
    console.log(startup_detail, "hey its the new startup detail");
    if (idea_detail.Idea.status === "Step1-complete") {
      console.log("its the open step2 form ");
    } else if (idea_detail.Idea.status === "under-reviewed") {
      if (startup_detail.Step2 != null || startup_detail.Step2 != undefined) {
        const { BriefData, Carrer, Name, Email, MobNo, URL, Idea } =
          startup_detail.Step2;
        setData({
          Fullname: Name,
          Personal_email: Email,
          Idea_title: Idea,
          MobNo: MobNo,
          URL: URL,
          Brief_Idea: BriefData,
          verified: 1,
        });
      }
    } else if (
      idea_detail.Idea.status === "approved" ||
      idea_detail.Idea.status === "verified" ||
      idea_detail.Idea.status === "under-verified"
    ) {
      if (startup_detail.Step2 != null || startup_detail.Step2 != undefined) {
        const { BriefData, Carrer, Name, Email, MobNo, URL, Idea } =
          startup_detail.Step2;
        setData({
          ...data,
          Fullname: Name,
          Personal_email: Email,
          Idea_title: Idea,
          MobNo: MobNo,
          URL: URL,
          Brief_Idea: BriefData,
          verified: 2,
        });
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
    const userid = setJson(localStorage.getItem("user"));
    const id = userid._id;

    dispatch(OpenStep3(id));
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
      MobNo: data.MobNo,
      Email: data.Personal_email,
      Carrer: "student",
      Idea: data.Idea_title,
      BriefData: data.Brief_Idea,
      URL: data.URL,
      mentorId: data.Mentor,
    };

    console.log("This is the data that gets send", body);

    const Fdata = {
      id: id,
      Formdata: body,
    };

    dispatch(CreateStep2(Fdata));
    history.push("/startups/Register");
    console.log(data);
  };
  //const nextstep

  const verified = data.verified;

  return (
    <div className="step-2">
      <div className="stepForm-container">
        <div className="sidebar">
          <div className="sec">
            <div className="heading">Idea Title</div>
            <div className="text">Give a name to your Startup Idea.</div>
          </div>
          <div className="sec">
            <div className="heading">Brief your Idea</div>
            <div className="text">
              You have to attach a file giving a brief of your Idea in 500
              words.
            </div>
            <button className="btn">
              See format here <img src={arrow} alt="" className="arw" />
            </button>
          </div>
          <div className="sec">
            <div className="heading">Provide URL</div>
            <div className="text">
              You have to provide a google drive folder link, which contains all
              the files,presentation, video description(if any).
            </div>
            <button className="btn">
              See instruction here <img src={arrow} alt="" className="arw" />
            </button>
          </div>
          <div className="sec">
            <div className="heading">Mentorship</div>
            <div className="text">
              If you are not able to found your mentor in this list, then you
              have to contact Admin.
            </div>
          </div>
        </div>
        <div className="main-form">
          <form action="" className="form">
            <h1 className="main-head">Step 2</h1>
            <div className="form-containers">
              <div className="field">
                <label htmlFor="Fullname">Full Name</label>
                {verified === 0 ? (
                  <input
                    value={data.Fullname}
                    onChange={onHandleChange}
                    name="Fullname"
                    type="text"
                    className="inp"
                  />
                ) : (
                  <label>{data.Fullname}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="MobNo">Mobile Number </label>
                {verified === 0 ? (
                  <input
                    value={data.MobNo}
                    onChange={onHandleChange}
                    name="MobNo"
                    type="number"
                    className="inp"
                  />
                ) : (
                  <label>{data.MobNo}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="Personal_email">Personal Email-ID</label>
                {verified === 0 ? (
                  <input
                    value={data.Personal_email}
                    onChange={onHandleChange}
                    name="Personal_email"
                    type="email"
                    className="inp"
                  />
                ) : (
                  <label>{data.Personal_email}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="year">Current Year</label>
                {verified === 0 ? (
                  <input
                    value={data.current_year}
                    onChange={onHandleChange}
                    name="current_year"
                    type="number"
                    className="inp"
                  />
                ) : (
                  <label>{data.current_year}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="Idea_title">Idea Title</label>
                {verified === 0 ? (
                  <input
                    value={data.Idea_title}
                    onChange={onHandleChange}
                    name="Idea_title"
                    type="text"
                    className="inp"
                  />
                ) : (
                  <label>{data.Idea_title}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="Brief_Idea">Brief your Idea</label>
                {verified === 0 ? (
                  <textarea
                    value={data.Brief_Idea}
                    onChange={onHandleChange}
                    name="Brief_Idea"
                    type="text"
                    className="inp txtarea"
                  />
                ) : (
                  <label>{data.Brief_Idea}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="URL">Provide URL</label>
                {verified === 0 ? (
                  <input
                    value={data.URL}
                    onChange={onHandleChange}
                    name="URL"
                    type="text"
                    className="inp"
                  />
                ) : (
                  <label>{data.URL}</label>
                )}
              </div>
              <div className="field">
                <label htmlFor="URL">Mentor</label>
                {verified === 0 ? (
                  <select
                    value={data.Mentor}
                    onChange={onHandleChange}
                    name="Mentor"
                    className="inp"
                  >
                    {mentors != null && mentors != undefined &&
                      mentors.map((mentor) => (
                        <option key={mentor._id} value={mentor._id}>
                          {mentor.profiledata.Profilename}
                        </option>
                      ))}
                    ;
                  </select>
                ) : (
                  <label>{data.Mentor}</label>
                )}
              </div>
            </div>

            <div className="btm-sec">
              <div className="text">
                {verified === 2
                  ? "Next Step: Now you have to register your Idea to get a verification letter from TBI HEAD, for which you have to complete Step 3. Please proceed.."
                  : "Tip: Please contant physically to your mentor before filling this form, otherwise we are not sure the mentor you have selected is able to provide you mentorship for your Startup."}
              </div>

              {verified === 0 && (
                <button onClick={onHandleSubmit} className="btn submit">
                  Submit <img src={arrow} alt="" className="arw" />
                </button>
              )}
              {verified === 1 && (
                <button onClick={onHandleBack} className="btn submit">
                  Back <img src={arrow} alt="" className="arw" />
                </button>
              )}
              {verified === 2 && (
                <button onClick={onStep3} className="btn submit">
                  Step 3 <img src={arrow} alt="" className="arw" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
