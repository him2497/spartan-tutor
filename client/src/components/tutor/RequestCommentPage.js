import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchTutorRequests} from '../../actions';

class RequestCommentPage extends Component{

  componentDidMount() {
    this.props.fetchTutorRequests();
    this.content();
  }

  content(){
    this.props.requests.filter(request => {
      if(request._id === "5a2b29165cbb214a3c5dfc0d"){
      console.log(request.question)
    }})
  }

  render(){
    return(
      <div className="container" style={{marginTop:'10px'}}>
        <Link to="/tutor/dashboard">
          <button className="red black-text btn-flat">
            <i className="material-icons left">arrow_back</i>
            Back
          </button>
        </Link>
        <div >
          <p>Hello</p>
        </div>
        {this.content()}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {requests: state.requests}
}

export default connect(mapStateToProps, {fetchTutorRequests, requestIDComment})(RequestCommentPage);
