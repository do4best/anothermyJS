import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./createSlicerName.js";
import OneMoreComponent from "./oneMoreComponent.jsx";

function MainReduxExample(props) {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
        <h1>Welcome to Redux Example</h1>
            <h1>{count}</h1>
<button className="btn btn-primary" onClick={()=>dispatch(increment())}>decrement</button>
            <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>decrement</button>
            <OneMoreComponent/>
        </>
    );
}

export default MainReduxExample;