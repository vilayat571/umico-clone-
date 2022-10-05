import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getResult = createAsyncThunk('/getResult/', async (query) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    return data;

});
export const resultSlice = createSlice({
    name: "resultReducer",
    initialState: {
        resultData: [],
        dataSituation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getResult.pending]: (state, action) => {
            state.dataSituation.isLoading = false;
            state.dataSituation.error = null;
        },
        [getResult.fulfilled]: (state, action) => {
            state.dataSituation.isLoading = false;
            state.resultData = action.payload;
        },
        [getResult.rejected]: (state, action) => {
            state.dataSituation.error = action.error.message;
            state.dataSituation.isLoading = false;
        }
    }
});
export default resultSlice.reducer;