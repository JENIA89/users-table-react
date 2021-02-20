import { ADD_USERS, GET_USERS } from '../actions/actionTypes';

const initialState = {
  data: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, data: action.payload };
    case ADD_USERS:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
