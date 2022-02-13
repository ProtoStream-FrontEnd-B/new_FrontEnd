// import React from "react";
// // import profile from "../../Assets/images/profile.svg";
// import Badge from "../../Assets/icons/Badge.svg";
// import arrow from "../../Assets/icons/arrow.svg";
// import file from "../../Assets/icons/file.svg";
// import plus from "../../Assets/icons/plus.svg";
// import cloudupload from "../../Assets/icons/cloudupload.svg";
// import checklist from "../../Assets/icons/checklist.svg";
// import presentation from "../../Assets/icons/presentation.svg";
// import Startup from "../../Assets/icons/Startup-icon.svg";
// import profile from "../../Assets/icons/profile.svg";
// import { isAuthenticated, signout } from "../../auth";
// import { NavLink, useHistory } from "react-router-dom";

// function StartupDashboard() {
//   const { user } = isAuthenticated();
//   const { Profilename, ProfileBranch, ProfileYear } = user.profiledata;
//   let history = useHistory();
//   const onClickLogout = () => {
//     signout(() => {
//       history.push("/login");
//     });
//   };
//   // const onClickMyProjects = () => {};

//   return (
//     <div className="dashboard">
//       <div className="Container">
//         <div className="sidebar">
//           <img className="student-img" src={profile} alt="student-imh" />
//           <h4 className="name">{Profilename}</h4>
//           <p className="student"> {ProfileBranch}</p>
//           <p className="student">{ProfileYear}</p>

//           <div className="startup-badge">
//             <img src={Badge} alt="" />
//             <p className="num">+918476090539</p>
//             <div className="startup-name">Roxet</div>
//           </div>

//           <button className="log-out" onClick={onClickLogout}>
//             <i className="fas fa-sign-out-alt"></i> Log Out
//           </button>
//         </div>

//         <Main>
//           <div className="dashboard-name">
//             <img src={Startup} alt="" />
//             <p className="name">Startup Panel</p>
//           </div>
//           <div className="yellow-container">
//             <div className="preview">
//               <div className="name">
//                 <img src={file} alt="" />
//                 <p>Preview</p>
//               </div>
//               <button>
//                 <img src={arrow} alt="" />
//               </button>
//             </div>
//             <div className="cards">
//               <Card
//                 icon={plus}
//                 head="Add  Update/Milestone"
//                 text="add a new update or achievement about your project "
//               />
//               <Card
//                 icon={cloudupload}
//                 head="Upload NDA"
//                 text="Got the Idea Approved ? Complete the Startup Registration Process"
//               />
//               <Card
//                 icon={checklist}
//                 head="List /Edit Internship"
//                 text="List,Edit or Delete an internship posting by Your Startup"
//               />
//               <Card
//                 icon={presentation}
//                 head="Add/Edit Files"
//                 text="Add/Edit Startup Related Files to be
// submitted to the TBI "
//               />
//             </div>
//           </div>
//         </Main>
//       </div>
//     </div>
//   );
// }

// export default StartupDashboard;
