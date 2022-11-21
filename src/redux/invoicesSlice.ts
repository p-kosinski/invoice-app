import {
  createSlice,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
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
  senderAddress: Address;
  clientAddress: Address;
  items: ItemsArray;
  total: number;
};

export type InvoicesData = Invoice[];

export interface ThunkStatusState {
  active: boolean;
  error: boolean;
};

export interface ThunkStatusWithSuccessState extends ThunkStatusState {
  success: boolean;
};

interface InvoicesState {
  loading: ThunkStatusState;
  statusChanging: ThunkStatusState;
  deleting: ThunkStatusState;
  saving: ThunkStatusWithSuccessState;
  data: InvoicesData;
};

const initialState: InvoicesState = {
  loading: {
    active: false,
    error: false,
  },
  statusChanging: {
    active: false,
    error: false,
  },
  deleting: {
    active: false,
    error: false,
  },
  saving: {
    active: false,
    error: false,
    success: false,
  },
  data: []
};

export const fetchInvoicesData = createAsyncThunk(
  'invoices/fetchInvoicesData',
  async () => {
    return fetch(`${api.url}/${api.endpoints.invoices}`).then((res) =>
      res.json()
    )
  }
);

export type ChangeInvoiceStatusArgs = {
  id: string;
  newStatus: Status;
};

export const changeInvoiceStatus = createAsyncThunk(
  'invoices/changeInvoiceStatus',
  async (args: ChangeInvoiceStatusArgs) => {
    const { id, newStatus } = args;

    return fetch(`${api.url}/${api.endpoints.invoices}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        status: newStatus,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
);

export const deleteInvoice = createAsyncThunk(
  'invoices/deleteInvoice',
  async (id: string) => {
    return fetch(`${api.url}/${api.endpoints.invoices}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
);

export const saveInvoice = createAsyncThunk(
  'invoices/saveInvoice',
  async (data: Invoice) => {
    return fetch(`${api.url}/${api.endpoints.invoices}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
  }
);

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoiceSavingSuccess: (
      state: InvoicesState,
      action: PayloadAction<boolean>
    ) => {
      state.saving.success = action.payload;
    },
  },
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
    }),
    builder.addCase(changeInvoiceStatus.pending, (state, action) => {
      state.statusChanging.active = true;
      state.statusChanging.error = false;
    }),
    builder.addCase(changeInvoiceStatus.fulfilled, (state, action) => {
      const changedInvoiceId = action.meta.arg.id;
      const newInvoiceStatus = action.meta.arg.newStatus;

      const changedInvoice = state.data.find(invoice => invoice.id === changedInvoiceId);
      
      assertNotUndefined(changedInvoice);
      
      const changedInvoiceIndex = state.data.indexOf(changedInvoice);

      state.data[changedInvoiceIndex].status = newInvoiceStatus;
      state.statusChanging.active = false;
      state.statusChanging.error = false;
    }),
    builder.addCase(changeInvoiceStatus.rejected, (state, action) => {
      state.statusChanging.active = false;
      state.statusChanging.error = true;
    }),
    builder.addCase(deleteInvoice.pending, (state, action) => {
      state.deleting.active = true;
      state.deleting.error = false;
    }),
    builder.addCase(deleteInvoice.fulfilled, (state, action) => {
      const deletedInvoiceIndex = state.data.findIndex((invoice) => invoice.id === action.meta.arg);

      state.data.splice(deletedInvoiceIndex, 1);
      state.deleting.active = false;
      state.deleting.error = false;
    }),
    builder.addCase(deleteInvoice.rejected, (state, action) => {
      state.deleting.active = false;
      state.deleting.error = true;
    })
    builder.addCase(saveInvoice.pending, (state, action) => {
      state.saving.active = true;
      state.saving.error = false;
      state.saving.success = false;
    }),
    builder.addCase(saveInvoice.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.saving.active = false;
      state.saving.error = false;
      state.saving.success = true;
    }),
    builder.addCase(saveInvoice.rejected, (state, action) => {
      state.saving.active = false;
      state.saving.error = true;
      state.saving.success = false;
    })
  }
});

export const { setInvoiceSavingSuccess } = invoicesSlice.actions;

export const selectInvoicesData = (state: RootState) => state.invoices.data;

export const selectInvoicesLoadingState = (state: RootState) => state.invoices.loading;
export const selectInvoiceStatusChangingState = (state: RootState) => state.invoices.statusChanging;
export const selectInvoiceDeletionState = (state: RootState) => state.invoices.deleting;

export const selectInvoiceSavingState = (state: RootState) => state.invoices.saving;
export const selectInvoiceSavingSuccess = (state: RootState) => state.invoices.saving.success;

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