"use client"
import {
    createSlice,
} from '@reduxjs/toolkit';

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
                state.obj.productName.push(action.payload.productName);
            }
            if (action.payload.day) {
                state.day = action.payload.day
            }
            if (action.payload.hour) {
                state.hour = action.payload.hour
            }

        },
        decrement: (state, action) => {
            state.obj.productName = []
            state.obj.productName.push(...action.payload)
        },
    },
});

// Export the actions
export const { pushCart, decrement } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;