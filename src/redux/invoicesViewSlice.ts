import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type StatusFilter = 'draft' | 'pending' | 'paid';
export type StatusFiltersArray = StatusFilter[];

interface InvoicesViewState {
  statusFilters: StatusFiltersArray;
};

const initialState: InvoicesViewState = {
  statusFilters: [],
};

export const invoicesViewSlice = createSlice({
  name: 'invoicesView',
  initialState,
  reducers: {
    addStatusFilter: (state: InvoicesViewState, action: PayloadAction<StatusFilter>) => {
      state.statusFilters.push(action.payload);
    },
    removeStatusFilter: (state: InvoicesViewState, action: PayloadAction<StatusFilter>) => {
      const newStatusFilters = state.statusFilters.filter(statusFilter => statusFilter !== action.payload);

      state.statusFilters = newStatusFilters;
    },
  }
});

export const {
  addStatusFilter,
  removeStatusFilter
} = invoicesViewSlice.actions;

export const selectStatusFilters = (state: RootState) => state.invoicesView.statusFilters;

export default invoicesViewSlice.reducer;