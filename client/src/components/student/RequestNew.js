import React, {Component} from 'react';
import {reduxForm} from 'redux-form'
import RequestForm from './RequestForm'
import RequestFormReview from './RequestFormReview'

class RequestNew extends Component {
  state = {showFormReview: false}

  renderContent(){
      if(this.state.showFormReview){
        return <RequestFormReview onCancel={() => this.setState({showFormReview: false})}/>;
      }
      return <RequestForm onSurveySubmit={() => this.setState({showFormReview:true})}/>
  }

  render() {
    return(
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}


export default reduxForm({
  form:'RequestForm'
})(RequestNew);
