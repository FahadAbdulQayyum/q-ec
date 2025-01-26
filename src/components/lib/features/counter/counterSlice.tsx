"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppStore } from '../../store';

export interface CounterState {
    value: number;
    obj: {
        productName: string[];
    }
}

const initialState: CounterState = {
    value: 0,
    obj: { productName: [] }
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initializeCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        increment: (state, action) => {
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
export const { initializeCount, increment, incrementValue, decrementValue, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;