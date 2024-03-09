import {  configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware()
    },
  })

export default store;