import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import type { Address, ItemsArray } from './invoicesSlice';

export type StatusFilter = 'draft' | 'pending' | 'paid';
export type StatusFiltersArray = StatusFilter[];

type EditItemPropertyPayload<T> = {
  index: number;
  newValue: T;
};

export interface FormState {
  senderAddress: Address;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  issueDate: string;
  paymentTerms: number;
  description: string;
  items: ItemsArray;
}

interface InvoicesViewState {
  statusFilters: StatusFiltersArray;
  drawerOpen: boolean;
  newInvoiceForm: FormState;
}

const initialState: InvoicesViewState = {
  statusFilters: [],
  drawerOpen: false,
  newInvoiceForm: {
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientName: '',
    clientEmail: '',
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    issueDate: '',
    paymentTerms: 0,
    description: '',
    items: [
      {
        name: '',
        quantity: 1,
        price: 0.0,
        total: 0.0,
      },
    ],
  },
};

export const invoicesViewSlice = createSlice({
  name: 'invoicesView',
  initialState,
  reducers: {
    addStatusFilter: (
      state: InvoicesViewState,
      action: PayloadAction<StatusFilter>
    ) => {
      state.statusFilters.push(action.payload);
    },
    removeStatusFilter: (
      state: InvoicesViewState,
      action: PayloadAction<StatusFilter>
    ) => {
      const newStatusFilters = state.statusFilters.filter(
        (statusFilter) => statusFilter !== action.payload
      );

      state.statusFilters = newStatusFilters;
    },
    setDrawerOpen: (
      state: InvoicesViewState,
      action: PayloadAction<boolean>
    ) => {
      state.drawerOpen = action.payload;
    },
    setFormSenderStreetAddress: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.senderAddress.street = action.payload;
    },
    setFormSenderCity: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.senderAddress.city = action.payload;
    },
    setFormSenderPostCode: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.senderAddress.postCode = action.payload;
    },
    setFormSenderCountry: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.senderAddress.country = action.payload;
    },
    setFormClientName: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.clientName = action.payload;
    },
    setFormClientEmail: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.clientEmail = action.payload;
    },
    setFormClientStreetAddress: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.clientAddress.street = action.payload;
    },
    setFormClientCity: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.clientAddress.city = action.payload;
    },
    setFormClientPostCode: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.clientAddress.postCode = action.payload;
    },
    setFormClientCountry: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.clientAddress.country = action.payload;
    },
    setFormIssueDate: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.issueDate = action.payload;
    },
    setFormPaymentTerms: (
      state: InvoicesViewState,
      action: PayloadAction<number>
    ) => {
      state.newInvoiceForm.paymentTerms = action.payload;
    },
    setFormDescription: (
      state: InvoicesViewState,
      action: PayloadAction<string>
    ) => {
      state.newInvoiceForm.description = action.payload;
    },
    addNewFormItem: (
      state: InvoicesViewState
    ) => {
      const newItemObject = {
        name: '',
        quantity: 1,
        price: 0.00,
        total: 0.00,
      };

      state.newInvoiceForm.items.push(newItemObject);
    },
    clearFormItems: (
      state: InvoicesViewState
    ) => {
      state.newInvoiceForm.items = [];
    },
    deleteFormItemByIndex: (
      state: InvoicesViewState,
      action: PayloadAction<number>
    ) => {
      state.newInvoiceForm.items.splice(action.payload, 1);
    },
    setFormItemNameByIndex: (
      state: InvoicesViewState,
      action: PayloadAction<EditItemPropertyPayload<string>>
    ) => {
      const { index, newValue } = action.payload;

      state.newInvoiceForm.items[index].name = newValue;
    },
    setFormItemQuantityByIndex: (
      state: InvoicesViewState,
      action: PayloadAction<EditItemPropertyPayload<number>>
    ) => {
      const { index, newValue } = action.payload;

      state.newInvoiceForm.items[index].quantity = newValue;
    },
    setFormItemPriceByIndex: (
      state: InvoicesViewState,
      action: PayloadAction<EditItemPropertyPayload<number>>
    ) => {
      const { index, newValue } = action.payload;

      state.newInvoiceForm.items[index].price = newValue;
    },
    setFormItemTotalByIndex: (
      state: InvoicesViewState,
      action: PayloadAction<EditItemPropertyPayload<number>>
    ) => {
      const { index, newValue } = action.payload;

      state.newInvoiceForm.items[index].total = newValue;
    },
  },
});

