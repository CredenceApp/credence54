import { configureStore } from "@reduxjs/toolkit";
import apiSlice from './context/apiSlice'
import authReducer from './context/authSlice';
import TransactionReducer from './context/transactionslice';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] :apiSlice.reducer,
        auth: authReducer,
        userTransaction: TransactionReducer,

    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export default store;