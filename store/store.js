// src/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import listSlice from './slices/listSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    list: listSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware) // Include the API middleware
})
