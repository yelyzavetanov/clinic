import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
});

window.store = store;

export default store;
