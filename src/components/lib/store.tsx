"use client"
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';
import serviceReducer from './features/service/serviceSlice';
import locationReducer from './features/location/locationSlice';
import dynamicApiCallReducer from './features/dynamicApiCall/dynamicAPISlice';


export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer, // Ensure `counter` is registered here
            counter: counterReducer, // Ensure `counter` is registered here
            location: locationReducer, // Ensure `counter` is registered here
            product: productReducer, // Ensure `counter` is registered here
            service: serviceReducer, // Ensure `counter` is registered here
            dynamicApiCall: dynamicApiCallReducer,

        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
