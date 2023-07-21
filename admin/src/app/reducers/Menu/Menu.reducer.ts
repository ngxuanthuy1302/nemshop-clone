import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenu } from '../../../interface/Menu.interface';
import { RootState } from '../../store';

const initialState: IMenu[] = [];

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    AddMenu: (state, action: PayloadAction<IMenu>) => {
      state.push(action.payload);
      return state;
    },
    UpdateMenu: (state, action: PayloadAction<IMenu>) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = {
          ...state[index],
          title: action.payload.title,
        };
        return state;
      }
    },
    PutMenu: (state, action: PayloadAction<IMenu>) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = {
          ...state[index],
          title: action.payload.title,
        };
        return state;
      } else {
        state.push(action.payload);
        return state;
      }
    },
    DeleteMenu: (state, action: PayloadAction<IMenu>) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetMenu: (state, action: PayloadAction<IMenu[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { AddMenu, UpdateMenu, DeleteMenu, PutMenu, SetMenu } = MenuSlice.actions;

export const GetMenu = (state: RootState) => state.menu;
export default MenuSlice.reducer;
