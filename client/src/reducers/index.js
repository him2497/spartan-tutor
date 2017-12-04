import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as reduxForm} from 'redux-form';
import requestReducer from './requestReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  requests: requestReducer
})
