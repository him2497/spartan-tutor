import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTutorRequests} from '../../actions';

class TutorRequestList extends Component{

  componentDidMount(){
    this.props.fetchTutorRequests();
  }

  renderRequests(){
    return this.props.requests.reverse().map(request => {
      return(
        <div class="card blue-grey darken-1" key={request._id}>
          <div class="card-content white-text">
            <span class="card-title">{request.subject}</span>
            <p>{request.question}</p>
            <p className="right">Sent on: {new Date(request.datePosted).toLocaleDateString()}</p>
          </div>
          <div class="card-action">
            <a>By: {request.userName}</a>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        {this.renderRequests()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    requests: state.requests
  }
}

export default connect(mapStateToProps, { fetchTutorRequests })(TutorRequestList);
