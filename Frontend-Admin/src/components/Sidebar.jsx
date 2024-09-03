import React, { useContext, useState } from "react";
import { Context } from "../main";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const gotoHome = ()=>{
    navigateTo("/")
    setShow(!show)
  }
  
  const gotoDoctors = ()=>{
    navigateTo("/doctors")
    setShow(!show)
  }


  const gotoMessages = ()=>{
    navigateTo("/messages")
    setShow(!show)
  }

  const gotoAddNewDoctor = ()=>{
    navigateTo("/doctor/addnew")
    setShow(!show)
  }

  const gotoAddNewAdmin = ()=>{
    navigateTo("/admin/addnew")
    setShow(!show)
  }


  return (
    <nav
      style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      className={show ? "show sidebar" : "sidebar"}
    >
      <div className="links">
        <TiHome onClick={gotoHome}/>
        <FaUserDoctor onClick={gotoDoctors}/>
        <MdAddModerator onClick={gotoAddNewAdmin}/>
        <IoPersonAddSharp onClick={gotoAddNewDoctor}/>
        <AiFillMessage onClick={gotoMessages}/>
        <RiLogoutBoxFill />
      </div>
    </nav>
  );
};

export default Sidebar;