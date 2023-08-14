import axios from './axios.js';

const productService = {
  getListPublic(params) {
    return axios.get('/api/public/products', {
      params: {
        ...params,
      },
    });
  },

  getProductHome({ currentPage = 0, perPage = 4 } = {}) {
    return productService.getListPublic({
      pageNumber: currentPage,
      pageSize: perPage,
    });
  },

  getAllProducts() {
    return axios.get('/api/admin/products/');
  },

  addProduct(values) {
    return axios.post('/api/admin/products/', values, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  editProduct(data, id) {
    return axios.put(`/api/admin/products/update/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  filterProductShop(values) {
    return axios.post('/api/public/', values, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteProduct(id) {
    return axios.delete(`/api/admin/products/delete/${id}`);
  },

  getProductById(id) {
    return axios.get(`/api/admin/products/${id}`);
  },

  searchProductByName(string) {
    return axios.get(`/api/public/${string}`);
  },

  countTotalProduct() {
    return axios.get('/api/admin/products/count');
  },

  getBestSeller() {
    return axios.get('/api/orders/hot-saler');
  },
};

export default productService;
