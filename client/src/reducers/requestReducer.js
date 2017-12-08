import { FETCH_REQUESTS, DELETE_REQUEST } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case FETCH_REQUESTS:
      return action.payload;
    case DELETE_REQUEST:
      return state.filter(item => item._id !== action.id);
    default:
      return state;
  }
}
