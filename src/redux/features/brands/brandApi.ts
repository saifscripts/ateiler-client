import { baseApi } from '../../api/baseApi';

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => ({
        url: '/brands/',
        method: 'GET',
      }),
      providesTags: ['Brand'],
    }),
    createBrand: builder.mutation({
      query: (data) => ({
        url: '/brands/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Brand'],
    }),
  }),
});

export const { useGetBrandsQuery, useCreateBrandMutation } = brandApi;
