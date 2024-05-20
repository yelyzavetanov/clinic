// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import {thunk} from "redux-thunk";
// import thunk from 'redux-thunk';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
});

export default store;
