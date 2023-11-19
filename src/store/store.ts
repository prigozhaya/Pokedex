import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import metaInfoReducer from './slices/metaInfoSlice';
import loadingStatusReducer from './slices/loadingStatusSlice';
import { pokemonApi } from './api';

export const store = configureStore({
  reducer: {
    searchValue: searchReducer,
    metaInfo: metaInfoReducer,
    loadingStatus: loadingStatusReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
