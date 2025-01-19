"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppStore } from '../../store';

interface CartState {
    value: number;
    obj: {
        productName: string[];
    }
}

const initialState: CartState = {
    value: 0,
    obj: { productName: [] }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        pushCart: (state, action) => {
            state.obj.productName.push(action.payload);
        },
        incrementValue: (state) => {
            state.value += 1;
        },
        decrementValue: (state) => {
            state.value -= 1;
        },
        decrement: (state, action) => {
            console.log('action.payload...', action.payload)
            console.log('state.obj.productName...', state.obj)
            state.obj.productName = []
            state.obj.productName.push(...action.payload)
            console.log('staet.obj.productName...', state.obj.productName)
        },
    },
});

// Export the actions
export const { initializeCount, pushCart, incrementValue, decrementValue, decrement } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;