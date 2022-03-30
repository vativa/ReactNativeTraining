const FETCH_SERVER = 'FETCH_SERVER';
const REQUEST_ERROR = 'REQUEST_ERROR';
const CANCEL_FETCH = 'CANCEL_FETCH';
const RESPONSE_ERROR = 'RESPONSE_ERROR';

export const initState = {
  loading: false,
  request: { config: null, error: null },
  response: { data: null, error: null },
};

export const actionCreators = {
  fetchServer: dispatch => config => {
    console.log('>>>', dispatch({ type: FETCH_SERVER, payload: config }));
  },
  requestError: dispatch => error => {
    console.log('>>>', dispatch({ type: REQUEST_ERROR, payload: error }));
  },
  cancelFetch: dispatch => response => {
    console.log('>>>', dispatch({ type: CANCEL_FETCH, payload: response.data }));
  },
  responseError: dispatch => error => {
    console.log('>>>', dispatch({ type: RESPONSE_ERROR, payload: error }));
    if (error.response && error.response.status === 401) {
      console.error('ERROR.RESPONSE.STATUS === 401');
    }
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SERVER:
      return { ...state, loading: true, request: { config: action.payload, error: null } };
    case CANCEL_FETCH:
      return { ...state, loading: false, response: { data: action.payload, error: null } };
    case REQUEST_ERROR:
      return { ...state, loading: false, request: { ...state.request, error: action.payload } };
    case RESPONSE_ERROR:
      return { ...state, loading: false, response: { data: null, error: action.payload } };
    default:
      return state;
  }
};
