"use client"
// import { UserInfo, UserInfoState } from './userInfo/userInfoSlice';
import { UserInfoState } from './userInfo/userInfoSlice';
import { CartState } from './cart/cartSlice';
import { CounterState } from './counter/counterSlice';
import { LocationState } from './location/locationSlice';
import { ProductState } from './product/productSlice';
import { ServiceState } from './service/serviceSlice';
export const loadState = () => {
    try {
        if (typeof window === "undefined") return undefined; // Ensure we're in a browser
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined; // Return undefined if no state is saved
        return JSON.parse(serializedState) as {
            // userInfo: { userInfo: UserInfo | null; userInfos: UserInfo[]; userInfoFiltered: UserInfo[]; };
            // userInfo: { userInfo: UserInfo };
            userInfo: UserInfoState;
            cart: CartState;
            counter: CounterState;
            location: LocationState;
            product: ProductState;
            service: ServiceState;
        }; // Parse state
    } catch (err) {
        console.error('Could not load state:', err);
        return undefined;
    }
}
export const saveState = (state: {
    // userInfo: { userInfo: UserInfo | null; userInfos: UserInfo[]; userInfoFiltered: UserInfo[]; };
    // userInfo: { userInfo: UserInfo };
    userInfo: UserInfoState;
    cart: CartState;
    counter: CounterState;
    location: LocationState;
    product: ProductState;
    service: ServiceState;
}) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState); // Save state in localStorage
    } catch (err) {
        console.error('Could not save state:', err);
    }
};