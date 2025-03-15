import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice';
import cartSlices from "./slices/cartSlice";


const store = configureStore({
    reducer: {
        productSlice: productSlice,
        cart: cartSlices,
    },
});



export default store;
