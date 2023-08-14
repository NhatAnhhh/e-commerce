import wishlistService from '@/services/wishlistService';
import { message } from 'antd';
import { fetchAllWishLists } from './wishlistSlice';

export const addAsyncProductToWishLists = id => {
  return async dispatch => {
    const result = await wishlistService.addProductToWishList(id);

    dispatch(fetchAsyncAllWishLists());
    message.success('Add to wishlist success');

    return result;
  };
};

export const fetchAsyncAllWishLists = () => {
  return async dispatch => {
    const result = await wishlistService.getAllWishLists();
    dispatch(fetchAllWishLists(result));

    return result;
  };
};
