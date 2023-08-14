import axios from './axios.js';

const cartService = {
  getAllCarts() {
    return axios.get('/api/public/cart');
  },

  getTotalPrice() {
    return axios.get('/api/public/cart/total-price');
  },

  addProductToCart(data) {
    return axios.post('/api/public/cart', {
      ...data,
    });
  },

  deleteProductInCart(id, idSize, idColor) {
    return axios.delete(`/api/public/cart/delete?id=${id}&size=${idSize}&color=${idColor}`);
  },

  deleteCarts() {
    localStorage.removeItem('persist:root');
    return axios.delete('/api/public/session/delete');
  },

  deleteAllCarts() {
    return axios.delete('/api/public/cart/delete-cart');
  },

  updateCart(data, id) {
    return axios.put(`/api/public/cart/update/${id}`, {
      ...data,
    });
  },
};

export default cartService;
