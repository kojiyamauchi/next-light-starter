// @ts-nocheck
/* eslint-disable */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { fooReducer } from './Foo'
import { barReducer } from './Bar'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

const fooPersistConfig = {
  key: 'foo',
  storage: sessionStorage
}

export const store = configureStore({
  reducer: {
    fooStore: persistReducer(fooPersistConfig, fooReducer),
    barStore: barReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)
