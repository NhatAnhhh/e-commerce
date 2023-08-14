import axios from './axios.js';

const colorService = {
  addColors(values) {
    return axios.post('/api/admin/colors/addColors', values);
  },
  getListColors() {
    return axios.get('/api/admin/colors/');
  },
  deleteColors(values) {
    return axios.delete('/api/admin/colors/deleteColors', {
      data: values,
    });
  },
};

export default colorService;
