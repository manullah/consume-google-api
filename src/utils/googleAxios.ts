import Axios, { AxiosError, AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import { getSession, signOut } from 'next-auth/react';

const googleAxios = Axios.create({
  baseURL: 'https://www.googleapis.com',
});

googleAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.headers['content-type'] === 'application/json; charset=utf-8') {
      response.data = camelizeKeys(response.data);
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.data && error.response?.headers['content-type'] === 'application/json; charset=utf-8') {
      error.response.data = camelizeKeys(error.response.data);
    }
    if (error.response?.status === 401) {
      signOut();
    }
    throw error.response?.data;
  },
);

googleAxios.interceptors.request.use(async (config) => {
  const newConfig = { ...config };

  const session = await getSession();
  if (session?.accessToken) {
    newConfig.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  if (newConfig.headers['Content-Type'] === 'multipart/form-data') return newConfig;
  if (config.params) {
    newConfig.params = camelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = camelizeKeys(config.data);
  }
  return newConfig;
});

export default googleAxios;
