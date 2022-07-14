import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type CurrentTheme = 'light' | 'dark';

export interface ThemeState {
  current: CurrentTheme;
};

const initialState: ThemeState = {
  current: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeCurrentTheme: (state: ThemeState, action: PayloadAction<CurrentTheme>) => {
      state.current = action.payload;
    }
  }
});

export const { changeCurrentTheme } = themeSlice.actions;

export const selectCurrentTheme= (state: RootState) => state.theme.current;

export default themeSlice.reducer;