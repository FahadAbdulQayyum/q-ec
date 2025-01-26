"use client";
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';
import serviceReducer from './features/service/serviceSlice';
import locationReducer from './features/location/locationSlice';
// import dynamicApiCallReducer from './features/dynamicApiCall/dynamicAPISlice';
import userInfoReducer, { UserInfoState } from './features/userInfo/userInfoSlice';
import { loadState, saveState } from './features/localStorage';

// Load persisted state from localStorage
const preloadedState = loadState()
    || {
    // cart: { /* default cart state */ },
    // counter: { /* default counter state */ },
    // location: { /* default location state */ },
    // product: { products: [] },
    // service: { /* default service state */ },
    // dynamicApiCall: { /* default API call state */ },
    userInfo: {
        userInfo: null,
        userInfos: [],
        userInfoFiltered: [],
        loading: false,
        error: null,
    } as UserInfoState,
}

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            cart: cartReducer,
            counter: counterReducer,
            location: locationReducer,
            product: productReducer,
            service: serviceReducer,
            // dynamicApiCall: dynamicApiCallReducer,
            userInfo: userInfoReducer,
        },
        preloadedState, // Initialize store with persisted state
    });

    // Save the state to localStorage whenever it changes
    store.subscribe(() => {
        saveState({
            cart: store.getState().cart,
            counter: store.getState().counter,
            location: store.getState().location,
            product: store.getState().product,
            service: store.getState().service,
            // dynamicApiCall: store.getState().dynamicApiCall,
            userInfo: store.getState().userInfo, // Persist userInfo state
        });
    });

    return store;
};

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
