import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  current: ThemeMode;
};

const initialState: ThemeState = {
  current: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentTheme: (state: ThemeState, action: PayloadAction<ThemeMode>) => {
      state.current = action.payload;
    }
  }
});

export const { setCurrentTheme } = themeSlice.actions;

export const selectCurrentTheme = (state: RootState) => state.theme.current;

export default themeSlice.reducer;