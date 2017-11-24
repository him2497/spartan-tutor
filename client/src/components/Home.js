import React from 'react';
import '../styles/home.css';
import '../styles/foundation.min.css'
import reactImg from '../img/react-1.gif'


class Home extends React.Component {
  render(){
    return(
        <div className="grid-container grid-container-padded">
          <div className="grid-container grid-container-padded">
            <div className="grid-x grid-margin-x">
              <div className="cell" style={style.box}>
                <div style={style.imageDiv}>
                  <img src={reactImg} alt="Not supported in this browser" style={style.image}></img>
                  <h1 style={style.h1}>Spartan Tutor</h1>
                  <div style={style.text}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat pharetra tortor, nec volutpat sapien. Praesent tristique efficitur mi et pulvinar. Maecenas vitae dignissim ante. Phasellus massa urna, imperdiet eu est vitae, feugiat sollicitudin dui. Fusce suscipit aliquam lectus. Aenean blandit sodales urna, at maximus ex gravida sit amet. Quisque suscipit, magna eget tincidunt sollicitudin, orci turpis accumsan lorem, vel imperdiet velit nulla ac quam. Praesent libero nunc, malesuada id est nec, tristique auctor ex. Mauris ipsum nulla, laoreet sed arcu a, porta accumsan tellus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const style = {
};

style.h1 = {
  textAlign: 'Center',
  fontFamily:'Raleway',
};

style.box = {
  boxShadow: "0 2px 30px #e6e6e6",
  background: 'white',
  fontFamily:'Raleway',
}

style.imageDiv = {
    background:'#00BCD4',
    paddingTop:'50px',
    height:'500px',
}

style.text={
  textAlign:'justified',
  padding: "20px 80px 40px 80px",
}
style.image={
  backgroundPosition: "50% 50%",
  borderRadius: '50%',
  width:'150px',
  height:'150px',
  display:'block',
  margin: '0 auto',
}


export default Home;
