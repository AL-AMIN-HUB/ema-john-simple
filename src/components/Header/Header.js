import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav className="ps-5">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
      <div className="bg-secondary py-2">
        <input className="input-group form-control w-50 mx-auto" type="text" placeholder="Search your Product..." />
      </div>
    </div>
  );
};

export default Header;
