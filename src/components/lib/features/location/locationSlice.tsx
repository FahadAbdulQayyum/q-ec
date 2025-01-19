"use client";
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@/sanity/lib/client';

interface Location {
    id: string;
    name: string;
}

interface LocationState {
    location: Location | null;
    locations: Location[];
    loading: boolean;
    error: string | null;
}

const initialState: LocationState = {
    location: null,
    locations: [],
    loading: false,
    error: null,
};

interface FetchedLocation {
    _id: string;
    name: string;
    // ...other properties if needed...
}

export const fetchLocations = createAsyncThunk('product/fetchProducts', async () => {
    console.log('Fetching locations...');
    const data = await client.fetch(`
        *[_type == 'location']{
            _id, 
            name, 
            variation, 
            city_available, 
            price, 
            currently_offered, 
            "pic": pic.asset->url
        }
    `);
    console.log('Fetched data:', data);
    return data.map((item: FetchedLocation): Location => ({
        id: item._id,
        name: item.name,
    }));
});

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        initializeLocation: (state, action: PayloadAction<Location>) => {
            state.location = action.payload;
        },
        setLocationName: (state, action: PayloadAction<string>) => {
            if (state.location) {
                state.location.name = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLocations.fulfilled, (state, action: PayloadAction<Location[]>) => {
                console.log('Locations fetched successfully:', action.payload);
                state.locations = action.payload;
                state.loading = false;
            })
            .addCase(fetchLocations.rejected, (state, action) => {
                console.error('Failed to fetch location:', action.error.message);
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { initializeLocation, setLocationName } = locationSlice.actions;
export default locationSlice.reducer;
export type { Location };