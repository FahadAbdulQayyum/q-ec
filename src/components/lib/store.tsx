"use client"
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer, // Ensure `counter` is registered here
            counter: counterReducer, // Ensure `counter` is registered here
            product: productReducer, // Ensure `counter` is registered here
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
