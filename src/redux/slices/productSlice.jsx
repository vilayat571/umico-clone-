import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getProducts = createAsyncThunk('/getProducts/', async ({limit}) => {
   if(limit===30){
    const res = await fetch(`https://dummyjson.com/products?limit=30`);
    const data = await res.json();
    return data;
   }
   else{
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await res.json();
    return data;
   }
});
export const sliderSlice = createSlice({
    name: 'sliderSlice',
    initialState: {
        products: [],
        productsSituation: {
            loading: false,
            error: null
        },
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.productsSituation.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.productsSituation.loading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.productsSituation.error = action.error.message;
            state.productsSituation.loading = false;
        },
    }
});
export default sliderSlice.reducer;