import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import { TComments } from './types';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_BASE,
  }),
  endpoints: build => ({
    getComments: build.query<TComments, string>({
      query: (id: string) => ({
        url: `${SERVER_BASE}/comments/post/${id}`,
      }),
      
    }),    
  }),
});

export const { useLazyGetCommentsQuery } = commentsApi;
