import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue(state, { payload }) {
      state.searchValue = payload.searchInputValue;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
