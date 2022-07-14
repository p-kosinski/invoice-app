import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type anyArray = any[];

export interface LoadingState {
  active: boolean;
  error: boolean;
};

interface InvoicesState {
  loading: LoadingState;
  data: anyArray;
};

const initialState: InvoicesState = {
  loading: {
    active: false,
    error: false,
  },
  data: [],
};

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setLoadingActive: (state: InvoicesState, action: PayloadAction<boolean>) => {
      state.loading.active = action.payload;
    },
    setLoadingError: (state: InvoicesState, action: PayloadAction<boolean>) => {
      state.loading.error = action.payload;
    },
    setData: (state: InvoicesState, action: PayloadAction<anyArray>) => {
      state.data = action.payload;
    }
  }
});

export const {
  setLoadingActive,
  setLoadingError,
  setData
} = invoicesSlice.actions;

export const selectInvoicesData = (state: RootState) => state.invoices.data;
export const selectInvoicesLoading = (state: RootState) => state.invoices.loading;

export default invoicesSlice.reducer;