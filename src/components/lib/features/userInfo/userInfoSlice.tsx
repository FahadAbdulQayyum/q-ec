"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {

    email: string;
    firstname: string;
    lastname: string;
    country: string;
    dob: string;
    gender: string;
    signup: boolean;
    password: string;
    pic?: {
        asset: {
            _ref: string;
        };
    };
}

export interface UserInfoState {
    userInfo: UserInfo | null;
    userInfos: UserInfo[];
}

const initialState: UserInfoState = {
    userInfo: null,
    userInfos: [],
};


const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        initializeUserInfo: (state, action: PayloadAction<UserInfo>) => {
            if (state.userInfo === null) {
                state.userInfo = action.payload; // Add the new user to the existing array
            }
        },
        resetUserInfo: (state) => {
            state.userInfo = null; // Reset userInfo to null
        },
    },
});

export const { initializeUserInfo, resetUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;