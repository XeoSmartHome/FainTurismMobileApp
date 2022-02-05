import {createSimpleApiAction} from "../utils";
import {localStorageService} from "../../Api/localStorageService";
import API_ROUTES from "../../Api/Endpoints";
//import SecureStorage from "react-native-secure-storage";


export const signIn = (email, password) =>
  createSimpleApiAction('SIGN_IN', API_ROUTES.AUTH.SIGN_IN, {email, password});

export const signUp = (email, password, firstName, lastName) =>
  createSimpleApiAction('SIGN_UP', API_ROUTES.AUTH.SIGN_UP, {email, password, firstName, lastName});

export const signOut = () => (dispatch) => {
  //SecureStorage.removeItem('accessToken');
  //SecureStorage.removeItem('refreshToken');
  dispatch({type: 'SIGN_OUT_SUCCESS', payload: {}});
}

export const loadSession = () => (dispatch) => {
  Promise.all([localStorageService.getAccessToken(), localStorageService.getRefreshToken()]).then(
    ([accessToken, refreshToken]) => {
      if (accessToken == null || refreshToken == null)
        return;
      dispatch({type: 'LOAD_SESSION_SUCCESS', payload: {accessToken, refreshToken}});
    }
  ).catch(console.log);
};
