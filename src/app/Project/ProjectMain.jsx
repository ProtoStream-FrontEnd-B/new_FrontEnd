import React from "react";
import StartupCard from "../../Components/Cards/StartupCard";
import "./css/ProjectMain.css";

function ProjectMain() {
  return (
    <div className="projects-main">
      <StartupCard
        btn1={"hackathon Projects"}
        btn2={"Add Project"}
        head={"Hackathons"}
        para={
          "list of projects registered for hackathon competitions and intracollege competitions or  virtual hackathons hosted by companies and organisations"
        }
        route1={"/projects/hackathons"}
        route2={"/projects/addHackathon"}
      />

      <StartupCard
        btn1={"Innotech Projects"}
        btn2={"Add Project"}
        head={"Innotech/B-Plan"}
        para={
          "list of projects registered for Intra college competition in branches and annual Technical fest and Entreprenurship Fest "
        }
        route1={"/projects/innotech"}
        route2={"projects/addInnotech"}
      />

      <StartupCard
        btn1={"Final Year Projects"}
        btn2={""}
        head={"Final Year Projects"}
        para={
          "list of projects submitted by  final year students with their particular branches and domains"
        }
        route1={"/projects/final_year"}
        route2={"/projects/final_year"}
      />
    </div>
  );
}

export default ProjectMain;
