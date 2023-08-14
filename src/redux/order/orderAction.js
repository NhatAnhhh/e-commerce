import cartService from '@/services/cartService';
import { fetchAllCarts, fetchOrderByIdUser, fetchOrders } from './orderSlice';
import { message } from 'antd';
import { fetchAsyncAllWishLists } from '../wishlist/wishlistAction';
import orderService from '@/services/orderService';

export const fetchAsyncAllCarts = () => {
  return async dispatch => {
    const result = await cartService.getAllCarts();

    dispatch(fetchAllCarts(result));
    return result;
  };
};

export const addAsyncProductToCarts = data => {
  return async dispatch => {
    const result = await cartService.addProductToCart(data);

    dispatch(fetchAsyncAllCarts());
    message.success('Product add to cart success');
    return result;
  };
};

export const deleteAsyncInCarts = (id, idSize, idColor) => {
  return async dispatch => {
    const result = await cartService.deleteProductInCart(id, idSize, idColor);
    dispatch(fetchAsyncAllCarts());
    message.success('delete Product to cart success');
    return result;
  };
};

export const updateAsyncCart = (data, id) => {
  return async dispatch => {
    const result = await cartService.updateCart(data, id);
    dispatch(fetchAsyncAllCarts());

    return result;
  };
};

export function actDeleteCarts() {
  return async dispatch => {
    const result = await cartService.deleteCarts();
    dispatch(fetchAsyncAllCarts());
    dispatch(fetchAsyncAllWishLists());
    return result;
  };
}

export function actDeleteAsyncAllCarts() {
  return async dispatch => {
    const result = await cartService.deleteAllCarts();
    dispatch(fetchAsyncAllCarts());
    return result;
  };
}

export function fetchAsyncOrderById(id) {
  return async dispatch => {
    const result = await orderService.getOrderByIdUser(id);
    dispatch(fetchOrderByIdUser(result));

    return result;
  };
}

export function fetchAsyncOrders() {
  return async dispatch => {
    const result = await orderService.getAllOrders();
    dispatch(fetchOrders(result));

    return result;
  };
}

export function updateAsyncOrder(id) {
  return async dispatch => {
    const result = await orderService.updateStatusOrder(id);
    dispatch(fetchAsyncOrders());
    return result;
  };
}
