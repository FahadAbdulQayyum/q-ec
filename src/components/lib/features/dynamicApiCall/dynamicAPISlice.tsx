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
    serviceFiltered: Service[];
    loading: boolean;
    error: string | null;
}

const initialState: ServiceState = {
    service: null,
    services: [],
    serviceFiltered: [],
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

export const fetchApiResult = createAsyncThunk('service/fetchServices', async (collectionType, ...specificFields) => {
    const data = await client.fetch(`
        *[_type == '${collectionType}']{
            ${specificFields}
        }
`);

    return data;
});

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        initializeService: (state, action: PayloadAction<Service>) => {
            state.service = action.payload;
        },
        searchService: (state, action: PayloadAction<string>) => {
            // fetchServices.fulfilled;
            // state.services = state.services.filter(service =>
            //     // action.payload ? service.name.includes(action.payload) : ''
            //     service.name.includes(action.payload)
            // );
            // console.log("...====...", action.payload, state.services)

            const searchQuery = action.payload.toLowerCase().trim(); // Clean up search input

            // If the search query is empty, reset to the original state (all services)
            if (searchQuery === '') {
                // This will reset to the full list of services again
                return;
            }

            // Filter services based on the search query
            const filteredServices = state.services.filter((service) =>
                service.name.toLowerCase().includes(searchQuery)
            );

            if (filteredServices.length === 0) {
                console.log("No services found for the search query:", searchQuery);
            }

            // Update the services state with filtered results
            state.services = filteredServices;
            // state.serviceFiltered = filteredServices;
            console.log("Filtered services:", state.serviceFiltered);

            // const searchQuery = action.payload.toLowerCase().trim(); // Convert query to lowercase for case-insensitive search
            // state.services = state.services.filter((service) =>
            //     service.name.toLowerCase().includes(searchQuery)
            // );
            // console.log("Filtered services:", state.services);

        },
        setServiceName: (state, action: PayloadAction<string>) => {
            if (state.service) {
                state.service.name = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiResult.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApiResult.fulfilled, (state, action: PayloadAction<Service[]>) => {
                // console.log('Services fetched successfully:', action.payload);
                state.services = action.payload;
                state.loading = false;
            })
            .addCase(fetchApiResult.rejected, (state, action) => {
                console.error('Failed to fetch service:', action.error.message);
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { initializeService, searchService, setServiceName } = serviceSlice.actions;
export default serviceSlice.reducer;
export type { Service };