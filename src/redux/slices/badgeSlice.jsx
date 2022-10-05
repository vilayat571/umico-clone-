import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBadges = createAsyncThunk('/getBadges/', async () => {
    const res = await fetch('http://localhost:8000/badge');
    const data = await res.json();
    return data;
})
const badgeSlice = createSlice({
    name: "badgeReducer",
    initialState: {
        badges: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getBadges.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getBadges.fulfilled]: (state, action) => {
            state.situation.isLoading = false;
            state.badges = action.payload;
            state.situation.error = null;
        },
        [getBadges.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default badgeSlice.reducer;