import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface InvoiceViewState {
  deletionDialogOpen: boolean;
};

const initialState: InvoiceViewState = {
  deletionDialogOpen: false
};

export const invoicesViewSlice = createSlice({
  name: 'invoiceView',
  initialState,
  reducers: {
    setDeletionDialogOpen: (state: InvoiceViewState, action: PayloadAction<boolean>) => {
      state.deletionDialogOpen = action.payload;
    }
  }
});

export const { setDeletionDialogOpen } = invoicesViewSlice.actions;

export const selectDeletionDialogOpen = (state: RootState) => state.invoiceView.deletionDialogOpen;

export default invoicesViewSlice.reducer;