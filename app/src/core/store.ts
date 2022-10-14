import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dashboardReducer from '../features/Dashboard/dashboardSlice';
import gridReducer from '../features/Grid/gridSlice';
import profileReducer from '../features/Profile/profileSlice';
import baseApi from '../services/baseApi';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    grid: gridReducer,
    profile: profileReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
