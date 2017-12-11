import axios from 'axios';
import { FETCH_USER, FETCH_REQUESTS, DELETE_REQUEST } from './types';


export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload:res.data });
  };

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({type:FETCH_USER, payload:res.data});
};

export const handleTokenTutor = (token) => async dispatch => {
  const res = await axios.post('/api/stripe/tutor', token);
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

export const deleteRequest = (id) => async dispatch => {
  dispatch({type: DELETE_REQUEST, id})
};

export const deleteStudentReq = (id) => dispatch => {
  axios.delete(`/api/student/requests/${id}`);
  dispatch({type: DELETE_REQUEST, id})
};

export const acceptRequest = (id) => async dispatch => {
  const res = await axios.post(`/api/requests/${id}`);
  dispatch({type: DELETE_REQUEST, id})
};
