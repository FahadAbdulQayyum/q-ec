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
















// "use client";

// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { client } from "@/sanity/lib/client";

// // Interfaces
// interface SignUp {
//     _type: string;
//     email: string;
//     firstname: string;
// }

// interface DynamicAPI {
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
// }

// interface DynamicAPIState {
//     dynamicAPI: DynamicAPI | null;
//     dynamicAPIs: DynamicAPI[];
//     dynamicAPIFiltered: DynamicAPI[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: DynamicAPIState = {
//     dynamicAPI: null,
//     dynamicAPIs: [],
//     dynamicAPIFiltered: [],
//     loading: false,
//     error: null,
// };

// // Thunks
// export const fetchApiResultt = createAsyncThunk(
//     "dynamicAPI/fetchDynamicAPIs",
//     async ({
//         collectionType,
//         specificFields,
//     }: {
//         collectionType: string;
//         specificFields: string[];
//     }) => {
//         const data = await client.fetch(`
//       *[_type == '${collectionType}']{
//         ${specificFields.join(",")}
//       }
//     `);
//         return data as DynamicAPI[]; // Ensure return type matches the array of DynamicAPI
//     }
// );

// export const fetchApiResult = createAsyncThunk(
//     "dynamicAPI/fetchDynamicAPIs",
//     async ({
//         collectionType,
//         email,
//         firstname,
//     }: {
//         collectionType: string;
//         email: string;
//         firstname: string;
//     }) => {
//         const data = await client.create({
//             _type: collectionType,
//             email,
//             firstname,
//         });
//         return data as SignUp; // Explicitly type the return value
//     }
// );

// // Slice
// const dynamicAPISlice = createSlice({
//     name: "dynamicApi",
//     initialState,
//     reducers: {
//         initializeDynamicAPI: (state, action: PayloadAction<DynamicAPI>) => {
//             state.dynamicAPI = action.payload;
//         },
//         searchDynamicAPI: (state, action: PayloadAction<string>) => {
//             const searchQuery = action.payload.toLowerCase().trim();

