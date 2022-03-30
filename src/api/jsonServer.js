import React from 'react';
import axios from 'axios';
import { Context } from 'src/store';
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

// Add a response interceptor (no effect)
const {
  posts: { fetchServer, requestError, cancelFetch, responseError },
} = React.useContext(Context);

instance.interceptors.request.use(
  config => {
    fetchServer(config);
    return config;
  },
  error => {
    requestError(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    cancelFetch(response);
    return response;
  },
  error => {
    responseError(error);
    return Promise.reject(error);
  }
);

export default instance;
