import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  { fetchAllProducts,fetchAllFilteredProducts, fetchAllBrands, fetchAllCategories, fetchProductsById } from "./productListApi";


export const fetchAllProductsAsync = createAsyncThunk('products/fetchProduct', async()=>{
    const response = await fetchAllProducts()
    return response.data
})

export const fetchAllFilteredProductsAsync = createAsyncThunk('products/fetchFilteredProduct', async(filter)=>{
    const response = await fetchAllFilteredProducts(filter)
    return response.data
})

export const fetchAllProductsByIdAsync = createAsyncThunk('products/fetchAllProductsById', async(id)=>{
    const response = await fetchProductsById(id)
    return response.data
})


export const fetchBrandsAsync = createAsyncThunk('products/fetchBrands', async()=>{
    const response = await fetchAllBrands()
    return response.data
})

export const fetchCategoriesAsync = createAsyncThunk('products/fetchCategories', async()=>{
    const response = await fetchAllCategories()
    return response.data
})


const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        list: [],
        categories:[],
        brands:[],
        selectedProduct:null
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchAllProductsAsync.pending, (state)=>{
            state.loading = true
        }).addCase(fetchAllProductsAsync.fulfilled, (state, action)=>{
            state.loading = false,
            state.list = action.payload
        }).addCase(fetchAllFilteredProductsAsync.pending, (state)=>{
            state.loading = true
        }).addCase(fetchAllFilteredProductsAsync.fulfilled, (state, action)=>{
            state.loading = false,
            state.list = action.payload.list
        }).addCase(fetchBrandsAsync.pending, (state)=>{
            state.loading = true
        }).addCase(fetchBrandsAsync.fulfilled, (state, action)=>{
            state.loading = false,
            state.brands = action.payload
        }).addCase(fetchCategoriesAsync.pending, (state)=>{
            state.loading = true
        }).addCase(fetchCategoriesAsync.fulfilled, (state, action)=>{
            state.loading = false,
            state.categories = action.payload
        }).addCase(fetchAllProductsByIdAsync.pending, (state)=>{
            state.loading = true
        }).addCase(fetchAllProductsByIdAsync.fulfilled, (state, action)=>{
            state.loading = false,
            state.selectedProduct = action.payload
        })

    }
    
})

export const selectAllProducts = (state) => state.products.list
export const selectBrands = (state) => state.products.brands
export const selectProductById = (state) => state.products.selectedProduct
export const selectCategories = (state) => state.products.categories
export const selectTotalItems = (state) => state.products.totalItems;


export default productSlice.reducer