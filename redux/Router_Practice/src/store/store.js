import { configureStore } from "@reduxjs/toolkit";
import depositReducer from "../Features/deposit/depositSlice";
import cartReducer from "../Features/cart/cartSlice"
import { combineReducers } from "@reduxjs/toolkit";

const finalReducer = combineReducers({
    depositReducer: depositReducer,
    cartReducer: cartReducer,
})

export const store = configureStore({
    reducer:{
        finalReducer
    }
})