import React from 'react'
import github from '../img/github.svg'
import linkedin from '../img/linkedin1.svg'


class Footer extends React.Component{
  render(){
    let year = new Date();

    return(
      <div className="page-footer">
          <div className="container">
            <div className="row">
                <h5 className="white-text">Social Media</h5>
                <div style={{flexDirection: 'row'}}>
                  <a className="grey-text text-lighten-3" href="https://www.github.com/him2497">
                    <img src={github} style={{width: '36px', height: '36px'}} alt="Github"/>
                  </a>
                  <a className="grey-text text-lighten-3" style={{paddingLeft: '5px'}} href="https://www.linkedin.com/in/him-m">
                    <img src={linkedin} style={{width: '42px', height: '42px'}} alt="Linkedin"/>
                  </a>
                </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made with a lot of <span role="img" aria-label='coffee'>☕</span> 
            and <span role="img" aria-label='tired'>😴</span> ©{year.getFullYear()}
            </div>
          </div>
    </div>
    )
  }
}



export default Footer