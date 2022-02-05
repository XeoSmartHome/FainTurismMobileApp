const ENDPOINTS = {
  AUTH: {
    SIGN_IN: {
      url: '/auth/sign-in',
      method: 'POST',
    },
    SIGN_UP: {
      url: '/auth/sign-up',
      method: 'POST',
    },
    REFRESH_ACCESS_TOKEN: {
      url: '/auth/refresh-access-token',
      method: 'POST',
    },
  },
};


export default ENDPOINTS;
