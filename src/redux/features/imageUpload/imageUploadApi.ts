import base64ToFormData from '../../../utils/base64ToFormData';
import { baseApi } from '../../api/baseApi';

export const imageUploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (base64Data) => ({
        url: 'https://api.imgbb.com/1/upload',
        method: 'POST',
        params: {
          key: import.meta.env.VITE_IMGBB_API_KEY,
        },
        body: base64ToFormData(base64Data),
      }),
    }),
  }),
});

export const { useUploadImageMutation } = imageUploadApi;
