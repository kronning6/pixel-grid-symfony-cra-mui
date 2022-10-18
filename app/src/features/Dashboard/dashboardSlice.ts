import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ApiUserResource from '../../types/ApiUserResource';

export const DASHBOARD_SLICE_NAME = 'dashboard';

export interface DashboardState {
  user: ApiUserResource | null;
  fg: string;
  bg: string;
}

const initialState: DashboardState = {
  user: null,
  fg: '#ffffff',
  bg: '#195cab',
};

export const dashboardSlice = createSlice({
  extraReducers: {},
  name: DASHBOARD_SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ApiUserResource | null>) => {
      state.user = action.payload;
    },
    setTheme: (state, action: PayloadAction<{ fg: string | null | undefined; bg: string | null | undefined }>) => {
      state.fg = action.payload.fg ?? initialState.fg;
      state.bg = action.payload.bg ?? initialState.bg;
    },
  },
});

export const { setUser, setTheme } = dashboardSlice.actions;

export default dashboardSlice.reducer;
