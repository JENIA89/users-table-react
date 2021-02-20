import { ADD_USERS, GET_USERS } from './actionTypes';

export const getUsers = (data) => {
  return {
    type: GET_USERS,
    payload: data,
  };
};

export const addUsers = (data) => {
  return {
    type: ADD_USERS,
    payload: data,
  };
};
