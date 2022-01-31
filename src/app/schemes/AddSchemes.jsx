import React, { useState, useEffect } from "react";
import FormContainer from "../../Hoc/FormContainer";

import check from "../../Assets/icons/check.svg";
// import { isAuthenticated, schemeSubmit } from "../../auth";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

const AddSchemes = () => {
  const [values, setValues] = useState({
    compTitle: "",
    organizer: "",
    deadline: "",
    starting: "",
    ending: "",
    registrationLink: "",
    files: "",
    image: "",
    formData: "",
    error: false,
    loading: false,
  });

  const { formData } = values;
  const [isClicked, setIsClicked] = useState(false);
  //   const user = isAuthenticated();

  const preload = () => {
    setValues({ ...values, formData: new FormData() });
  };

  useEffect(() => {
    preload();
  }, []);

  const handleChange = (name) => (event) => {
    let value;
    if (name === "image") value = event.target.files[0];
    else if (name === "files") value = event.target.files[0];
    else value = event.target.value;
    formData.set(name, value);

    setValues({ ...values, error: false, [name]: value });
  };

  const errorMessage = (error) => {
    if (error) {
      return <Redirect to="/error" />;
    }
  };

  const onSubmitHandler = (event) => {
    // console.log(user);
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });
    // // schemeSubmit(user.user._id, formData)
    //   .then()
    //   .catch((err) => {
    //     errorMessage(err)();
    //   });
    setIsClicked(true);
  };

  const schemeFormMain = () => {
    return (
      <FormContainer>
        <h1 className="heading">Create new Schemes/Competition</h1>
        <div className="main-form-container">
          <form>
            <div className="field">
              <label htmlFor="compTitle">Competition title:</label>
              <input
                type="text"
                name="compTitle"
                className="input"
                onChange={handleChange("compTitle")}
              />
            </div>
            <div className="field">
              <label htmlFor="organizer">Organizer:</label>
              <input
                type="text"
                name="organizer"
                className="input"
                onChange={handleChange("organizer")}
              />
            </div>
            <div className="field">
              <label htmlFor="deadline">Registration Deadline:</label>
              <input
                type="date"
                name="deadline"
                className="input"
                onChange={handleChange("deadline")}
              />
            </div>
            <div className="field">
              <label htmlFor="starting">Starting date:</label>
              <input
                type="date"
                name="starting"
                className="input"
                onChange={handleChange("starting")}
              />
            </div>
            <div className="field">
              <label htmlFor="ending">End Date:</label>
              <input
                type="date"
                name="ending"
                className="input"
                onChange={handleChange("ending")}
              />
            </div>
            <div className="field">
              <label htmlFor="registrationLink">Registration Page Link:</label>
              <input
                type="text"
                name="registrationLink"
                className="input"
                onChange={handleChange("registrationLink")}
              />
            </div>
            <div className="field">
              <label htmlFor="image">Attach Header Image:</label>
              <input
                type="file"
                name="image"
                className="file"
                onChange={handleChange("image")}
              />
            </div>
            <div className="field">
              <label htmlFor="details">Attach Details file:</label>
              <input
                type="file"
                name="details"
                className="file"
                onChange={handleChange("details")}
              />
            </div>
            <button className="nextpage" onClick={onSubmitHandler}>
              Create Competition
              <img src={check} alt="" />
            </button>
          </form>
          {/* <div className="submit">
                  <h1>Your Scheme has been Successfully Added.</h1>
                  <NavLink to="/schemes/competitions" className="btn">
                    <button>Go to Schemes</button>
                  </NavLink>
                </div> */}
        </div>
      </FormContainer>
    );
  };
  return <div>{schemeFormMain()}</div>;
};

export default AddSchemes;
