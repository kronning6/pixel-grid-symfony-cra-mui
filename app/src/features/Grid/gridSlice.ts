import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const GRID_SLICE_NAME = 'grid';

export interface GridState {
  value: number;
}

const initialState: GridState = {
  value: 0,
};

export const gridSlice = createSlice({
  extraReducers: {},
  name: GRID_SLICE_NAME,
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

export const { increment, decrement, incrementByAmount } = gridSlice.actions;

export default gridSlice.reducer;
