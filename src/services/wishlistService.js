import axios from './axios.js';

const wishlistService = {
  getAllWishLists() {
    return axios.get('/api/public/wish-list');
  },

  addProductToWishList(id) {
    return axios.get(`/api/public/wish-list/${id}`);
  },
};

export default wishlistService;
