import logo from '../../img/yavi-logo.png';
import { Link } from "react-router-dom";
import { BsChevronDown, } from "react-icons/bs";

export default function Header() {
  return (

    <header className="navbar">
          <div className="logo">
            <img className="img-logo" src={logo} alt="" /></div>
                <div className="Menu">
                    <Link className="Menu-One" to="/">Home</Link>
                    <Link className="Menu-One" to="/ourwork">Our Work</Link>                                           
            <span className="Header-Name">Services</span><BsChevronDown className="Header-Icon" />                                 
                    <Link className="Menu-One" to="/about">About</Link>
                    <Link className="Menu-One" to="/contact">Contact</Link>
                </div>
        </header>      
  );
}