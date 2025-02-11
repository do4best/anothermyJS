import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {NavLink} from "react-router-dom";

function MainNaveBarusingTail(props) {
    return (
        <>
<nav className={"mt-5 flex flex-row justify-between align-center sticky-top bg-dark-500 "}>
    <h1 className="text-3xl text-orange-500 m-5 ">Welcome</h1>
    <div className="flex flex-column sm:hidden">
        <GiHamburgerMenu size={30}/>
    </div>
<ul className={"flex gap-5 hover:text-base-300"}>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/service"}>Service</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
</ul>
</nav>
        </>
    );
}

export default MainNaveBarusingTail;