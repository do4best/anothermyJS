import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const createSlicerName = createSlice({
    initialState:{
        value : 0
    },
    name : "counter",
    reducers:{
        increment : (state)=>{ state.value +=1},
        decrement : (state)=>{ state.value -=1},

    }
})
export const {increment,decrement,incrementByAmount} = createSlicerName.actions;
export  default createSlicerName.reducer