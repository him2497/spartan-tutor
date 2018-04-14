import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Payments from './Payments'
import PaymentsTutor from './PaymentsTutor'
import image from '../img/SpartanTutoring.png'

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return [
          <li key="1"><a href='student/auth/google'>Student Login</a></li>,
          <li key="2"><a href='tutor/auth/google'>Tutor Login</a></li>
      ]
      default:
        return [
          <li key="5" ><img src={this.props.auth.photo} style={{borderRadius: '50%', paddingTop:'8px'}} alt="profile-pic"></img> </li>,
          <li key="4" style={{paddingRight:'10px'}}><a href={this.props.auth.type === "Student" ? '/student/dashboard' : '/tutor/dashboard'}>Home</a></li>,
          <li key="1">{this.props.auth.type === "Student" ? <Payments/> : <PaymentsTutor/>}</li>,
          <li key="3" style={{margin:'0 10px'}}> Credits: {this.props.auth.credits} </li>,
          <li key="2"><a href='/api/logout'>Logout</a></li>
      ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{width: window.innerWidth}}>
          <Link to={this.props.auth ? '/dashboard' : '/'}
            className="brand-logo left" style={{paddingLeft: '20px'}}>
            <img src={image} alt="Logo" style={{height:'55px', width:'160px'}}></img>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
