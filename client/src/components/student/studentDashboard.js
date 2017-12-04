import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StudentRequestList from './StudentRequestList'

class studentDashboard extends Component {
  render() {
    return (
      <div className="container">
        <StudentRequestList/>
        <div className="fixed-action-btn">
          <Link to="/students/requests/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    )}
}

export default studentDashboard;
