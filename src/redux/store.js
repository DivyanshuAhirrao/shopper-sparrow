import {
    configureStore
} from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import counterSlice from "./slice/counterSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});