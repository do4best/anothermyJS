import React from 'react';
import {useSelector} from "react-redux";

function OneMoreComponent(props) {
    const count = useSelector((state)=>state.counter.value)
    return (
        <>
        <h1 className={"text-3xl"}>{count}</h1>
        </>
    );
}

export default OneMoreComponent;