import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductType = {
    id: string;
    status: string;
    color: string;
    desc: string;
    category: string;
    image: string;
    title: string;
    price: string;
};

// Define the initial state for the product slice
const initialState: { products: ProductType[] } = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Add a product to the array
        addProduct: (state, action: PayloadAction<ProductType>) => {
            state.products.push(action.payload);
        },

        // Remove a product by ID
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },

        // Update a product by ID
        updateProduct: (state, action: PayloadAction<ProductType>) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
    },
});

export const { addProduct, removeProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;








// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type ProductType = {
//     id: string;
//     status: string;
//     color: string;
//     desc: string;
//     category: string;
//     image: string;
//     title: string;
//     price: string;
// }

// // Define the initial state for the product slice
// const initialState: { products: ProductType[] } = {
//     products: [],
// };

// // Example slice
// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         // Add a product to the array
//         addProduct: (state, action: PayloadAction<ProductType>) => {
//             state.products.push(action.payload);
//         },

//         // Remove a product by ID
//         removeProduct: (state, action: PayloadAction<string>) => {
//             state.products = state.products.filter((product) => product.id !== action.payload);
//         },

//         // Update a product by ID
//         updateProduct: (state, action: PayloadAction<ProductType>) => {
//             const index = state.products.findIndex((product) => product.id === action.payload.id);
//             if (index !== -1) {
//                 state.products[index] = action.payload;
//             }
//         },
//     },
// });

// export const { addProduct, removeProduct, updateProduct } = productSlice.actions;
// export default productSlice.reducer;





// // // src/store/productSlice.ts
// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // interface Product {
// //     id: string;
// //     name: string;
// //     price: number;
// //     quantity: number;
// // }

// // export interface ProductState {
// //     products: Product[];
// // }

// // const initialState: ProductState = {
// //     products: [],
// // };

// // export const productSlice = createSlice({
// //     name: 'product',
// //     initialState,
// //     reducers: {
// //         addProduct: (state, action: PayloadAction<Product>) => {
// //             state.products.push(action.payload);
// //         },
// //         removeProduct: (state, action: PayloadAction<string>) => {
// //             state.products = state.products.filter(
// //                 (product) => product.id !== action.payload
// //             );
// //         },
// //     },
// // });

// // export const { addProduct, removeProduct } = productSlice.actions;
// // export default productSlice.reducer;  // Make sure you're exporting the reducer