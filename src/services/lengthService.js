import axios from './axios.js';

const lengthService = {
  addLengths(values) {
    return axios.post('/api/admin/lengths/addLengths', values);
  },
  getListLengths() {
    return axios.get('/api/admin/lengths/');
  },
  deleteLengths(values) {
    return axios.delete('/api/admin/lengths/deleteLengths', {
      data: values,
    });
  },
};

export default lengthService;
