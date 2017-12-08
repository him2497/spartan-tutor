import React from 'react'
import image from '../img/sjsu.png'

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>

      <img src={image} alt="Logo" style={{width:"1536px", height:"660px"}}></img>
      <div style={{marginTop:'-660px'}}>
        <h1 className="red-text text-lighten-1">Spartan Tutor!</h1>
        <h5 className="white-text text-lighten-1">Spartan Tutor connects student who need help with coursework with experienced tutors.</h5>
        <p></p>
        <br></br>
        <div className="container">
          <a href="/student/auth/google">
            <button className="btn" style={{marginRight:'20px'}}>Student Login</button>
          </a>
          <a href="/tutor/auth/google">
            <button className="btn">Tutor Login</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing;
