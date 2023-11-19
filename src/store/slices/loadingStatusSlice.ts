import { createSlice } from '@reduxjs/toolkit';

const loadingStatusSlice = createSlice({
  name: 'loadingStatus',
  initialState: {
    catalogLoadingStatus: false,
    ditailsLoadingStatus: false,
  },
  reducers: {
    setCatalogLoadingStatus(state, { payload }) {
      state.catalogLoadingStatus = payload.catalogLoadingStatus;
    },
    setDitailsLoadingStatus(state, { payload }) {
      state.ditailsLoadingStatus = payload.ditailsLoadingStatus;
    },
  },
});

export const { setCatalogLoadingStatus, setDitailsLoadingStatus } =
  loadingStatusSlice.actions;
export default loadingStatusSlice.reducer;
