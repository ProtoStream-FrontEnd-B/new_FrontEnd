import { React, useEffect } from "react";
import DashboardSidebar from "./components/DashBoardSidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetAllIdea } from "../../redux/actions/mentorAction";
import { Logout } from "../../redux/actions/authAction";
import MainArea from "./components/MainArea";
import profile from "../../Assets/icons/profile.svg";
import IdeaCard from "./components/IdeaCard";
import "./css/mentorDashboard.css";
import {ideasList} from "./Ideas"

function MentorDashboard() {
  const name = "Himanshu";
  const branch = "CSE";
  const batch = "2019-2023";
  const role = "Mentor";
  const pp = profile;
  const userid = JSON.parse(localStorage.getItem("user"));

 const {Profilename} = userid.profiledata

  
  const ideaData =  useSelector(state=> state.mentor);
  let Ideas =  ideaData.Ideas;
  if(Ideas===null){
    Ideas= []
  }
  console.log(ideaData);

  const dispatch = useDispatch();
  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem("user"));
    console.log(userid._id);
    const body = {
      id: userid._id
    }
    dispatch(GetAllIdea(body));
  }, []);

  const ideas = [
    {
      title: "Roxet",
      name: "Himanshu Pandey",
      email: "hp200229@gmail.com",
      year: "3rd",
      link: "www.haha.com",
    },
    {
      title: "Roxet",
      name: "Himanshu Pandey",
      email: "hp200229@gmail.com",
      year: "3rd",
      link: "www.haha.com",
    },
    {
      title: "Roxet",
      name: "Himanshu Pandey",
      email: "hp200229@gmail.com",
      year: "3rd",
      link: "www.haha.com",
    },
    {
      title: "Roxet",
      name: "Himanshu Pandey",
      email: "hp200229@gmail.com",
      year: "3rd",
      link: "www.haha.com",
    },
  ];
  return (
    <div className="dashboard">
      <div className="main-container">
        <DashboardSidebar
          pp={pp}
          name={Profilename}
          branch={branch}
          role={role}
          batch={batch}
        />
        <MainArea>
          <h1 className="heading">List of Ideas</h1>
          <div className="idea-container">
            {  ideas.length > 0 ? (
              ideas.map((idea) => (
                <IdeaCard
                  title={idea.title}
                  name={idea.name}
                  year={idea.year}
                  link={idea.link}
                  email={idea.email}
                />
              ))
            ) : (
              <div className="null">No Ideas present at the moment :)</div>
            )}
          </div>
        </MainArea>
      </div>
    </div>
  );
}

export default MentorDashboard;
