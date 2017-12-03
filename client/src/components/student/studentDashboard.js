import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router'


class studentDashboard extends Component {

  renderContent() {
    if (this.props.auth) {
      if (this.props.auth.type === "Student") {
        return (<p>Works</p>)
      }
      else if(this.props.auth.type === "Tutor") {
        return (<Redirect to="/tutor/dashboard"/>)
      }
    }else{
      return (<Redirect exact to="/"/>)
    }
  }

  render() {
    return (<div>
      studentDashboard {this.renderContent()}
    </div>)
  }
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(studentDashboard);
