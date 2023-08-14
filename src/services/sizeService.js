import axios from './axios.js';

const sizeService = {
  addSizes(values) {
    return axios.post('/api/admin/sizes/addSizes', values);
  },
  getListSizes() {
    return axios.get('/api/admin/sizes/');
  },
  deleteSizes(values) {
    return axios.delete('/api/admin/sizes/deleteSizes', {
      data: values,
    });
  },
};

export default sizeService;
