//import SecureStorage from "react-native-secure-storage";

export const localStorageService = {
    getAccessToken: () => {
        return null;//SecureStorage.getItem('accessToken');
    },
    setAccessToken: (token) => {
        //SecureStorage.setItem('accessToken', token);
    },
    getRefreshToken: () => {
        return null;// SecureStorage.getItem('refreshToken');
    },
    setRefreshToken: (token) => {
        //SecureStorage.setItem('refreshToken', token);
    }
};
