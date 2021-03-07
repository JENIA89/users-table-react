import axios from 'axios';
import { api } from '../../api/api';
import { addUsers, getUsers } from '../actions/userActions';

export const getAsyncUsers = () => {
  return (dispatch) => {
    axios
      .get(api)
      .then((response) => {
        const data = response.data;
        dispatch(getUsers(data));
      })
      .catch((error) => console.log(error));
  };
};

export const addAsyncUsers = (data) => {
  return (dispatch) => {
    axios
      .post(`${api}/data/data`, data)
      .then((response) => {
        const data = response.data;
        dispatch(addUsers(data));
      })
      .catch((error) => console.log(error));
  };
};