export const {
  addStatusFilter,
  removeStatusFilter,
  setDrawerOpen,
  setFormSenderStreetAddress,
  setFormSenderCity,
  setFormSenderPostCode,
  setFormSenderCountry,
  setFormClientName,
  setFormClientEmail,
  setFormClientStreetAddress,
  setFormClientCity,
  setFormClientPostCode,
  setFormClientCountry,
  setFormIssueDate,
  setFormPaymentTerms,
  setFormDescription,
  addNewFormItem,
  clearFormItems,
  deleteFormItemByIndex,
  setFormItemNameByIndex,
  setFormItemQuantityByIndex,
  setFormItemPriceByIndex,
  setFormItemTotalByIndex
} = invoicesViewSlice.actions;

export const selectStatusFilters = (state: RootState) =>
  state.invoicesView.statusFilters;
export const selectDrawerOpen = (state: RootState) =>
  state.invoicesView.drawerOpen;

export const selectFormSenderStreetAddress = (state: RootState) =>
  state.invoicesView.newInvoiceForm.senderAddress.street;
export const selectFormSenderCity = (state: RootState) =>
  state.invoicesView.newInvoiceForm.senderAddress.city;
export const selectFormSenderPostCode = (state: RootState) =>
  state.invoicesView.newInvoiceForm.senderAddress.postCode;
export const selectFormSenderCountry = (state: RootState) =>
  state.invoicesView.newInvoiceForm.senderAddress.country;

export const selectFormClientName = (state: RootState) =>
  state.invoicesView.newInvoiceForm.clientName;
export const selectFormClientEmail = (state: RootState) =>
  state.invoicesView.newInvoiceForm.clientEmail;
export const selectFormClientStreetAddress = (state: RootState) =>
  state.invoicesView.newInvoiceForm.clientAddress.street;
export const selectFormClientCity = (state: RootState) =>
  state.invoicesView.newInvoiceForm.clientAddress.city;
export const selectFormClientPostCode = (state: RootState) =>
  state.invoicesView.newInvoiceForm.clientAddress.postCode;
export const selectFormClientCountry = (state: RootState) =>
  state.invoicesView.newInvoiceForm.clientAddress.country;

export const selectFormIssueDate = (state: RootState) =>
  state.invoicesView.newInvoiceForm.issueDate;
export const selectFormPaymentTerms = (state: RootState) =>
  state.invoicesView.newInvoiceForm.paymentTerms;
export const selectFormDescription = (state: RootState) =>
  state.invoicesView.newInvoiceForm.description;

export const selectFormItems = (state: RootState) =>
  state.invoicesView.newInvoiceForm.items;
export const selectFormItemByIndex = (state: RootState, i: number) =>
  state.invoicesView.newInvoiceForm.items[i];

export const selectFormItemNameByIndex = (state: RootState, i: number) =>
  state.invoicesView.newInvoiceForm.items[i].name;
export const selectFormItemQuantityByIndex = (state: RootState, i: number) =>
  state.invoicesView.newInvoiceForm.items[i].quantity;
export const selectFormItemPriceByIndex = (state: RootState, i: number) =>
  state.invoicesView.newInvoiceForm.items[i].price;
export const selectFormItemTotalByIndex = (state: RootState, i: number) =>
  state.invoicesView.newInvoiceForm.items[i].total;

export default invoicesViewSlice.reducer;
