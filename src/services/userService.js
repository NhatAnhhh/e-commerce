import axios from './axios.js';

const userService = {
  getList() {
    return axios.get('/api/admin/users');
  },

  getRoles() {
    return axios.get('/api/admin/roles');
  },

  upLoadAvatar(value, id) {
    return axios.post(`/api/public/avatar/upload/${id}`, value, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  updatePassword(data) {
    return axios.put('/api/public/user/password', {
      ...data,
    });
  },

  addUser(values) {
    return axios.post('/api/admin/users', values, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteUser(id) {
    return axios.delete(`/api/admin/users/${id}`);
  },

  editUser(data, id) {
    return axios.put(`/api/admin/users/${id}`, {
      ...data,
    });
  },

  getListUsers() {
    return userService.getList();
  },

  getUsersPagination(query) {
    return axios.get(`/api/admin/users?${query}`);
  },
  countTotalUser() {
    return axios.get('/api/admin/users/count');
  },
};

export default userService;
