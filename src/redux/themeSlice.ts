import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
};

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state: ThemeState, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    }
  }
});

export const { setThemeMode } = themeSlice.actions;

export const selectThemeMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;