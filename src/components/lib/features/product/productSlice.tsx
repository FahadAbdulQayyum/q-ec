"use client";
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@/sanity/lib/client';

interface Product {
    id: string;
    name: string;
}

export interface ProductState {
    product: Product | null;
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    product: null,
    products: [],
    loading: false,
    error: null,
};

interface FetchedProduct {
    _id: string;
    post_title: string;
    // ...other properties if needed...
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    console.log('Fetching products...');
    const data = await client.fetch(`
        *[_type == 'post']{_id, post_title, post_description, post_image}
    `);
    console.log('Fetched data:', data);
    return data.map((item: FetchedProduct): Product => ({
        id: item._id,
        name: item.post_title,
    }));
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        initializeProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },
        setProductName: (state, action: PayloadAction<string>) => {
            if (state.product) {
                state.product.name = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                // console.log('Products fetched successfully:', action.payload);
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.error('Failed to fetch products:', action.error.message);
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;
export type { Product };