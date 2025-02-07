import React from 'react';

function Bodier(props) {
    return (
        <>
<div className={"grid grid-cols-3 gap-x-2 gap-y-3"}>
            <div className={"bg-red-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-orange-500 rounded-lg shadow-xl min-h-[50px] col-span-2"}></div>
    <div className={"bg-yellow-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-green-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-teal-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-blue-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-indigo-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-purple-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-pink-500 rounded-lg shadow-xl min-h-[50px]"}></div>
    <div className={"bg-slate-500 rounded-lg shadow-xl min-h-[50px]"}></div>
</div>
        </>
    );
}

export default Bodier;