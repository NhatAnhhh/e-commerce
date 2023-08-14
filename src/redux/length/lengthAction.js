import lengthService from '@/services/lengthService';
import { setLengthsList } from './lengthSlice';

export const addAsyncLength = data => {
  return async dispatch => {
    const response = await lengthService.addLengths(data);

    dispatch(fetchAllAsyncLengths());
    return response;
  };
};

export const deleteAsyncLength = data => {
  return async dispatch => {
    const res = await lengthService.deleteLengths(data);
    dispatch(fetchAllAsyncLengths());
    return res;
  };
};

export const fetchAllAsyncLengths = () => {
  return async dispatch => {
    const res = await lengthService.getListLengths();

    dispatch(setLengthsList(res));
  };
};
