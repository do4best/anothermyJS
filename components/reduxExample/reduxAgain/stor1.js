import {configureStore} from "@reduxjs/toolkit";
import YourSlice from './myCreateSlice.js'

const myStore=configureStore({
    reducer:{
counter : YourSlice
    }
})
export default myStore;