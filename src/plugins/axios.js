import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:19003/api'

const token = localStorage.getItem('psg_auth_token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('psg_auth_token')}`
}

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('psg_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axios;
