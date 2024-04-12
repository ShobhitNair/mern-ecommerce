import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAllProducts from "./productListApi";


export const fetchAllProductsAsync = createAsyncThunk('products/fetchProduct', async()=>{
    const response = await fetchAllProducts()
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        list: [],
    },
    reducers:{
        getAllProducts(state, action){
            state.list += action.payload
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchAllProductsAsync.pending, (state)=>{
            state.loading = true
        }).addCase(fetchAllProductsAsync.fulfilled, (state, action)=>{
            state.loading = false,
            state.list = action.payload
        })

    }
    
})

export const selectAllProducts = (state) => state.products.list

export const { getAllProducts} = productSlice.actions

export default productSlice.reducer