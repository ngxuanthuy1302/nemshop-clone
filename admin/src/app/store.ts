import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import LoadingReducer from './reducers/Loading/Loading.reducer';

import MenuReducer from './reducers/Menu/Menu.reducer';
export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    loading: LoadingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
