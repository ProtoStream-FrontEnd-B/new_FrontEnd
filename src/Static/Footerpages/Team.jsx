import React from 'react'
import './css/Team.css'
import Member from './Member'
import Footer from "./Footer";

function Team() {
    return (
      <div>
        <div className="Team">
          <h1 className="head"> The Team</h1>
          <div style={{ display: "inline-block" }}>
            <Member
              className="leader"
              name="Siddhant  Siwach "
              session="CSE 2017-2021"
              work="Ideation and  Design"
            />
          </div>
          <div className="container">
            <Member
              className="member_card"
              name="Himanshu Pandey"
              session="C0 2019-2023"
              work="Front-end"
            />
            <Member
              className="member_card"
              name=" Ayoushman Vasistha "
              session="CSE 2019-2023"
              work="Front-end"
            />
            <Member
              className="member_card"
              name="Akhil siraswal "
              session="CSE 2019-2023"
              work="Back-End"
            />
            <Member
              className="member_card"
              name=" Ujjwal Choudhry "
              session="CSE 2019-2023"
              work="Back-End"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Team
