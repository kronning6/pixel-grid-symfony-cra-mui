import baseApi from './baseApi';
import ApiUserResource from '../types/ApiUserResource';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<ApiUserResource[], void>({
      query: () => 'users',
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = extendedApi;
