import React from "react";
import "./css/ideadetails.css";
import download from "../../Assets/icons/download.svg";

function IdeaDetails({
  name,
  details,
  members,
  summary,
  files,
  brief,
  attendenceDetails,
  milestones,
}) {
  var name = "Roxet";
  var details = [
    "Startup Domain",
    "Startup Stage",
    "Startup type",
    "Startup founder",
    "Founder's mobile",
    "Founder's email",
    "Founder's branch",
    "Founder's aadhar",
    "Founder's category",
    "Team Size",
  ];

  var detailsAns = [
    "Startup Domain",
    "Startup Stage",
    "Startup type",
    "Startup founder",
    "Founder's mobile",
    "Founder's email",
    "Founder's branch",
    "Founder's aadhar",
    "Founder's category",
    "Team Size",
  ];

  var members = [
    {
      name: "Himanshu Pandey",
      branch: "CSE",
      email: "himanshu.1923co1006@kiet.edu",
      mob: "8476090539",
    },
    {
      name: "Himanshu Pandey",
      branch: "CSE",
      email: "himanshu.1923co1006@kiet.edu",
      mob: "8476090539",
    },
    {
      name: "Himanshu Pandey",
      branch: "CSE",
      email: "himanshu.1923co1006@kiet.edu",
      mob: "8476090539",
    },
    {
      name: "Himanshu Pandey",
      branch: "CSE",
      email: "himanshu.1923co1006@kiet.edu",
      mob: "8476090539",
    },
  ];

  var summary =
    "Idea is to use chemical rockets to lift off from Earth and to land on Mars. But for the middle part of the journey, some engineers propose using something called nuclear thermal electric propulsion.The Orion crew module docking with Gateway in lunar orbit Astronauts could be sent to the Gateway in Nasa's Orion capsule. The Orion crew capsule would then dock with a transfer vehicle.";

  var files = [
    {
      name: "Presentation.ppt",
      link: "www.youtube.com",
    },
    {
      name: "Presentation.ppt",
      link: "www.youtube.com",
    },
    {
      name: "Presentation.ppt",
      link: "www.youtube.com",
    },
  ];

  var attendenceDetails = [
    {
      date: "27-Oct-2021",
      isPresent: true,
    },
    {
      date: "28-Oct-2021",
      isPresent: false,
    },
    {
      date: "29-Oct-2021",
      isPresent: true,
    },
    {
      date: "30-Oct-2021",
      isPresent: true,
    },
    {
      date: "31-Oct-2021",
      isPresent: true,
    },
  ];

  var milestones = [
    {
      date: "27-Oct-2021",
      message: "You have completed your all sessions.",
    },
    {
      date: "27-Oct-2021",
      message: "You have completed your all sessions.",
    },
  ];
  var brief =
    "If we're ever to make regular journeys from Earth to Mars and other far-off destinations, we might need new kinds of engines. Engineers are exploring revolutionary new technologies that could help us traverse the Solar System in much less time. Because of the orbital paths Mars and Earth take around the Sun, the distance between them varies between 54.6 million km and 401 million km. Missions to Mars are launched when the two planets make a close approach. During one of these approaches, it takes nine months to get to Mars using chemical rockets - the form of propulsion in widespread use. That's a long time for anyone to spend travelling. But engineers, including those at the US space agency (Nasa), are working with industrial partners to develop faster methods of getting us there. So what are some of the most promising technologies? Solar electric propulsion Solar electric propulsion could be used to send cargo to Mars ahead of a human mission. That would ensure equipment and supplies were ready and waiting for astronauts when they arrived using chemical rockets, according to Dr Jeff Sheehy, chief engineer in Nasa's Space Technology Mission Directorate. With solar electric propulsion, large solar arrays unfurl to capture solar energy, which is then converted to electricity. This powers something called a Hall thruster. There are pros and cons. On the upside, you need far less fuel, so the spacecraft becomes lighter. But it also takes your vehicle longer to get there.'In order to carry the payload we'd need to, it would probably take between two to 2.5 years to get us there,' Dr Sheehy tells the BBC.";
  return (
    <div className="idea-details">
      <div className="container">
        <div className="head-section">
          <h1 className="heading">{name}</h1>
        </div>
      </div>

      <div className="container details">
        <div className="heading">Basic Details</div>

        <div className="table">
          <div className="col">
            {details.map((i) => (
              <div className="row que">{i}</div>
            ))}
          </div>
          <div className="col">
            {detailsAns.map((i) => (
              <div className="row">{i}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="container members">
        <div className="heading">Members</div>
        <div className="table">
          <div className="col">
            <div className="col-head">Name</div>
            {members.map((member) => (
              <div className="row">{member.name}</div>
            ))}
          </div>
          <div className="col">
            <div className="col-head">Branch</div>
            {members.map((member) => (
              <div className="row">{member.branch}</div>
            ))}
          </div>
          <div className="col">
            <div className="col-head">E-mail</div>
            {members.map((member) => (
              <div className="row">{member.email}</div>
            ))}
          </div>
          <div className="col">
            <div className="col-head">Mobile</div>
            {members.map((member) => (
              <div className="row">{member.mob}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="container summary">
        <div className="heading">Summary</div>
        <div className="para">{summary}</div>
      </div>
      <div className="container files">
        <div className="heading">Files</div>
        <div className="all-files">
          {files.map((i) => (
            <button>
              {i.name} <img src={download} alt="" className="download" />
            </button>
          ))}
        </div>
      </div>
      <div className="container brief">
        <div className="heading">Brief</div>
        <div className="para">{brief}</div>
      </div>
      <div className="container meetings">
        <div className="heading">Meetings Details</div>
        <div className="all-meetings">
          {attendenceDetails.map((item, index) => (
            <div className="list-item">
              <div
                className="list-circle"
                style={{ backgroundColor: `${!item.isPresent ? "red" : ""}` }}
              >
                {" "}
              </div>
              <p className="date">{item.date}</p>
              <p className="remark">
                Session {index + 1} - You are marked
                {item.isPresent ? " Present" : " Absent"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container milestones">
        <div className="heading">Milestones</div>
        <div className="all-milestones">
          {milestones.map((item) => (
            <div className="list-item">
              <div className="list-circle"> </div>
              <p className="date">{item.date}</p>
              <p className="remark">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IdeaDetails;