//             state.dynamicAPIFiltered = searchQuery
//                 ? state.dynamicAPIs.filter((dynamicAPI) =>
//                     dynamicAPI.name.toLowerCase().includes(searchQuery)
//                 )
//                 : state.dynamicAPIs; // Reset if the query is empty
//         },
//         setDynamicAPIName: (state, action: PayloadAction<string>) => {
//             if (state.dynamicAPI) {
//                 state.dynamicAPI.name = action.payload;
//             }
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchApiResultt.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchApiResultt.fulfilled, (state, action: PayloadAction<DynamicAPI[]>) => {
//                 state.dynamicAPIs = action.payload;
//                 state.dynamicAPIFiltered = action.payload; // Default to full list
//                 state.loading = false;
//             })
//             .addCase(fetchApiResultt.rejected, (state, action) => {
//                 console.error("Failed to fetch dynamicAPIs:", action.error.message);
//                 state.loading = false;
//                 state.error = action.error.message || "Failed to fetch APIs";
//             })
//             .addCase(fetchApiResult.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchApiResult.fulfilled, (state, action: PayloadAction<SignUp>) => {
//                 console.log("SignUp data created successfully:", action.payload);
//                 state.loading = false;
//             })
//             .addCase(fetchApiResult.rejected, (state, action) => {
//                 console.error("Failed to create SignUp:", action.error.message);
//                 state.loading = false;
//                 state.error = action.error.message || "Failed to create SignUp";
//             });
//     },
// });

// // Exports
// export const { initializeDynamicAPI, searchDynamicAPI, setDynamicAPIName } =
//     dynamicAPISlice.actions;

// export default dynamicAPISlice.reducer;
// export type { DynamicAPI, SignUp };

















// // "use client";
// // import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// // import { client } from '@/sanity/lib/client';

// // interface SignUp {
// //     _type: string,
// //     email: string,
// //     firstname: string
// // }

// // interface DynamicAPI {
// //     _id: string;
// //     name: string;
// //     variation: string;
// //     city_available: string;
// //     price: number;
// //     currently_offered: boolean;
// //     pic: {
// //         asset: {
// //             _ref: string;
// //         };
// //     };
// // }

// // interface DynamicAPIState {
// //     dynamicAPI: DynamicAPI | null;
// //     dynamicAPIs: DynamicAPI[];
// //     dynamicAPIFiltered: DynamicAPI[];
// //     loading: boolean;
// //     error: string | null;
// // }

// // const initialState: DynamicAPIState = {
// //     dynamicAPI: null,
// //     dynamicAPIs: [],
// //     dynamicAPIFiltered: [],
// //     loading: false,
// //     error: null,
// // };

// // interface FetchedDynamicAPI {
// //     _id: string;
// //     name: string;
// //     variation: string;
// //     city_available: string;
// //     price: number;
// //     currently_offered: boolean;
// //     pic: {
// //         asset: {
// //             _ref: string;
// //         };
// //     };
// //     // ...other properties if needed...
// // }

// // // export const fetchApiResultt = createAsyncThunk('dynamicAPI/fetchDynamicAPIs', async (collectionType, ...specificFields) => {
// // //     const data = await client.fetch(`
// // //         *[_type == '${collectionType}']{
// // //             ${specificFields}
// // //         }
// // // `);

// // //     return data;
// // // });

// // export const fetchApiResult = createAsyncThunk('dynamicAPI/fetchDynamicAPIs', async ({ collectionType, email, firstname }: { collectionType: string, email: string, firstname: string }) => {
// //     console.log('....calling....')
// //     const data = await client.create({
// //         _type: collectionType,
// //         email: email,
// //         firstname: firstname,

// //     });

// //     // return data as SignUp[];
// //     return data;
// // });

// // const dynamicAPISlice = createSlice({
// //     name: 'dynamicApi',
// //     initialState,
// //     reducers: {
// //         initializeDynamicAPI: (state, action: PayloadAction<DynamicAPI>) => {
// //             state.dynamicAPI = action.payload;
// //         },
// //         searchDynamicAPI: (state, action: PayloadAction<string>) => {
// //             // fetchDynamicAPIs.fulfilled;
// //             // state.dynamicAPIs = state.dynamicAPIs.filter(dynamicAPI =>
// //             //     // action.payload ? dynamicAPI.name.includes(action.payload) : ''
// //             //     dynamicAPI.name.includes(action.payload)
// //             // );
// //             // console.log("...====...", action.payload, state.dynamicAPIs)

// //             const searchQuery = action.payload.toLowerCase().trim(); // Clean up search input

// //             // If the search query is empty, reset to the original state (all dynamicAPIs)
// //             if (searchQuery === '') {
// //                 // This will reset to the full list of dynamicAPIs again
// //                 return;
// //             }

// //             // Filter dynamicAPIs based on the search query
// //             const filteredDynamicAPIs = state.dynamicAPIs.filter((dynamicAPI) =>
// //                 dynamicAPI.name.toLowerCase().includes(searchQuery)
// //             );

// //             if (filteredDynamicAPIs.length === 0) {
// //                 console.log("No dynamicAPIs found for the search query:", searchQuery);
// //             }

// //             // Update the dynamicAPIs state with filtered results
// //             state.dynamicAPIs = filteredDynamicAPIs;
// //             // state.dynamicAPIFiltered = filteredDynamicAPIs;
// //             console.log("Filtered dynamicAPIs:", state.dynamicAPIFiltered);

// //             // const searchQuery = action.payload.toLowerCase().trim(); // Convert query to lowercase for case-insensitive search
// //             // state.dynamicAPIs = state.dynamicAPIs.filter((dynamicAPI) =>
// //             //     dynamicAPI.name.toLowerCase().includes(searchQuery)
// //             // );
// //             // console.log("Filtered dynamicAPIs:", state.dynamicAPIs);

// //         },
// //         setDynamicAPIName: (state, action: PayloadAction<string>) => {
// //             if (state.dynamicAPI) {
// //                 state.dynamicAPI.name = action.payload;
// //             }
// //         },
// //     },
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(fetchApiResult.pending, (state) => {
// //                 state.loading = true;
// //                 state.error = null;
// //             })
// //             .addCase(fetchApiResult.fulfilled, (state, action: PayloadAction<DynamicAPI[]>) => {
// //                 // console.log('DynamicAPIs fetched successfully:', action.payload);
// //                 state.dynamicAPIs = action.payload;
// //                 state.loading = false;
// //             })
// //             .addCase(fetchApiResult.rejected, (state, action) => {
// //                 console.error('Failed to fetch dynamicAPI:', action.error.message);
// //                 state.loading = false;
// //                 state.error = action.error.message || 'Failed to fetch products';
// //             });
// //     },
// // });

// // export const { initializeDynamicAPI, searchDynamicAPI, setDynamicAPIName } = dynamicAPISlice.actions;
// // export default dynamicAPISlice.reducer;
// // export type { DynamicAPI };