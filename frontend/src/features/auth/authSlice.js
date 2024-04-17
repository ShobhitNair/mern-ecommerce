import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser } from "./authApi";


export const createUserAsync = createAsyncThunk('user/createUser', async(userData)=>{
    const response = await createUser(userData)
    return response.data
})

export const checkUserAsync = createAsyncThunk('user/checkUser', async(loginInfo)=>{
    const response = await checkUser(loginInfo)
    return response.data
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        loggedInUser: null,
        loading: false,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(createUserAsync.pending, (state)=>{
            state.loading = true
        }).addCase(createUserAsync.fulfilled,(state,action)=>{
            state.loading = false,
            state.loggedInUser = action.payload
        }).addCase(checkUserAsync.pending, (state)=>{
            state.loading = true
        }).addCase(checkUserAsync.fulfilled,(state,action)=>{
            state.loading = false,
            state.loggedInUser = action.payload
        }).addCase(checkUserAsync.rejected, (state,action)=>{
            state.loading = false,
            state.error = action.error
        })
    }
})

export const selectLoggedInUser = (state)=>state.auth.loggedInUser
export const selectError = (state)=>state.auth.error

export default userSlice.reducer