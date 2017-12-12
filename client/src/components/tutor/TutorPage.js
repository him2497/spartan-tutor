import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTutorRequests, deleteRequest, acceptRequest} from '../../actions';
import TutorRequestList from './TutorRequestList'
import Loading from '../../components/loading'

class TutorPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 500);
    this.props.fetchTutorRequests();
  }

  render() {
    return (
        <div>
          {this.state.isLoading ? <Loading/> :
          <TutorRequestList requests={this.props.requests} type={this.props.auth.type} user={this.props.auth.name} acceptRequest={this.props.acceptRequest} deleteRequest={this.props.deleteRequest}/>}
        </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    requests: state.requests,
    auth: state.auth
  }
}

export default connect(mapStateToProps, {fetchTutorRequests, deleteRequest, acceptRequest})(TutorPage);
