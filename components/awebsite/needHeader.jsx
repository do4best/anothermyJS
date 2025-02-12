import React from 'react';
import  logo from './imgs/logo.png'
import  cart from './imgs/cart.png'
import bjscreen from './imgs/Image.png'
function NeedHeader(props) {
    return (
        <>
        <div className={`container min-h-screen  bg-center}`} style={{backgroundImage:`url(${bjscreen})`,width:'100vw',height:'100vh'}}>
            <nav className={"flex flex-row items-center"}>
                <img src={logo} alt="logo"/>
                <ul>
                    <li className={"incline-block"}><a href="#" className={"no-underline text-white"}>Home</a></li>
                    <li className={"incline-block"}><a href="#">About</a></li>
                    <li className={"incline-block"}><a href="#">Features</a></li>
                    <li className={"incline-block"}><a href="#">Contact</a></li>

                </ul>
                <img src={cart} alt="Cart"/>
            </nav>
        </div>
        </>
    );
}

export default NeedHeader;