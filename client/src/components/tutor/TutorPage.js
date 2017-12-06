import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTutorRequests, deleteRequest} from '../../actions';
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
    setTimeout(() => this.setState({isLoading: false}), 1500);
    this.props.fetchTutorRequests();
  }

  render() {
    return (<div>
      {this.state.isLoading ? <Loading/> :
      <TutorRequestList requests={this.props.requests} deleteRequest={this.props.deleteRequest}/>}
    </div>)
  }

}

function mapStateToProps(state) {
  return {requests: state.requests}
}

export default connect(mapStateToProps, {fetchTutorRequests, deleteRequest})(TutorPage);
