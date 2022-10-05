import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFotterData = createAsyncThunk('/getFotterData/', async () => {
    const url = 'http://localhost:8000/contentFotter';
    const response = await fetch(url);
    const data = await response.json();
    return data;
});
export const contentFotterSlice = createSlice({
    name: "contentFotterReducer",
    initialState: {
        data: [],
        dataSituation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getFotterData.pending]: (state, action) => {
            state.dataSituation.isLoading = true;
            state.dataSituation.error = null;
        },
        [getFotterData.fulfilled]: (state, action) => {
            state.dataSituation.isLoading = false;
            state.data = action.payload;
        },
        [getFotterData.rejected]: (state, action) => {
            state.dataSituation.isLoading = false;
            state.dataSituation.error = action.error.message;
        }
    }
});
export default contentFotterSlice.reducer;