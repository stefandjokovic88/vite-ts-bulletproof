import Axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

// import jwt_decode from 'jwt-decode';
// import { useNotificationStore } from '@/stores/notifications';
import { appConfig } from '@/config/index';
import storage from '@/utils/storage';
// import { refreshToken } from '@/features/auth';

function authRequestInterceptor(config: AxiosRequestConfig) {
  // console.log({ config });
  const token = storage.get('access_token');
  const headers = { ...config.headers } as Partial<AxiosRequestHeaders>;

  if (!config || !config.url || !config.headers) {
    throw new Error('Axios config error');
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  headers.Accept = 'application/json';

  return { ...config, headers };
}

export const axios = Axios.create({
  baseURL: appConfig.appApiUrl,
});

axios.interceptors.request.use(authRequestInterceptor as any);
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },

//   async (error) => {
//     console.log({ error });
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       // const oldRefreshToken = getCookie('refresh_token');
//       // const oldRefreshTokenId = getCookie('refresh_token_id');

//       try {
//         // const newTokens = await refreshToken({
//         //   refreshToken: oldRefreshToken,
//         //   refreshTokenId: oldRefreshTokenId,
//         // });

//         // const decodedToken = jwt_decode(newTokens.refresh_token);
//         // const expirationTimestamp = decodedToken.exp * 1000;
//         // const expirationDate = new Date(expirationTimestamp);

//         // Object.entries(newTokens).forEach(([key, value]) => {
//         //   setCookie(key, value, { expires: expirationDate });
//         // });

//         return axios(originalRequest);
//       } catch (error) {
//         return error;
//       }
//     }
//     return Promise.reject(error);
//   }
// );
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  }
);
