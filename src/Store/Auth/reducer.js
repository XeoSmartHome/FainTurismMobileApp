import {localStorageService} from "../../Api/localStorageService";

const initialState = {
  authenticated: false,
  accessToken: null,
  refreshToken: null,
  signInError: null,
  signUpError: null,
};


const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_SESSION_SUCCESS':
      return {...state, authenticated: true, accessToken: payload.accessToken, refreshToken: payload.refreshToken};
    case 'SIGN_IN_SUCCESS':
      //localStorageService.setAccessToken(payload.accessToken);
      //localStorageService.setRefreshToken(payload.refreshToken);
      return {...state, authenticated: true, accessToken: payload.accessToken, refreshToken: payload.refreshToken};
    case 'SIGN_IN_ERROR':
      return {...state, signInError: payload.error};
    case 'SIGN_UP_SUCCESS':
      return {...state, authenticated: true, accessToken: payload.accessToken, refreshToken: payload.refreshToken};
    case 'SIGN_UP_FAIL':
      return {...state, signUpError: payload.error};
    case 'SIGN_OUT_SUCCESS':
      return {...state, authenticated: false, accessToken: null, refreshToken: null}
    default:
      return state;
  }
};


export default authReducer;
