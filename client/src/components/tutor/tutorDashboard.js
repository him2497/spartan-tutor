import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router'


class tutorDashboard extends Component {

  renderContent() {
    if (this.props.auth) {
      if (this.props.auth.type === "Tutor") {
        return (<p>Works</p>)
      }
      else if(this.props.auth.type === "Student") {
        return (<Redirect to="/student/dashboard"/>)
      }
    }else{
      return (<Redirect exact to="/"/>)
    }
  }

  render() {
    return (
      <div>
        tutorDashboard
        {this.renderContent()}
      </div>
    )}
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(tutorDashboard);
