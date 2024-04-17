import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApi";


export const createUserAsync = createAsyncThunk('user/createUser', async(userData)=>{
    const response = await createUser(userData)
    return response.data
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        loggedInUser: null,
        loading: false
    },
    extraReducers:(builder)=>{
        builder.addCase(createUserAsync.pending, (state)=>{
            state.loading = true
        }).addCase(createUserAsync.fulfilled,(state,action)=>{
            state.loading = false,
            state.loggedInUser = action.payload
        })
    }
})

export const selectLoggedInUser = (state)=>state.auth.loggedInUser

export default userSlice.reducer