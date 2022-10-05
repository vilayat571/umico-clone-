import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getLogin = createAsyncThunk('/getLogin/', async (data) => {
    const userDetail = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: data.username,
            password: data.password
        })
    })
        .then(res => res.json())
        .then(data => {
            return data
        });
    return userDetail;
});
export const loginSlice = createSlice({
    name: 'loginReducer',
    initialState: {
        loginSituation: {
            loading: false,
            error: null
        },
        userDetail: []
    },
    extraReducers: {
        [getLogin.pending]: (state, action) => {
            state.loginSituation.loading = true;
        },
        [getLogin.fulfilled]: (state, action) => {
            state.loginSituation = false;
            console.log('Data',)
            localStorage.setItem('token', action.payload.token)
            state.userDetail = action.payload;
        },
        [getLogin.rejected]: (state, action) => {
            state.loginSituation.error = action.error.message;
            state.loginSituation.loading = false;
        }
    }
});
export default loginSlice.reducer;