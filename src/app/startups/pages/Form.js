import React, { useState, useEffect } from "react";
import "../css/Form.css";

import arrow from "../../../Assets/icons/arrow.svg";

function Form() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [verified, setverified] = useState(true);


  const mentors = [
    {
      name: " mr. amitsingh",
    },
    {
      name: " mr. amitsingh",
    },
    {
      name: " mr. amitsingh",
    },
    {
      name: " mr. amitsingh",
    },
    {
      name: " mr. amitsingh",
    },
    {
      name: " mr. amitsingh",
    },
  ];
  const user = {
    name: "rohan gupta",
    email: "rohan@gmail.com",
    year: "2nd",
    idea: "google",
    des: "google.pdf",
    mentor: "amit singh",
    url: "hjhjashj",
  };
  //const nextstep

  return (
    <div className="form">
      <div className="form__cardleft">
        <div className="form__cardleft-field">
          <h3>Idea Title</h3>
          <p>Give a name to your startup idea.</p>
        </div>
        <div className="form__cardleft-field">
          <h3>Brief your idea</h3>
          <p>
            You have to attach a file giving a brief of your idea in 500 words
          </p>
          <button>
            <p>See format here</p>
            <img src={arrow}></img>
          </button>
        </div>
        <div className="form__cardleft-field">
          <h3>Provide URL</h3>
          <p>
            You have to provide a google drive folder link,which contains all
            the files,presentation,videos (if any){" "}
          </p>
          <button>
            <p>See instruction here</p>
            <img src={arrow}></img>
          </button>
        </div>
        <div className="form__cardleft-field">
          <h3>Mentorship</h3>
          <p>
            If you are not able to find your mentor in the list, then you must
            contact admin .
          </p>
        </div>
      </div>
      <div className="form__cardright">
        <div className="form__cardright-heading">
          <p>Step 3</p>
          {verified && <button type="button"> {verified && "Verified"}</button>}
        </div>
        <div className="form__cardright-formupper">
          <div className="form__cardright-field">
            <p>Full Name</p>
            {verified  && <p>{user.name}</p>}
            {!verified && <input type="text" />}
          </div>
          <div className="form__cardright-field">
            <p>Personal Email-ID</p>
            {verified && <p>{user.email}</p>}
            {!verified && <input type="text" />}
          </div>
          <div className="form__cardright-field">
            <p>Current Year</p>
            {verified && <p>{user.year}</p>}
            {!verified && <input type="text" />}
          </div>
          <div className="form__cardright-field">
            <p>Idea Title</p>
            {verified && <p>{user.idea}</p>}
            {!verified && <input type="text" />}
          </div>
          <div className="form__cardright-field">
            <p>Brief Your Idea</p>
            {verified && <p>{user.des}</p>}
            {!verified && <input type="text" />}
          </div>
          <div className="form__cardright-field">
            <p>Provide URL</p>
            {verified && <p>{user.url}</p>}
            {!verified && <input type="text" />}
          </div>
          <div className="form__cardright-field-mentor">
            <p>Choose Mentor</p>
            {verified && <p>{user.name}</p>}
{!verified &&
            <div>

              <div className="form__cardright-field-mentor">
                
                <input type="text" />
                <img
                  onClick={() => {
                    setShowDropdown((prev) => !prev);
                  }}
                  src={arrow}
                ></img>
              </div>
              <div className="form__cardright-dropdown">
                {showDropdown && mentors.map((mentor) => <p>{mentor.name}</p>)}
              </div>
            </div>}
          </div>
        </div>
        <div className="form__cardright-formlower">
          <p>
            Tip:Please contact your mentor physically before filling this form,
            otherwise we are not sure the mentor you have selected is able to
            provide mentorship to your startup
          </p>
          <button>
            <p>{verified ? "Stpe 3" :"Submit"}</p>
            <img src={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
