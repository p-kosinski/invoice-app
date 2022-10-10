import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { StatusFiltersArray } from './invoicesViewSlice';

import { api } from '../settings';
import { assertNotUndefined } from '../utils/typeUtils';

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

export type ItemsArray = Item[];

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
  items: ItemsArray,
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

export const selectInvoiceCreationDateById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.createdAt;
};

export const selectInvoicePaymentDueById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.paymentDue;
};

export const selectInvoiceDescriptionById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.description;
};

export const selectInvoiceClientNameById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.clientName;
};

export const selectInvoiceClientEmailById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.clientEmail;
};

export const selectInvoiceStatusById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.status;
};

export const selectInvoiceSenderAddressById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.senderAddress;
};

export const selectInvoiceClientAddressById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.clientAddress;
};

export const selectInvoiceItemsById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.items;
};

export const selectInvoiceTotalById = (state: RootState, id: string) => {
  const invoiceWithMatchingId =  state.invoices.data.find(invoice => invoice.id === id);
  
  assertNotUndefined(invoiceWithMatchingId);
  return invoiceWithMatchingId.total;
};

export const selectInvoicesFilteredByStatus = (state: RootState, statusFilters: StatusFiltersArray) => {
  if(!statusFilters.length) {
    return state.invoices.data;
  } else {
    let emptyArray: any[] = [];
    let filteredInvoices: InvoicesData = [];

    statusFilters.forEach((statusFilter, i) => {
      const invoicesWithSelectedStatus = state.invoices.data.filter(invoice => invoice.status === statusFilter);
  
      i === 0 ? filteredInvoices = emptyArray.concat(invoicesWithSelectedStatus)
              : filteredInvoices = filteredInvoices.concat(invoicesWithSelectedStatus)
    });
  
    return filteredInvoices;
  }
};

export default invoicesSlice.reducer;