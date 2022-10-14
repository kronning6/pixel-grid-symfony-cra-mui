import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const DASHBOARD_SLICE_NAME = 'dashboard';

export interface DashboardState {
  value: number;
}

const initialState: DashboardState = {
  value: 0,
};

export const dashboardSlice = createSlice({
  extraReducers: {},
  name: DASHBOARD_SLICE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = dashboardSlice.actions;

export default dashboardSlice.reducer;
