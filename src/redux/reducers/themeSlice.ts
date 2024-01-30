import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Theme {
  mode: string;
}

const initialState: Theme = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.mode === 'light' ? (state.mode = 'dark') : (state.mode = 'light');
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.mode;
export default themeSlice.reducer;
