import React, {useState} from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import './style.css'
import About from "./about.jsx";
import Service from "./service.jsx";
import Contact from "./contact.jsx";
import Home from "./home.jsx";

function MainNaveBar(props) {
    const [visible,setVisible] = useState(false)
    const [menuopen,setMenuOpen] = useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!menuopen)
    }
    return (
        <>

      <nav className="navelink">
          <h1 className={"findLog"}>Welcome</h1>
          <div className={'menu'} onClick={toggleMenu}>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
          </div>
          <ul className={menuopen?`navebarlink active`:'navebarlink'}>
              <li><NavLink to={"/"} onClick={toggleMenu}>Home</NavLink></li>
              <li> <NavLink to={"/service"} onClick={toggleMenu}>Service</NavLink></li>
              <li> <NavLink to={"/contact"} onClick={toggleMenu}>Contact</NavLink></li>
              <li><NavLink to={"/about"} onClick={toggleMenu}>About us</NavLink></li>
          </ul>
      </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/service"} element={<Service/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>

        </>
    );
}

export default MainNaveBar;