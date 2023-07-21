import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import displayReducer from './reducers/Display/display.reducer';
export const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
