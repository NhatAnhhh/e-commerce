import sizeService from '@/services/sizeService';
import { setSizesList } from './sizeSlice';

export const addAsyncSize = data => {
  return async dispatch => {
    const response = await sizeService.addSizes(data);

    dispatch(fetchAllAsyncSizes());
    return response;
  };
};

export const deleteAsyncSize = data => {
  return async dispatch => {
    const res = await sizeService.deleteSizes(data);
    dispatch(fetchAllAsyncSizes());
    return res;
  };
};

export const fetchAllAsyncSizes = () => {
  return async dispatch => {
    const res = await sizeService.getListSizes();
    dispatch(setSizesList(res));
  };
};
