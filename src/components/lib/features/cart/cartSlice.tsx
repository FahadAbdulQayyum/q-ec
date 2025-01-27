"use client"
import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit';
// import { AppStore } from '../../store';

export interface CartType {
    _id: string,
    name: string,
    variation: string,
    city_available: string[],
    price: number,
    currently_offered: boolean,
    pic: string,
    day?: string,
    hour?: string,
}

export interface CartState {
    obj: {
        productName: CartType[];
    },
    day: string,
    hour: string,
}

export interface WholeCartState {
    obj: {
        productName: CartType[];
    },
    day: string,
    hour: string,
}

const initialState: CartState = {
    obj: { productName: [] },
    day: "",
    hour: ""
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushCart: (state, action) => {
            console.log('hehehe', action.payload)
            if (action.payload.productName) {
                console.log('you are here in productName')
                state.obj.productName.push(action.payload.productName);
            }
            if (action.payload.day) {
                console.log('you are here in day')
                state.day = action.payload.day
            }
            if (action.payload.hour) {
                console.log('you are here in hour')
                state.hour = action.payload.hour
            }

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