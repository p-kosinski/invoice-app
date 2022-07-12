import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
import invoicesReducer from './invoicesSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    invoices: invoicesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;