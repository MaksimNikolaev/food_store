import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import { TPost, TUser } from './types';
import { formatTags } from '../../../shared/utils/function/functions';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_BASE,
  }),
  endpoints: build => ({
    getPost: build.query<TPost<string>, string>({
      query: (id: string) => ({
        url: `${SERVER_BASE}/posts/${id}`,
      }),
      transformResponse: (res: TPost<string []>) => {
        return {
          ...res,
          tags: formatTags(res.tags)          
        }
      }, 
    }),
    getUser: build.query<TUser, number>({
      query: (id: number) => ({
        url: `${SERVER_BASE}/users/${id}`,
      }),
    }),
  }),
});

export const { useLazyGetPostQuery, useLazyGetUserQuery } = postApi;