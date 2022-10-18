import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ApiUserResource from '../../types/ApiUserResource';

export const DASHBOARD_SLICE_NAME = 'dashboard';

export interface DashboardState {
  user: ApiUserResource | null;
}

const initialState: DashboardState = {
  user: null,
};

export const dashboardSlice = createSlice({
  extraReducers: {},
  name: DASHBOARD_SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ApiUserResource | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = dashboardSlice.actions;

export default dashboardSlice.reducer;
