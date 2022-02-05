import {api} from "../Api";


export const createSimpleApiAction = (namespace, {url, method}, args) => (dispatch) => {
  dispatch({
    type: `${namespace}_STARTED`,
    payload: null,
  });
  api.request({
    url: url,
    method: method,
    data: args || {},
  }).then(
    ({data}) => {
      dispatch({
        type: `${namespace}_SUCCESS`,
        payload: data,
      });
    }
  ).catch(
    (error) => {
      dispatch({
        type: `${namespace}_ERROR`,
        payload: error,
      });
    }
  );
};
