import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import type { Address } from './invoicesSlice';

type EditItemPropertyPayload<T> = {
  index: number;
  newValue: T;
};

type FormItem = {
  name: string;
  quantity: string;
  price: string;
};

export type FormItemsArray = FormItem[];

export type ValidationErrors = {
  blankFields: boolean;
  noItems: boolean;
};

interface FormValidationState {
  active: boolean;
  errors: ValidationErrors;
};

interface FormValuesState {
  senderAddress: Address;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  issueDate: string;
  paymentTerms: number;
  description: string;
  items: FormItemsArray;
};

interface FormState {
  validation: FormValidationState;
  values: FormValuesState;
};

const initialState: FormState = {
  validation: {
    active: false,
    errors: {
      blankFields: false,
      noItems: false,
    }
  },
  values: {
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
    items: [],
  }
};

export const invoiceFormSlice = createSlice({
  name: 'invoiceForm',
  initialState,
  reducers: {
    resetForm: () => initialState,
    setValidationActive: (
      state: FormState,
      action: PayloadAction<boolean>
    ) => {
      state.validation.active = action.payload;
    },
    setValidationBlankFieldsError: (
      state: FormState,
      action: PayloadAction<boolean>
    ) => {
      state.validation.errors.blankFields = action.payload;
    },
    setValidationNoItemsError: (
      state: FormState,
      action: PayloadAction<boolean>
    ) => {
      state.validation.errors.noItems = action.payload;
    },
    setSenderStreetAddress: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.senderAddress.street = action.payload;
    },
    setSenderCity: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.senderAddress.city = action.payload;
    },
    setSenderPostCode: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.senderAddress.postCode = action.payload;
    },
    setSenderCountry: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.senderAddress.country = action.payload;
    },
    setClientName: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.clientName = action.payload;
    },
    setClientEmail: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.clientEmail = action.payload;
    },
    setClientStreetAddress: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.clientAddress.street = action.payload;
    },
    setClientCity: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.clientAddress.city = action.payload;
    },
    setClientPostCode: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.clientAddress.postCode = action.payload;
    },
    setClientCountry: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.clientAddress.country = action.payload;
    },
    setIssueDate: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.issueDate = action.payload;
    },
    setPaymentTerms: (
      state: FormState,
      action: PayloadAction<number>
    ) => {
      state.values.paymentTerms = action.payload;
    },
    setDescription: (
      state: FormState,
      action: PayloadAction<string>
    ) => {
      state.values.description = action.payload;
    },
    addNewItem: (
      state: FormState
    ) => {
      const newItemObject: FormItem = {
        name: '',
        quantity: '1',
        price: '0.00'
      };

      state.values.items.push(newItemObject);
    },
    clearItems: (
      state: FormState
    ) => {
      state.values.items = [];
    },
    deleteItemByIndex: (
      state: FormState,
      action: PayloadAction<number>
    ) => {
      state.values.items.splice(action.payload, 1);
    },
    setItemNameByIndex: (
      state: FormState,
      action: PayloadAction<EditItemPropertyPayload<string>>
    ) => {
      const { index, newValue } = action.payload;

      state.values.items[index].name = newValue;
    },
    setItemQuantityByIndex: (
      state: FormState,
      action: PayloadAction<EditItemPropertyPayload<string>>
    ) => {
      const { index, newValue } = action.payload;

      state.values.items[index].quantity = newValue;
    },
    setItemPriceByIndex: (
      state: FormState,
      action: PayloadAction<EditItemPropertyPayload<string>>
    ) => {
      const { index, newValue } = action.payload;

      state.values.items[index].price = newValue;
    }
  }
});

export const {
  resetForm,
  setValidationActive,
  setValidationBlankFieldsError,
  setValidationNoItemsError,
  setSenderStreetAddress,
  setSenderCity,
  setSenderPostCode,
  setSenderCountry,
  setClientName,
  setClientEmail,
  setClientStreetAddress,
  setClientCity,
  setClientPostCode,
  setClientCountry,
  setIssueDate,
  setPaymentTerms,
  setDescription,
  addNewItem,
  clearItems,
  deleteItemByIndex,
  setItemNameByIndex,
  setItemQuantityByIndex,
  setItemPriceByIndex
} = invoiceFormSlice.actions;

export const selectValidationActive = (state: RootState) =>
  state.invoiceForm.validation.active;
export const selectValidationErrors = (state: RootState) =>
  state.invoiceForm.validation.errors;

export const selectSenderStreetAddress = (state: RootState) =>
  state.invoiceForm.values.senderAddress.street;
export const selectSenderCity = (state: RootState) =>
  state.invoiceForm.values.senderAddress.city;
export const selectSenderPostCode = (state: RootState) =>
  state.invoiceForm.values.senderAddress.postCode;
export const selectSenderCountry = (state: RootState) =>
  state.invoiceForm.values.senderAddress.country;

export const selectClientName = (state: RootState) =>
  state.invoiceForm.values.clientName;
export const selectClientEmail = (state: RootState) =>
  state.invoiceForm.values.clientEmail;
export const selectClientStreetAddress = (state: RootState) =>
  state.invoiceForm.values.clientAddress.street;
export const selectClientCity = (state: RootState) =>
  state.invoiceForm.values.clientAddress.city;
export const selectClientPostCode = (state: RootState) =>
  state.invoiceForm.values.clientAddress.postCode;
export const selectClientCountry = (state: RootState) =>
  state.invoiceForm.values.clientAddress.country;

export const selectIssueDate = (state: RootState) =>
  state.invoiceForm.values.issueDate;
export const selectPaymentTerms = (state: RootState) =>
  state.invoiceForm.values.paymentTerms;
export const selectDescription = (state: RootState) =>
  state.invoiceForm.values.description;

export const selectItems = (state: RootState) =>
  state.invoiceForm.values.items;
export const selectItemByIndex = (state: RootState, i: number) =>
  state.invoiceForm.values.items[i];

export const selectItemNameByIndex = (state: RootState, i: number) =>
  state.invoiceForm.values.items[i].name;
export const selectItemQuantityByIndex = (state: RootState, i: number) =>
  state.invoiceForm.values.items[i].quantity;
export const selectItemPriceByIndex = (state: RootState, i: number) =>
  state.invoiceForm.values.items[i].price;

export default invoiceFormSlice.reducer;