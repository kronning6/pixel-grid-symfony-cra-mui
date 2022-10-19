import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  tagTypes: ['Users', 'Pixels'],
  endpoints: () => ({}),
});

export default baseApi;
