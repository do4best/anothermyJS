import {createSlice} from "@reduxjs/toolkit";

const mySlice = createSlice({
     initialState:{
     value:0
    },
    name:"counter",
    reducers:{
         increment : (state)=>{state.value += 1;},
        decrement : state => {state.value -= 1}
    }
})
export const {increment,decrement} = mySlice.actions;
export default mySlice.reducer;