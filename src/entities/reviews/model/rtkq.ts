import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import { TReviewData } from './types';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_BASE,
  }),
  endpoints: build => ({
    getComments: build.query<TReviewData, void>({
      query: () => ({
        url: `${SERVER_BASE}/comments?limit=0`,
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = reviewApi;
