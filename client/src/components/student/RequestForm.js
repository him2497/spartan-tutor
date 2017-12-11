import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import RequestField from './RequestField'
import formFields from './formFields'


class RequestForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name, type}) => {
      return <Field key={label} label={label} type={type} name={name} component={RequestField}/>
    })
  }

  render() {
    return (<div>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to='/dashboard' className="red btn-flat white-text">
          Cancel
          <i className="material-icons left">cancel</i>
        </Link>
        <button type='submit' className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>)
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({name}) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  })
  return errors;
}

export default reduxForm({validate, form: 'requestForm', destroyOnUnmount: false})(RequestForm);
