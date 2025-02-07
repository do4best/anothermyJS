import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./myCreateSlice.js";
import YourComponent from "./yourComponent.jsx";

function CreatingOneMore(props) {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
        <button className="px-3 py-2 bg-black text-white rounded" onClick={()=>dispatch(increment())}> Increment</button>
            <span className={"text-2xl text-white"}>{count}</span>
            <button className="px-3 py-2 bg-black text-white rounded" onClick={()=>dispatch(decrement())}> Decrement</button>
            <YourComponent/>
        </>
    );
}

export default CreatingOneMore;