import axios from './axios.js';

const orderService = {
  getOrderByIdUser(id) {
    return axios.get(`/api/orders/${id}`);
  },

  getAllOrders() {
    return axios.get('/api/orders');
  },

  updateStatusOrder(id) {
    return axios.post(`/api/orders/update/${id}`);
  },
};

export default orderService;
