import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { api } from '../settings';

export type Status = 'draft' | 'pending' | 'paid';

export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: Status;
  senderAddress: Address,
  clientAddress: Address,
  items: Item[],
  total: number;
};

export type InvoicesData = Invoice[];

export interface LoadingState {
  active: boolean;
  error: boolean;
};

interface InvoicesState {
  loading: LoadingState;
  data: InvoicesData;
};

const initialState: InvoicesState = {
  loading: {
    active: false,
    error: false,
  },
  data: [],
};

export const fetchInvoicesData = createAsyncThunk(
  'invoices/fetchInvoicesData',
  async () => {
    return fetch(`${api.url}/${api.endpoints.invoices}`).then((res) =>
      res.json()
    )
  }
);

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInvoicesData.pending, (state, action) => {
      state.loading.active = true;
      state.loading.error = false;
    }),
    builder.addCase(fetchInvoicesData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading.active = false;
      state.loading.error = false;
    }),
    builder.addCase(fetchInvoicesData.rejected, (state, action) => {
      state.loading.active = false;
      state.loading.error = true;
    })
  }
});

export const selectInvoicesData = (state: RootState) => state.invoices.data;
export const selectInvoicesLoadingState = (state: RootState) => state.invoices.loading;

export default invoicesSlice.reducer;