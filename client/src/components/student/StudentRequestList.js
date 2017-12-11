import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStudentRequests, deleteStudentReq} from '../../actions';
import Loading from '../../components/loading'


class StudentRequestList extends Component{
  constructor(){
    super();
    this.state = {isLoading: true}
  }

  componentDidMount(){
    setTimeout(() => this.setState({ isLoading: false }), 500);
    this.props.fetchStudentRequests();
  }

  renderRequests(){
    return this.props.requests.reverse().map(request => {
      return(
        <div className="card blue-grey darken-1" key={request._id}>
          <div className="card-content white-text">
            <span className="card-title">{request.subject}</span>
            <p>{request.question}</p>
            <br></br>
            <p>Location: {request.location}<i className="material-icons">location_on</i></p>
            <div style={{paddingBottom: '30px'}}>
              <p className="right">Sent on: {new Date(request.datePosted).toLocaleDateString()}</p>

              <button className="red left black-text btn-flat" onClick={() => this.props.deleteStudentReq(request._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div className="center">
        {this.state.isLoading ? <Loading/> : this.renderRequests()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    requests: state.requests
  }
}

export default connect(mapStateToProps, { fetchStudentRequests, deleteStudentReq })(StudentRequestList);
