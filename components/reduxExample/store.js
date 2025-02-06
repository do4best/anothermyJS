import {configureStore} from "@reduxjs/toolkit";
import friendSlicer from './createSlicerName.js'
export const store = configureStore({
    reducer:{
        counter: friendSlicer
    }
})