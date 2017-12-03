import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Spartan Tutor!</h1>
      Spartan Tutor connects student who need help with coursework with experienced tutors.
      <p></p>
      <div className="container">
        <Link to="/student">
          <button className="btn">Student</button>
        </Link>
        <p></p>
        <Link to="/tutor">
          <button className="btn">Tutor</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing;
