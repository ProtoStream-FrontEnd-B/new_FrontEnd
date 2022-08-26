import React from "react";
import hackathon from "../../Assets/Illustrations/hackathon.svg";
import internships from "../../Assets/Illustrations/internship.svg";
import landing from "../../Assets/Illustrations/landing.svg";
import prototyping from "../../Assets/Illustrations/prototyping.svg";
import resources from "../../Assets/Illustrations/resources.svg";
import startup_sec from "../../Assets/Illustrations/startup_img.svg";
import NavBar from "../../Components/Header/NavBar";
import CommonBtn from "../../Hoc/CommonBtn";
import Footer from "../Footerpages/Footer";
import Asection from "./Asection";
import "./css/Home.css";
import Section from "./Section";
import Startups from "./Startups";

const Home = () => {
  return (
    <div className="Home">
      <Section
        heading="Building the Future, One Idea at a time."
        subHeading="Ideas and Dreams are what makes Entrepreneurs different , but those dreams turned into reality is what makes the world different."
        span="You know what valuable company is nobody building ?"
        btnText="Register"
        imageSrc={landing}
        classname="section"
        link="signup"
        sec_btn_txt="Sign in"
        sec_link="signin"
      />
      <Section
        heading="Have an Idea ? make it a prototype "
        subHeading="Its almost always harder to raise capital than you thought it would be , and it always takes longer . so plan for that ?"
        btnText="Startup"
        imageSrc={startup_sec}
        classname="resource section"
        link="startups"
        below_txt="For non-college students only "
      />
      <Asection
        imageSrc={internships}
        heading="Seek New Opportunities"
        subHeading="Seek the best opportunities for learning and developing your skills on real projects  and grow with teams and be part of something unique."
        span="Be Whatever you desire to be."
        btnText="Internships"
        classname="section"
        link="internships"
      />
      <Section
        heading="Prototyping to Product"
        subHeading="Register your startup Idea and create complete product timelines with custom comments and messages that define your project state and stage and get mentorship in the journey of creating the final product and build your startup with efficiency."
        span="From Business Plan to Prototypes to Product , we got your back."
        btnText="Learn More"
        imageSrc={prototyping}
        classname="section"
        link=""
      />
      <Section
        heading="Resource Box"
        subHeading="Didn’t we told you we had a bag full of resources for you to prepare, learn and create new techologies and Learn Business and Entrepreneurship"
        btnText="Resources"
        imageSrc={resources}
        classname="resources section"
        link="resources"
      />
      <Section
        heading="Participations just got easier"
        subHeading="Let us do the tedious task of going through emails  or searching for contests, online coding competitions and hackathons . All you need to care about is acing them."
        btnText="Hackathons"
        imageSrc={hackathon}
        classname="section"
        link="projects/hackathons"
      />
      <CommonBtn />
      <Startups />
      <Footer />
    </div>
  );
};

export default Home;
