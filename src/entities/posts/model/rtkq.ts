import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import { TUser } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_BASE,
  }),
  endpoints: build => ({   
    getUser: build.query<TUser, number>({
      query: (id: number) => ({
        url: `${SERVER_BASE}/users/${id}`,
      }),
    }),
  }),
});

export const { useLazyGetUserQuery } = userApi;
