import baseApi from './baseApi';
import ApiPixelResource from '../types/ApiPixelResource';
import { setTheme } from '../features/Dashboard/dashboardSlice';

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
      providesTags: ['Pixels'],
    }),
    updatePixel: build.mutation<ApiPixelResource, Partial<ApiPixelResource>>({
      query: (data) => ({
        url: `pixels/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      //invalidatesTags: ['Pixels'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePixelMutation, useGetPixelsQuery, useUpdatePixelMutation } = extendedApi;
