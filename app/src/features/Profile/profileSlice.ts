import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const PROFILE_SLICE_NAME = 'profile';

export interface ProfileState {
  value: number;
}

const initialState: ProfileState = {
  value: 0,
};

export const profileSlice = createSlice({
  extraReducers: {},
  name: PROFILE_SLICE_NAME,
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

export const { increment, decrement, incrementByAmount } = profileSlice.actions;

export default profileSlice.reducer;
