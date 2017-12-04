import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload:res.data });
  };

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({type:FETCH_USER, payload:res.data});
};

export const fetchRequests = () => async (dispatch) => {
    const res = await axios.get('/api/userRequests')
    dispatch({type: FETCH_USER, payload:res.data });
  };

export const submitRequest = (values, history) => async dispatch => {
  const res = await axios.post('/api/request', values);
  history.push('/requests');
  dispatch({type:FETCH_USER, payload:res.data})
}
