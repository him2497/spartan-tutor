import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'

class Dashboard extends Component {
  renderContent() {
    if (this.props.auth) {
      if (this.props.auth.type === "Student") {
        return (<Redirect to="/student/dashboard"/>)
      }
      else if(this.props.auth.type === "Tutor") {
        return (<Redirect to="/tutor/dashboard"/>)
      }
    }else{
      return (<Redirect exact to="/"/>)
    }
  }

  render() {
    return (
      <div>
        Dashboard
        {this.renderContent()}
      </div>
    )}
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Dashboard);
