// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

import { barReducer } from './Bar'
import { fooReducer } from './Foo'

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
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  }
})

export const persistor = persistStore(store)
