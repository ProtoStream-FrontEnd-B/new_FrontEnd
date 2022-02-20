import React, { useState } from "react";
import YearlyProjectsModal from "../../Components/Modal/YearlyProjectsModal";
import "./css/Branches.css";

function Branches() {
  const branches = ["CSE", "IT", "ME", "EE", "CIVIL", "ECE", "EN", "PHARMA"];
  const [modal, setModal] = useState(false);
  const [currBranch, setCurrBranch] = useState("CSE");

  const showModal = (branch) => {
    setModal(true);
    setCurrBranch(branch);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="branches">
      {modal ? (
        <YearlyProjectsModal branch={currBranch} close={() => closeModal()} />
      ) : null}
      <div className="head">Select Branch</div>
      <div className="branch-container">
        {branches.map((branch) => (
          <div className="branch-box" onClick={() => showModal(branch)}>
            {branch}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
