import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { loadState, saveState } from './localStorage';

// Load persisted state from localStorage
const persistedState = loadState();

export const store = configureStore({
    reducer: {
        product: productReducer, // Reducer for the product slice
    },
    preloadedState: persistedState, // Use persisted state if available
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Save state to localStorage whenever it changes
store.subscribe(() => {
    saveState({
        product: store.getState().product, // Save only the product slice
    });
});









// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();

// export const store = configureStore({
//     reducer: {
//         product: productReducer,
//     },
//     preloadedState: persistedState, // Load state from localStorage
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Save the state to localStorage whenever it changes
// store.subscribe(() => {
//     saveState({
//         product: store.getState().product, // Save only the product slice
//     });
// });
