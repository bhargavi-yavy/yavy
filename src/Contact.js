import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';


function Contact() {
    return (
      <div className="App">
        <header className="navbar">
            <div className="logo">
            </div>
                  <div className="menu menu-1">
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            </div>
        </header>
        </div>
  );
}
export default Contact;