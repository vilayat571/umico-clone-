import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllData = createAsyncThunk('', async () => {
    const url = 'https://dummyjson.com/products'
    const res = await fetch(url);
    const data = await res.json();
    return data;

})
const allproductSlice = createSlice({
    name: 'allproductReducer',
    initialState: {
        data: [],
        dataSituation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getAllData.pending]: (state, action) => {
            state.dataSituation.isLoading = true;
            state.dataSituation.error = null;
        },
        [getAllData.fulfilled]: (state, action) => {
            state.dataSituation.isLoading = false;
            state.data = action.payload;
        },
        [getAllData.rejected]: (state, action) => {
            state.dataSitaution.isLoading = false;
            state.dataSituation.error = action.error.message;
        }
    }
});

export default allproductSlice.reducer;