import React from 'react'
import './css/Member.css'

function Member({name, session, work, PP}) {
    return (
      <div className="member">
        <img className="PP" src={PP} alt="" />
        <div className="content">
          <h4 className="name">{name}</h4>
          <p className="session">{session}</p>
          <p className="work"> {work}</p>
        </div>
      </div>
    );
}

export default Member
