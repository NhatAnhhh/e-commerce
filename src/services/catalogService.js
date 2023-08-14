import axios from './axios.js';

const catalogService = {
  addCatalogs(values) {
    return axios.post('/api/admin/catalogs/addCatalogs', values);
  },
  getListCatalogs() {
    return axios.get('/api/admin/catalogs/');
  },
  deleteCatalogs(values) {
    return axios.delete('/api/admin/catalogs/deleteCatalogs', {
      data: values,
    });
  },
};

export default catalogService;
