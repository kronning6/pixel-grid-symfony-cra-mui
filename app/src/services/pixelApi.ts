import baseApi from './baseApi';
import ApiPixelResource from '../types/ApiPixelResource';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPixel: build.mutation<ApiPixelResource, Partial<ApiPixelResource>>({
      query: (data) => ({
        url: 'pixels',
        method: 'POST',
        body: data,
      }),
    }),
    getPixels: build.query<ApiPixelResource[], void>({
      query: () => 'pixels',
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePixelMutation, useGetPixelsQuery } = extendedApi;
