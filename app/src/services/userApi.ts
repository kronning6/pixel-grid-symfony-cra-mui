import baseApi from './baseApi';
import ApiUserResource from '../types/ApiUserResource';
import { setTheme } from '../features/Dashboard/dashboardSlice';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<ApiUserResource[], void>({
      query: () => 'users',
    }),
    updateUser: build.mutation<ApiUserResource, Partial<ApiUserResource>>({
      query: (data) => ({
        url: `users/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setTheme({ fg: data.foregroundColor, bg: data.backgroundColor }));
        } catch (err) {
          console.error('do nothing');
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useUpdateUserMutation } = extendedApi;
