import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productListSlice"
import authReducer from '../features/auth/authSlice'

export const store = configureStore({reducer:{
    products: productReducer,
    auth: authReducer
}})