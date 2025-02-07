import React from 'react';

import {useSelector} from "react-redux";

function YourComponent(props) {
    const myCounter = useSelector((state)=>state.counter.value)
    return (
        <>

        <h1 className={"text-2xl text-white bg-red-500 inline-block px-3 ml-8"}>{myCounter}</h1>
        </>
    );
}

export default YourComponent;