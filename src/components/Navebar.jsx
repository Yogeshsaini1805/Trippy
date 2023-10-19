import React, { useState } from "react";
import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> Trippy </h1>
                <div className="menu-icons">
                  <i
                        className={clicked ? "fas fa-times" : "fas fa-bars"}
                        onClick={() => setClicked(!clicked)}
                    ></i>
                </div>
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((items, index) => {
                    return(
                        <li key={index}>
                        <Link className={items.cName} to={items.url}>
                            <i 
                            className={items.icon}></i>
                            {items.title}
                        </Link>
                        </li>

                    );
                })}
                <button>Sign UP</button>
                    
                </ul>
            </nav>
        );
    }

export default Navbar;