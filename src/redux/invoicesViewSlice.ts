import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type StatusFilter = 'draft' | 'pending' | 'paid';
export type StatusFiltersArray = StatusFilter[];

interface InvoicesViewState {
  statusFilters: StatusFiltersArray;
  drawerOpen: boolean;
}

const initialState: InvoicesViewState = {
  statusFilters: [],
  drawerOpen: false
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
    }
  },
});

export const {
  addStatusFilter,
  removeStatusFilter,
  setDrawerOpen
} = invoicesViewSlice.actions;

export const selectStatusFilters = (state: RootState) =>
  state.invoicesView.statusFilters;
export const selectDrawerOpen = (state: RootState) =>
  state.invoicesView.drawerOpen;

export default invoicesViewSlice.reducer;
