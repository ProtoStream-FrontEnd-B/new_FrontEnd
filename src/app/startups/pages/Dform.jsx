import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// import arrow from "../../../Assets/icons/arrow.svg";
import { setJson } from "../../../Global/Helper";
import { CreateStep3, GetIdea } from "../../../redux/actions/startupAction";
// import { OpenStep3, GetStep2 } from "../../../redux/actions/startupAction";

function Dform() {
  const idea_detail = useSelector((state) => state.startup);

  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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
    verified: 0,
  });
  const startup_detail = useSelector((state) => state.startup);

  const handleonLoad = () => {
    console.log(startup_detail, "hey its the new startup detail");

    console.log(idea_detail);
    if (idea_detail.Idea.status === "approved") {
      console.log("its the open step2 form ");
    } else if (idea_detail.Idea.status === "under-verified") {
      if (startup_detail.Step3 != null || startup_detail.Step3 != undefined) {
        console.log("Hey this must work otherwise its no use");
        const {
          comment,
          Gender,
          Aadhar,
          PAN,
          Category,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
        } = startup_detail.Step3;
        setData({
          ...data,
          comment: comment,
          Gender: Gender,
          Aadhar: Aadhar,
          PAN: PAN,
          Category: Category,
          Q1: Q1,
          Q2: Q2,
          Q3: Q3,
          Q4: Q4,
          Q5: Q5,
          Q6: Q6,
          Q7: Q7,
          verified: 1,
        });
      } else {
        setData({ ...data, verified: 1 });
      }
    } else if (idea_detail.Idea.status === "verified") {
      if (startup_detail.Step3 !== null || startup_detail.Step3 !== undefined) {
        const {
          comment,
          Gender,
          Aadhar,
          PAN,
          Category,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
        } = startup_detail.Step3;
        setData({
          ...data,
          comment: comment,
          Gender: Gender,
          Aadhar: Aadhar,
          PAN: PAN,
          Category: Category,
          Q1: Q1,
          Q2: Q2,
          Q3: Q3,
          Q4: Q4,
          Q5: Q5,
          Q6: Q6,
          Q7: Q7,
          verified: 2,
        });
      } else {
        setData({ ...data, verified: 2 });
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
  const verified = data.verified;

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  console.log(`verified ${verified}`);

  return (
    <div className="main-container">
      <form className="container">
        <div className="basic-details">
          <div className="left">
            <div className="row">
              <div className="que">Latest Photo</div>
              {selectedFile && <img src={preview} className="preview" />}{" "}
              <input
                type="file"
                className="response"
                accept="image/png, image/jpeg"
                onChange={(e) => handleImage(e)}
              />
              {/* <div className="response">
                <img src={details.photo} alt="" className="profile" />
              </div> */}
            </div>
            <div className="row">
              <div className="que">Gender</div>
              <div className="response-inp-radio">
                <input
                  type="radio"
                  name="gender"
                  className="radio-inp"
                  value="M"
                />
                <label htmlFor="">Male</label>
                <input
                  type="radio"
                  name="gender"
                  className="radio-inp"
                  value="F"
                />
                <label htmlFor="">Female</label>
              </div>
              {/* <div className="response">{details.gender}</div> */}
            </div>
            <div className="row">
              <div className="que">Aadhar</div>
              <input type="number" className="response-inp" />
              {/* <div className="response">{details.aadhar}</div> */}
            </div>
            <div className="row">
              <div className="que">PAN Number(if any)</div>
              <input type="text" className="response-inp" />
              {/* <div className="response">{details.pan}</div> */}
            </div>
            <div className="row">
              <div className="que">Category</div>
              <select name="category" id="" className="response-selection">
                <option value="gen">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>
              {/* <div className="response">{details.category}</div> */}
            </div>
          </div>
          <div className="right">
            <div className="row-alt">
              <div className="que">Current Career Status</div>
              <input type="text" className="response-inp" />
              {/* <div className="response">{details.status}</div> */}
            </div>
            <div className="row-alt">
              <div className="que">How did you came to know about TBI</div>
              <input type="text" className="response-inp" />
              {/* <div className="response">{details.cameToKnow}</div> */}
            </div>
            <div className="row-alt">
              <div className="que">
                Educational Qualification with Specialization
              </div>
              <input type="text" className="response-inp" />
              {/* <div className="response">{details.qualification}</div> */}
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="field">
            <p className="que">
              Any experiences relating to entrepreneurship, leadership, fund
              raising, organizing activities/ events etc
            </p>
            <div className="response-inp-radio">
              <input
                type="radio"
                name="experience"
                className="radio-inp"
                value="yes"
              />
              <label htmlFor="">Yes</label>
              <input
                type="radio"
                name="experience"
                className="radio-inp"
                value="no"
              />
              <label htmlFor="">No</label>
            </div>
            {/* <div className="response">
              <span
                className={details.experience ? "span mark" : "span"}
              ></span>
              <p className="options">Yes</p>
              <span
                className={details.experience ? "span" : "span mark"}
              ></span>
              <p className="options">No</p>
            </div> */}
          </div>

          <div className="field">
            <p className="que">
              Have you started and registered your own Venture (start up) ?
            </p>
            <div className="response-inp-radio">
              <input
                type="radio"
                name="ownVenture"
                className="radio-inp"
                value="yes"
              />
              <label htmlFor="">Yes</label>
              <input
                type="radio"
                name="ownVenture"
                className="radio-inp"
                value="no"
              />
              <label htmlFor="">No</label>
            </div>
            {/* <div className="response">
              <span
                className={details.ownVenture ? "span mark" : "span"}
              ></span>
              <p className="options">Yes</p>
              <span
                className={details.ownVenture ? "span" : "span mark"}
              ></span>
              <p className="options">No</p>
            </div> */}
          </div>
          <div className="field">
            <p className="que">
              Have you received financial support / award for your present work
              from any other sources? (if so, please furnish details)
            </p>
            <div className="response-inp-radio">
              <input
                type="radio"
                name="support"
                className="radio-inp"
                value="yes"
              />
              <label htmlFor="">Yes</label>
              <input
                type="radio"
                name="support"
                className="radio-inp"
                value="no"
              />
              <label htmlFor="">No</label>
            </div>
            {/* <div className="response">
              <span className={details.support ? "span mark" : "span"}></span>
              <p className="options">Yes</p>
              <span className={details.support ? "span" : "span mark"}></span>
              <p className="options">No</p>
            </div> */}
          </div>
          <div className="field">
            <p className="que">
              Status of work already carried out on the scale of TRL
            </p>
            <select name="trl" id="" className="response-selection">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            {/* <div className="response">
              <span className="fill-section">{details.trlStatus}</span>
            </div> */}
          </div>
          <div className="field">
            <p className="que">
              Please describe the technology for which you are seeking market
              opportunities or market for which you are seeking technology
              opportunities.
            </p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="response-inp"
            ></textarea>
            {/* <div className="response">
              <span className="fill-section">{details.describe}</span>
            </div> */}
          </div>

          <div className="field">
            <p className="que">
              Applicant confirms that he/she is fully committed to exploring a
              business idea.
            </p>
            <div className="response-inp-radio">
              <input
                type="radio"
                name="committed"
                className="radio-inp"
                value="agree"
              />
              <label htmlFor="">I Agree</label>
            </div>
            {/* <div className="response">
              <span
                className={details.agreement1 ? "span mark" : "span"}
              ></span>
              <p className="options">I Agree</p>
            </div> */}
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
            <div className="response-inp-radio">
              <input
                type="radio"
                name="declaration"
                className="radio-inp"
                value="agree"
              />
              <label htmlFor="">I Agree</label>
            </div>
            {/* <div className="response">
              <span
                className={details.agreement2 ? "span mark" : "span"}
              ></span>
              <p className="options">I Agree</p>
            </div> */}
          </div>
        </div>
        <div className="control-buttons">
          <button className="btn">Upload Signature</button>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Dform;
