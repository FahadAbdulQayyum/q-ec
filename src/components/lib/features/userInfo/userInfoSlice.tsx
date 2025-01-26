"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { client } from '@/sanity/lib/client';

interface UserInfo {

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

interface UserInfoState {
    userInfo: UserInfo | null;
    userInfos: UserInfo[];
    userInfoFiltered: UserInfo[];
    loading: boolean;
    error: string | null;
}

const initialState: UserInfoState = {
    userInfo: null,
    userInfos: [],
    userInfoFiltered: [],
    loading: false,
    error: null,
};

// interface FetchedUserInfo {
//     _id: string;
//     name: string;
//     variation: string;
//     city_available: string;
//     price: number;
//     currently_offered: boolean;
//     pic: {
//         asset: {
//             _ref: string;
//         };
//     };
//     // ...other properties if needed...
// }


const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        initializeUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload;
        },
    },
});

export const { initializeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
export type { UserInfo };