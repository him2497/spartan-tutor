import axios from 'axios';
import { FETCH_USER} from './types';
import { FETCH_REQUESTS } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload:res.data });
  };

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({type:FETCH_USER, payload:res.data});
};

export const fetchStudentRequests = () => async (dispatch) => {
    const res = await axios.get('/api/studentRequests')
    dispatch({type: FETCH_REQUESTS, payload:res.data });
  };

export const fetchTutorRequests = () => async (dispatch) => {
    const res = await axios.get('/api/tutorRequests')
    dispatch({type: FETCH_REQUESTS, payload:res.data });
  };

export const submitRequest = (values, history) => async dispatch => {
  const res = await axios.post('/api/request', values);
  history.push('/dashboard');
  dispatch({type:FETCH_USER, payload:res.data})
}
