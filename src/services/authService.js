import axios from './axios.js';
export const authService = {
  login(email, password) {
    return axios.post('/api/auth/login', {
      email,
      password,
    });
  },
  register(name, birthdate, email, password) {
    return axios.post('/api/auth/register', {
      name,
      birthdate,
      email,
      password,
    });
  },

  fetchMe(token) {
    if (!token) {
      return;
    } else if (Object.is(token, 'null')) {
      localStorage.removeItem('access_token');
      return;
    } else if (token === undefined) {
      localStorage.removeItem('access_token');
      return;
    } else {
      return axios.get('/api/auth/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          // Các header khác nếu cần thiết
        },
      });
    }
  },
};
