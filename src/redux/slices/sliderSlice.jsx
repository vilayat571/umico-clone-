import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getSlider = createAsyncThunk('/getSlider/', async () => {
    const res = await fetch('http://localhost:8000/slider');
    const data = await res.json();
    return data;
});
export const sliderSlice = createSlice({
    name: "sliderReducer",
    initialState: {
        slider: [],
        sliderSitutation: {
            loading: false,
            error: null
        }
    },
    extraReducers: {
        [getSlider.pending]: (state) => {
            state.sliderSitutation.loading = true;
            state.sliderSitutation.error = null;
        },
        [getSlider.fulfilled]: (state, action) => {
            state.sliderSitutation.loading = false;
            state.slider = action.payload;
        },
        [getSlider.rejected]: (state, action) => {
            state.sliderSitutation.loading = false;
            state.sliderSitutation.error = action.error.message;
        }
    }
});
export default sliderSlice.reducer;