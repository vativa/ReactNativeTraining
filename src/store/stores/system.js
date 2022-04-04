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
  fetchServer: config => ({ type: FETCH_SERVER, payload: config }),
  requestError: error => ({ type: REQUEST_ERROR, payload: error }),
  cancelFetch: response => ({ type: CANCEL_FETCH, payload: response.data }),
  responseError: error => ({ type: RESPONSE_ERROR, payload: error }),
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SERVER:
      return { ...state, loading: true, request: { config: action.payload, error: null } };
    case CANCEL_FETCH:
      return { ...state, loading: false, response: { data: action.payload, error: null } };
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        request: { ...state.request, error: action.payload?.toJSON() },
      };
    case RESPONSE_ERROR:
      return {
        ...state,
        loading: false,
        response: { data: null, error: action.payload?.toJSON() },
      };
    default:
      return state;
  }
};
