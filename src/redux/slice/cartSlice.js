import {
    createSlice
} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: {
        items: [],
    },
    name: 'cart',
    reducers: {
        addToCart: (state, actions) => {
            state.items.push(actions.payload);
            console.log("added by reducer");
        },
        removeFromCart: (state, actions) => {
            state.items.splice(actions.payload, 1);
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

