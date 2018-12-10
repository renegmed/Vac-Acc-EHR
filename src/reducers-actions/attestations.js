import axios from 'axios';

export const types = {
  FETCH_SIGNED_ATTESTATIONS: 'FETCH_SIGNED_ATTESTATIONS',
  FETCH_SIGNED_ATTESTATIONS_SUCCESS: 'FETCH_SIGNED_ATTESTATIONS_SUCCESS',
  FETCH_SIGNED_ATTESTATIONS_FAILURE: 'FETCH_SIGNED_ATTESTATIONS_FAILURE', 
};

const DEFAULT_STATE = {
  loading: false,
  data: [],
  error: null,
};

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.FETCH_SIGNED_ATTESTATIONS:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SIGNED_ATTESTATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.FETCH_SIGNED_ATTESTATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };   
    default:
      return state;
  }
}

export const actions = {
  fetchAttestions() {
    return function (dispatch, getState) {
      dispatch({
        type: types.FETCH_SIGNED_ATTESTATIONS,
      });

      return axios.get('/attestation-data.json')
        .then(function (response) {
          dispatch({
            type: types.FETCH_SIGNED_ATTESTATIONS_SUCCESS,
            payload: response.data,
          });
        })
        .catch(err => {
          dispatch({
            type: types.FETCH_SIGNED_ATTESTATIONS_FAILURE,
            payload: err.message,
          });
        });
    };
  },
};