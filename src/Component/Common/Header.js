import logo from '../../img/yavi-logo.png';
import { Link } from "react-router-dom";
import ServicesMenu from "../Common/ServicesMenu.js";
import { BsChevronDown, } from "react-icons/bs";
import React,{ useState } from 'react';

export default function Header() {
    const [show,setShow]=useState(false)
  return (

    <header className="navbar">
          <div className="logo">
            <img className="img-logo" src={logo} alt="" /></div>
                <div className="Menu">
                    <Link className="Menu-One" to="/">Home</Link>
                    <Link className="Menu-One" to="/ourwork">Our Work</Link>                                           
                    <span onMouseOver={()=>setShow(!show)} className="Header-Name">Services<BsChevronDown className="Header-Icon" /></span>                                                                  
                    <Link className="Menu-One" to="/about">About</Link>
                    <Link className="Menu-One" to="/contact">Contact</Link>
                      {
                    show?<ServicesMenu />:null
                      }
                </div>
        </header>      
  );
}