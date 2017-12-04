import React from 'react'
import _ from 'lodash'
import {connect} from 'react-redux';
import formFields from './formFields'
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions'

const RequestFormReview = ({onCancel, formValues, submitRequest, history}) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <br></br>
      <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>Back</button>
      <button className="green white-text right btn-flat" onClick={() => submitRequest(formValues, history)}>Send Tutoring Request
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

function mapStateToProps(state){
  return{formValues: state.form.requestForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(RequestFormReview));
