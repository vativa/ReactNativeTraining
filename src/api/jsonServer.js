import axios from 'axios';
// import A from 'actions/index';
// import C from 'actions/constants';
import { dispatch } from 'store/index';

const __DEV__ = process.env.NODE_ENV === C.DEVELOPMENT;

// AXIOS
// console.log('>>> axios', process.env.API_URL);
const instance = axios.create({
  baseURL: __DEV__ ? process.env.API_DEV_URL : process.env.API_PROD_URL,
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json',
    'X-API-TOKEN-ORGANIZATION': 'Berliner Taxivereinigung e.V.'
  }
});

// Add a response interceptor (no effect)
instance.interceptors.response.use(
  response => {
    // Do something with response data
    dispatch({ type: A.CANCEL_FETCH });
    return response;
  },
  error => {
    // Do something on error response
    dispatch({ type: A.CANCEL_FETCH });
    if (error.response && error.response.status === 401) {
      console.error('ERROR.RESPONSE.STATUS === 401');
    }
    return Promise.reject(error);
  }
);

export default instance;
