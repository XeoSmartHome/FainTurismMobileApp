import axios from "axios";
import {API_URL} from "@env";
import store from "../Store";
import ENDPOINTS from "./Endpoints";
import { localStorageService } from "./localStorageService";


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    config.headers.common['Access-Token'] = store.getState().auth.accessToken;
    return config;
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return api.request({
        ...ENDPOINTS.AUTH.REFRESH_ACCESS_TOKEN,
        data: {
          'refreshToken': store.getState().auth.refreshToken
        }
      }).then(
        (response) => {
          if (response.status === 200) {
            console.log('token refreshed')
            const {accessToken, refreshToken} = response.data;

            localStorageService.setAccessToken(accessToken);
            localStorageService.setRefreshToken(refreshToken);
            store.dispatch({type: 'LOAD_SESSION_SUCCESS', payload: {accessToken, refreshToken}});

            api.defaults.headers.common['Access-Token'] = accessToken;

            return api(originalRequest);
          }
        }
      );
    }
    return Promise.reject(error);
  }
);

export {api};
