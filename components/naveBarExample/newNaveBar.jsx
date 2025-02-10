import React from 'react';
import {BrowserRouter as Router,NavLink, Route, Routes} from "react-router-dom";
import Service from "./service.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Home from "./home.jsx";

function NewNaveBar(props) {
    return (
        <>

<div className="flex justify-between items-center ">
        <h1 className={"text-2xl"}>New Nave Bar</h1>
            <ul className={"list-none"}>
                <li>
                   <NavLink to={'/'}> Home</NavLink></li>
                <li>
                    <NavLink to={'/about'}>About</NavLink></li>
                <li>
                    <NavLink to={'/service'}>Service</NavLink></li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
</div>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/service"} element={<Service/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>

        </>
    );
}

export default NewNaveBar;