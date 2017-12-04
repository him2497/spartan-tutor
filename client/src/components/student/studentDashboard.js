import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class studentDashboard extends Component {
  render() {
    return (
      <div className="fixed-action-btn">
        <Link to="/students/requests/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    )}
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(studentDashboard);
