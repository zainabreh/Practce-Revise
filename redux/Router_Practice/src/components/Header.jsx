import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const {cartReducer} = useSelector(v=>v.finalReducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/addNewProduct"}>
                  AddNewProduct
                </NavLink>
              </li>
            </ul>
            <NavLink className="nav-link " aria-current="page" to={"/cartPage"}>
                  
            <button className="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;{cartReducer.cart.length}</button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
