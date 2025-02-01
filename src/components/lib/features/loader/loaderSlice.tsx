import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
    loading: boolean;
}

const initialState: LoadingState = {
    loading: false, // Default to false
};

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload; // Set loading to true or false
        },
    },
});

// Export action
export const { setLoading } = loadingSlice.actions;

// Export reducer
export default loadingSlice.reducer;
