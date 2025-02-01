"use client";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/sanity/lib/client";

// Interfaces
interface SignUp {
    _type: string;
    email: string;
    firstname: string;
}

interface DynamicAPI {
    _id: string;
    name: string;
    variation: string;
    city_available: string;
    price: number;
    currently_offered: boolean;
    pic: {
        asset: {
            _ref: string;
        };
    };
}

interface DynamicAPIState {
    dynamicAPI: DynamicAPI | null;
    dynamicAPIs: DynamicAPI[];
    dynamicAPIFiltered: DynamicAPI[];
    loading: boolean;
    error: string | null;
}

const initialState: DynamicAPIState = {
    dynamicAPI: null,
    dynamicAPIs: [],
    dynamicAPIFiltered: [],
    loading: false,
    error: null,
};

// Thunks
export const fetchDynamicAPIs = createAsyncThunk(
    "dynamicAPI/fetchDynamicAPIs",
    async ({
        collectionType,
        specificFields,
    }: {
        collectionType: string;
        specificFields: string[];
    }) => {
        const data = await client.fetch(`
      *[_type == '${collectionType}']{
        ${specificFields.join(",")}
      }
    `);
        return data as DynamicAPI[];
    }
);

export const createSignUp = createAsyncThunk(
    "dynamicAPI/createSignUp",
    async ({
        collectionType,
        email,
        firstname,
    }: {
        collectionType: string;
        email: string;
        firstname: string;
    }) => {
        const data = await client.create({
            _type: collectionType,
            email,
            firstname,
        });
        return data as SignUp; // Explicitly type the return value
    }
);

// Slice
const dynamicAPISlice = createSlice({
    name: "dynamicApi",
    initialState,
    reducers: {
        initializeDynamicAPI: (state, action: PayloadAction<DynamicAPI>) => {
            state.dynamicAPI = action.payload;
        },
        searchDynamicAPI: (state, action: PayloadAction<string>) => {
            const searchQuery = action.payload.toLowerCase().trim();

            state.dynamicAPIFiltered = searchQuery
                ? state.dynamicAPIs.filter((dynamicAPI) =>
                    dynamicAPI.name.toLowerCase().includes(searchQuery)
                )
                : state.dynamicAPIs; // Reset if the query is empty
        },
        setDynamicAPIName: (state, action: PayloadAction<string>) => {
            if (state.dynamicAPI) {
                state.dynamicAPI.name = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        // For fetchDynamicAPIs
        builder
            .addCase(fetchDynamicAPIs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDynamicAPIs.fulfilled, (state, action: PayloadAction<DynamicAPI[]>) => {
                state.dynamicAPIs = action.payload;
                state.dynamicAPIFiltered = action.payload; // Default to full list
                state.loading = false;
            })
            .addCase(fetchDynamicAPIs.rejected, (state, action) => {
                console.error("Failed to fetch dynamicAPIs:", action.error.message);
                state.loading = false;
                state.error = action.error.message || "Failed to fetch APIs";
            });

        // For createSignUp
        builder
            .addCase(createSignUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createSignUp.fulfilled, (state, action: PayloadAction<SignUp>) => {
                console.log("SignUp data created successfully:", action.payload);
                state.loading = false;
            })
            .addCase(createSignUp.rejected, (state, action) => {
                console.error("Failed to create SignUp:", action.error.message);
                state.loading = false;
                state.error = action.error.message || "Failed to create SignUp";
            });
    },
});

// Exports
export const { initializeDynamicAPI, searchDynamicAPI, setDynamicAPIName } =
    dynamicAPISlice.actions;

export default dynamicAPISlice.reducer;
export type { DynamicAPI, SignUp };