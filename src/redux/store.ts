import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
import invoicesReducer from './invoicesSlice';
import invoicesViewReducer from './invoicesViewSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    invoices: invoicesReducer,
    invoicesView: invoicesViewReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;