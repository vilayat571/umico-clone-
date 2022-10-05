import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk('/getCategory/', async () => {
    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json();
    return data;
});
export const categorySlice = createSlice({
    name: "categoryReducer",
    initialState: {
        category: [],
        categorySituation: {
            loading: false,
            error: null
        }
    },
    extraReducers: {
        [getCategory.pending]: (state, action) => {
            state.categorySituation.loading = true;
            state.categorySituation.error = null;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.categorySituation.loading = false;
            state.category=action.payload;
        },
        [getCategory.rejected]: (state, action) => {
            state.categorySituation.loading = false;
            state.categorySituation.error = action.error.message;
        }
    }
});
export default categorySlice.reducer;