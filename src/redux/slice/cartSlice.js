import {
    createSlice
} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: {
        items: [],
    },
    name: 'cart',
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            console.log("added by reducer");
        },
        removeFromCart: (state, action) => {
            alert("removed by reducer");
            state.items.splice(action.payload, 1);
        },
        emptyCart: (state) => {
            state.items = [];
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    emptyCart
} = cartSlice.actions;
export const CartItems = state => state.cart.items.length;
export default cartSlice.reducer;