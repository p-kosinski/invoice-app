import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type ThemeMode = 'light' | 'dark';

const initialState: ThemeMode = 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeMode: (state: ThemeMode, action: PayloadAction<ThemeMode>) => {
      state = action.payload;
    }
  }
});

export const { changeThemeMode } = themeSlice.actions;

export const selectThemeMode = (state: RootState) => state.theme;

export default themeSlice.reducer;