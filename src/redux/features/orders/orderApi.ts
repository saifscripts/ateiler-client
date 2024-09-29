import { baseApi } from '../../api/baseApi';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/orders/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Order', 'Product'],
    }),
    getOrders: builder.query({
      query: (params) => ({
        url: '/orders/',
        method: 'GET',
        params,
      }),
      providesTags: ['Order'],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi;
