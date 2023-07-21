import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState: string = 'none';

export const DisplaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    SetDislay: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { SetDislay } = DisplaySlice.actions;

export const GetDisplay = (state: RootState) => state.display;
export default DisplaySlice.reducer;
