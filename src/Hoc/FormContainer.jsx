import React from "react";
import "./css/FormContainer.css";

function FormContainer(props) {
  return <div className="form-container">{props.children}</div>;
}

export default FormContainer;
