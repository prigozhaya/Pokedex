import { createSlice } from '@reduxjs/toolkit';
 
const metaInfoSlice = createSlice({
  name: 'metaInfo',
  initialState: {
    currentPage: 1,
    elementsPerPage: '30',
    pokemonsCount: 1292,
  },
  reducers: {
    setCurrentPage(state, { payload }) {
      state.currentPage = payload.currentPage;
    },
    setElementsPerPage(state, { payload }) {
      state.elementsPerPage = payload.elementsPerPage;
    },
    setPokemonsCount(state, { payload }) {
      state.pokemonsCount = payload.pokemonsCount;
    },
  },
});

export const { setCurrentPage, setElementsPerPage, setPokemonsCount } = metaInfoSlice.actions;
export default metaInfoSlice.reducer;
