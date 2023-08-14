import axios from 'axios';
import { store } from '../redux/store';
import { setGlobalState } from '../redux/global/globalSlice';
const baseURL = import.meta.env.VITE_BACKEND_URL;

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*', // Thuộc tính CORS để cho phép truy cập từ mọi nguồn (origins)
    'Access-Control-Allow-Methods': '*', // Phương thức CORS cho phép
    'Access-Control-Allow-Headers': '*', // Headers CORS cho phép
  },
});

// instance.defaults.withCredentials = true; // tự set vào cookie

//context API

// Alter defaults after instance has been created
// instance.defaults.headers.common = { Authorization: `Bearer ${localStorage.getItem('access_token')}` }; // nén token

// const handleRefreshToken = async () => {
//   return instance.get('/api/v1/auth/refresh');
//   if (res && res.data) return res.data.access_token;
// };

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    store.dispatch(
      setGlobalState({
        loading: true,
      }),
    );
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// const NO_RETRY_HEADER = 'x-no-retry';

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  function (err) {
    // if (err.config && err.response && +err.response.status === 401 && !err.config.headers[NO_RETRY_HEADER]) {
    //   const access_token = await handleRefreshToken();
    //   err.config.headers[NO_RETRY_HEADER] = 'true';
    //   if (access_token) {
    //     err.config.headers['Authorization'] = `Bearer ${access_token}`;
    //     localStorage.setItem('access_token', access_token);
    //     return instance.request(err.config);
    //   }
    // }

    // if (err.config && err.response && +err.response.status === 400 && err.config.url === 'api/v1/auth/refresh') {
    //   window.location.href = '/login';
    // }

    return err?.response?.data ?? Promise.reject(err);
  },
);

export default instance;
