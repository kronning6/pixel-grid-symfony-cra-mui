import baseApi from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users',
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = extendedApi;
