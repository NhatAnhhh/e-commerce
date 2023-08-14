import axios from './axios.js';

const paymentService = {
  paymentOnline(data) {
    return axios.post('/api/payment/pay', {
      ...data,
    });
  },

  paymentDirect(data) {
    return axios.post('/api/payment/money', {
      ...data,
    });
  },

  addLinkVNPay(data) {
    return axios.post('/api/payment/submit-order', data);
  },

  addProductToWishList(id) {
    return axios.get(`/api/public/wish-list/${id}`);
  },
};

export default paymentService;
