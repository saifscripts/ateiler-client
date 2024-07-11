import { baseApi } from '../../api/baseApi';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: '/products/',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
