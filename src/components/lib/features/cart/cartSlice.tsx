"use client"
import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit';
// import { AppStore } from '../../store';

export interface ServiceType {
    _id: string,
    name: string,
    variation: string,
    city_available: string[],
    price: number,
    currently_offered: boolean,
    pic: string
}

interface CartState {
    obj: {
        productName: ServiceType[];
    }
}

const initialState: CartState = {
    obj: { productName: [] }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushCart: (state, action) => {
            state.obj.productName.push(action.payload);
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
export const { pushCart, decrement } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;