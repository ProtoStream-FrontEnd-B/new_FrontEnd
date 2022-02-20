import React from "react";
import { useState } from "react";
import "./css/modal.css";
import download from "../../Assets/icons/download.svg";

function YearlyProjectsModal({ branch, close }) {
  const data = {
    dname: "CSE",
    links: [
      {
        year: 2018,
        src: "http://www.africau.edu/images/default/sample.pdf",
      },
      {
        year: 2019,
        src: "http://www.africau.edu/images/default/sample.pdf",
      },
      {
        year: 2020,
        src: "http://www.africau.edu/images/default/sample.pdf",
      },
      {
        year: 2021,
        src: "http://www.africau.edu/images/default/sample.pdf",
      },
    ],
  };

  const [currentYear, setCurrentYear] = useState(2021);
  const [currentIndex, setCurrentIndex] = useState(3);

  const handleChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="head">
          <p className="dept_name">{branch}</p>
          <button className="close" onClick={close}>
            x
          </button>
        </div>
        <div className="modal-header">
          <div className="years">
            {data.links.map((item) => (
              <button
                className={currentYear == item.year ? "year active" : "year"}
                onClick={() => handleChange(item.year)}
              >
                {item.year}
              </button>
            ))}
          </div>
          <a
            href={data.links[currentIndex].src}
            target="_blank"
            className="download"
          >
            <button className="download-btn">
              <img src={download} alt="" />
            </button>
          </a>
        </div>
        <div className="pdf-container">
          <iframe src={data.links[currentIndex].src} frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
}

export default YearlyProjectsModal;
