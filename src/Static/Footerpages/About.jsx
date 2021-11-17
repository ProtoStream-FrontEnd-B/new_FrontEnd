import React from 'react'
import image1 from "../../Assets/Illustrations/image 1.svg";
import image2 from "../../Assets/Illustrations/image 2.svg";
import image3 from "../../Assets/Illustrations/image 3.svg";
import Footer from "./Footer";
import "./css/About.css"

function About() {
    return (
      <div>
        <div className="about">
          <h1 className="head">About Protostream</h1>

          <div className="details">
            <p className="para">
              ProtoStream is a web-app hosted on the KIET intranet for the
              college students to share their Entrepreneurship Ideas and
              Innovations with the TBI-KIET to get direct help for mentorship ,
              incubation and financial support to turn their ideas and
              prototypes into reality and focus more upon Innovation and
              Creation instead of being strangled in the chaotic jargon of mails
              and appointments to just get a chance to pitch their Ideas .
              ProtoStream focuses on Reducing the threshold of efforts required
              to pitch an Idea to the TBI and get started upon it.
              <br />
              <br />
              Further Idea about ProtoStream can be acquired through these
              infographics and slides .
              <br />
              <br />
            </p>

            <div className="slides">
              <img className="image" src={image1} alt="" />
              <img className="image" src={image2} alt="" />
              <img className="image" src={image3} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default About
