import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : {count : 0},
    reducers : {
        increase(state, action){
            state.count+=1;
        },
        decrease(state, action){
            state.count-=1;
        },
        reset(state , action){
            state.count = 0;
        },
    }
})

export const{increase, decrease, reset} = counterSlice.actions;

export default counterSlice.reducer;