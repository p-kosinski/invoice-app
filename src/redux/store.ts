import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
import invoicesReducer from './invoicesSlice';
import invoicesViewReducer from './invoicesViewSlice';
import invoiceViewReducer from './invoiceViewSlice';
import invoiceFormReducer from './invoiceFormSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    invoices: invoicesReducer,
    invoicesView: invoicesViewReducer,
    invoiceView: invoiceViewReducer,
    invoiceForm: invoiceFormReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;