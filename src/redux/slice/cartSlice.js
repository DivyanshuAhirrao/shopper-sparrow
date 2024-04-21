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
            state.items.push({ ...action.payload, quantity: 1 }); // Set initial quantity to 1
        },
        removeFromCart: (state, action) => {
           const indexToRemove = state.items.findIndex(item => item.id === action.payload);
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
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