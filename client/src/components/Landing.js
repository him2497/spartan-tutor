import React from 'react'

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1 className="red-text text-lighten-1">Spartan Tutor!</h1>
      Spartan Tutor connects student who need help with coursework with experienced tutors.
      <p></p>
      <div className="container">
        <a href="/student/auth/google">
          <button className="btn">Student</button>
        </a>
        <p></p>
        <a href="/tutor/auth/google">
          <button className="btn">Tutor</button>
        </a>
      </div>
    </div>
  )
}

export default Landing;
