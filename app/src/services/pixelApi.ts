import baseApi from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPixels: build.query({
      query: () => 'pixels',
    }),
  }),
  overrideExisting: false,
});

export const { useGetPixelsQuery } = extendedApi;
