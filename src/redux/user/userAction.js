import userService from '@/services/userService';
import { fetchAllUser } from './userSlice';

export const fetchAsyncAllUsers = () => {
  return async dispatch => {
    const result = await userService.getListUsers();

    dispatch(fetchAllUser(result));
  };
};

export const deleteAsyncUser = id => {
  return async dispatch => {
    const result = await userService.deleteUser(id);
    dispatch(fetchAsyncAllUsers());
    return result;
  };
};

export const addAsyncUser = values => {
  return async dispatch => {
    const result = await userService.addUser(values);
    dispatch(fetchAsyncAllUsers());
    return result;
  };
};

export const editAsyncUser = (values, id) => {
  return async dispatch => {
    const result = await userService.editUser(values, id);
    dispatch(fetchAsyncAllUsers());
    return result;
  };
};
