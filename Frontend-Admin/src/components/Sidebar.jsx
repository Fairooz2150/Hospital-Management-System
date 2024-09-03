import React, { useContext, useState } from "react";
import { Context } from "../main";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return (
    <nav
      style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      className={show ? "show sidebar" : "sidebar"}
    >
      <div className="links">
        <TiHome />
        <FaUserDoctor />
        <MdAddModerator />
        <IoPersonAddSharp />
        <AiFillMessage />
        <RiLogoutBoxFill />
      </div>
    </nav>
  );
};

export default Sidebar;
