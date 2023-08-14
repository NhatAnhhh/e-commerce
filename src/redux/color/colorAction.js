import colorService from '@/services/colorService';
import { setColorsList } from './colorSlice';

export const addAsyncColor = data => {
  return async dispatch => {
    const response = await colorService.addColors(data);
    dispatch(fetchAllAsyncColors());
    return response;
  };
};

export const deleteAsyncColor = data => {
  return async dispatch => {
    const res = await colorService.deleteColors(data);
    dispatch(fetchAllAsyncColors());
    return res;
  };
};

export const fetchAllAsyncColors = () => {
  return async dispatch => {
    const res = await colorService.getListColors();
    dispatch(setColorsList(res));
  };
};
