import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface InvoiceViewState {
  deletionDialogOpen: boolean;
  drawerOpen: boolean;
};

const initialState: InvoiceViewState = {
  deletionDialogOpen: false,
  drawerOpen: false
};

export const invoiceViewSlice = createSlice({
  name: 'invoiceView',
  initialState,
  reducers: {
    setDeletionDialogOpen: (
      state: InvoiceViewState,
      action: PayloadAction<boolean>
    ) => {
      state.deletionDialogOpen = action.payload;
    },
    setDrawerOpen: (
      state: InvoiceViewState,
      action: PayloadAction<boolean>
    ) => {
      state.drawerOpen = action.payload;
    }
  }
});

export const {
  setDeletionDialogOpen,
  setDrawerOpen
} = invoiceViewSlice.actions;

export const selectDeletionDialogOpen = (state: RootState) =>
  state.invoiceView.deletionDialogOpen;
export const selectDrawerOpen = (state: RootState) =>
  state.invoiceView.drawerOpen;

export default invoiceViewSlice.reducer;