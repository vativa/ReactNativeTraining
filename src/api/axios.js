import axios from 'axios';
import C from 'src/utils/constants';

// AXIOS
const instance = axios.create({
  baseURL: __DEV__ ? C.REST_DEV : C.REST_PROD,
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json',
    'X-API-TOKEN-ORGANIZATION': 'MagicWeb.org',
  },
});

export default instance;
