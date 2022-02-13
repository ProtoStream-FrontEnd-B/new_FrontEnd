import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EditIdea } from "../../../redux/actions/tbiAction";
import { useSelector } from "react-redux";
import { setJson } from "../../../Global/Helper";
// import "./css/StartupDetails.css";

function Step3() {
  const state = useSelector((state) => state.tbi);
  const dispatch = useDispatch();
  const userid = setJson(localStorage.getItem("user"));
  console.log(state);
  console.log(userid._id);
  const handleOnLoad = () => {};

  const step3 = state.Step3;

  useEffect(() => {
    console.log(state);
  }, [state]);
  const details = {
    photo: "",
    gender: "male",
    aadhar: "1234 5678 1523",
    pan: "FCKUHEHE",
    category: "General",
    status: "Student",
    cameToKnow: "ProtoStream",
    qualification: "B.Tech CSE",
    experience: true,
    ownVenture: true,
    support: false,
    trlStatus: 2,
    describe:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
    agreement1: true,
    agreement2: true,
  };

  const onHandleVerify = (id, IdeaId) => {
    console.log(id);
    const status = "verified";
    dispatch(EditIdea({ id, status, IdeaId }));
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="basic-details">
          <div className="left">
            <div className="row">
              <div className="que">Latest Photo</div>
              <div className="response">
                <img src={details.photo} alt="" className="profile" />
              </div>
            </div>
            <div className="row">
              <div className="que">Gender</div>
              <div className="response">{details.gender}</div>
            </div>
            <div className="row">
              <div className="que">Aadhar</div>
              <div className="response">{details.aadhar}</div>
            </div>
            <div className="row">
              <div className="que">PAN Number(if any)</div>
              <div className="response">{details.pan}</div>
            </div>
            <div className="row">
              <div className="que">Category</div>
              <div className="response">{details.category}</div>
            </div>
          </div>
          <div className="right">
            <div className="row-alt">
              <div className="que">Current Career Status</div>
              <div className="response">{details.status}</div>
            </div>
            <div className="row-alt">
              <div className="que">How did you came to know about TBI</div>
              <div className="response">{details.cameToKnow}</div>
            </div>
            <div className="row-alt">
              <div className="que">
                Educational Qualification with Specialization
              </div>
              <div className="response">{details.qualification}</div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="field">
            <p className="que">
              Any experiences relating to entrepreneurship, leadership, fund
              raising, organizing activities/ events etc
            </p>
            <div className="response">
              <span
                className={details.experience ? "span mark" : "span"}
              ></span>
              <p className="options">Yes</p>
              <span
                className={details.experience ? "span" : "span mark"}
              ></span>
              <p className="options">No</p>
            </div>
          </div>

          <div className="field">
            <p className="que">
              Have you started and registered your own Venture (start up) ?
            </p>
            <div className="response">
              <span
                className={details.ownVenture ? "span mark" : "span"}
              ></span>
              <p className="options">Yes</p>
              <span
                className={details.ownVenture ? "span" : "span mark"}
              ></span>
              <p className="options">No</p>
            </div>
          </div>
          <div className="field">
            <p className="que">
              Have you received financial support / award for your present work
              from any other sources? (if so, please furnish details)
            </p>
            <div className="response">
              <span className={details.support ? "span mark" : "span"}></span>
              <p className="options">Yes</p>
              <span className={details.support ? "span" : "span mark"}></span>
              <p className="options">No</p>
            </div>
          </div>
          <div className="field">
            <p className="que">
              Status of work already carried out on the scale of TRL
            </p>
            <div className="response">
              <span className="fill-section">{details.trlStatus}</span>
            </div>
          </div>
          <div className="field">
            <p className="que">
              Please describe the technology for which you are seeking market
              opportunities or market for which you are seeking technology
              opportunities.
            </p>
            <div className="response">
              <span className="fill-section">{details.describe}</span>
            </div>
          </div>

          <div className="field">
            <p className="que">
              Applicant confirms that he/she is fully committed to exploring a
              business idea.
            </p>
            <div className="response">
              <span
                className={details.agreement1 ? "span mark" : "span"}
              ></span>
              <p className="options">I Agree</p>
            </div>
          </div>
          <div className="field">
            <p className="que">
              I declare that all the statements made in this application are
              true, complete and correct to the best of my knowledge and belief.
              If any information is found false or incorrect, my candidature
              will stand cancelled and all my claims will be forfeited.I have
              not received any financial assistance for the present proposal
              from any other agency. If agree please upload your scanned
              signature/digital signature.
            </p>
            <div className="response">
              <span
                className={details.agreement2 ? "span mark" : "span"}
              ></span>
              <p className="options">I Agree</p>
            </div>
          </div>
          <button className="btn">See Uploaded Signature</button>
          <button
            onClick={() => {
              onHandleVerify(userid._id, step3[0]._id);
            }}
            className="btn verify"
          >
            Verify it
          </button>
        </div>
        <div className="control-buttons">
          <button className="btn">Dismiss with Comment</button>
          <button className="btn">Delete the Idea</button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
