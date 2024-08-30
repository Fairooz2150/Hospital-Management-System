import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {


  return (
    <>
      <nav className="container">
        <div className="logo">Life Care</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}></div>
        <div className="links">
          <Link to={"/"}>Home </Link>
          <Link to={"/appointment"}>Appointment </Link>
          <Link to={"/about"}>About Us </Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={gotoLogin}>
            Login
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
