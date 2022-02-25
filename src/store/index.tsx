import { configureStore } from '@reduxjs/toolkit'
import { poemListApi } from '../services/poemList'
import favoritReducer from './poemSlice'
export const store = configureStore({
  reducer: {
    poemList: favoritReducer,
    poemApi: poemListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(poemListApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch