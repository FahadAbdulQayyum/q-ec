"use client";
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@/sanity/lib/client';

interface Service {
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

interface ServiceState {
    service: Service | null;
    services: Service[];
    loading: boolean;
    error: string | null;
}

const initialState: ServiceState = {
    service: null,
    services: [],
    loading: false,
    error: null,
};

interface FetchedService {
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
    // ...other properties if needed...
}

export const fetchServices = createAsyncThunk('service/fetchServices', async () => {
    console.log('Fetching services...');
    const data = await client.fetch(`
        *[_type == 'service']{
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
    // return data.map((item: FetchedService): Service => ({
    //     id: item._id,
    //     name: item.name,
    // }));

    return data;
});

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        initializeService: (state, action: PayloadAction<Service>) => {
            state.service = action.payload;
        },
        setServiceName: (state, action: PayloadAction<string>) => {
            if (state.service) {
                state.service.name = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServices.fulfilled, (state, action: PayloadAction<Service[]>) => {
                console.log('Services fetched successfully:', action.payload);
                state.services = action.payload;
                state.loading = false;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                console.error('Failed to fetch service:', action.error.message);
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { initializeService, setServiceName } = serviceSlice.actions;
export default serviceSlice.reducer;
export type { Service };