import React from 'react'
import image from '../img/sjsu.png'
import {fadeInDown, slideInUp, zoomIn} from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import Footer from './Footer'


const styles = {
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  zoomIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  slideInUp: {
    animation: 'x 3s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp'),
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: 'center'
  },

}

class Landing extends React.Component {

  render() {
    return (
      <div style={{textAlign: 'center' }}>
        <img src={image} alt="Logo" style={{ width: '100%', paddingBottom: 100}}></img>
        <div style={{marginTop:'-40%'}}>
          <StyleRoot>
            <h1 className="red-text text-lighten-1" style={styles.fadeInDown}>Spartan Tutor!</h1>
          </StyleRoot>
          <StyleRoot>
            <h5 className="white-text text-lighten-1" style={styles.zoomIn}>
              Spartan Tutor connects student who need help with coursework with experienced tutors.
            </h5>
          </StyleRoot>
          <p></p>
          <br></br>
          <StyleRoot>
            <div className="container" style={styles.slideInUp}>
              <a href="/student/auth/google">
                <button className="btn" >Student Login</button>
              </a>
              <a href="/tutor/auth/google">
                <button className="btn" style={{marginLeft: 20}}>Tutor Login</button>
              </a>
            </div>
          </StyleRoot>
      </div>
        <footer style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <Footer/>
        </footer>
    </div>
    )
  }
}

export default Landing;
