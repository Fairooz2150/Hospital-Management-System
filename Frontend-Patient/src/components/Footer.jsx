import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About Us</Link>
            </ul>
          </div>
          <div>
            <h4>Developed by</h4>
            <p>Muhammad Fairooz</p>
            <div className="social-icons">
              <a
                href="https://fairooz2150.github.io/Fairooz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoGlobeOutline />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-fairooz-0b1136268/?trk=public-profile-join-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxLinkedinLogo />
              </a>
              <a
                href="https://github.com/Fairooz2150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/marsh__mell_o/?igsh=MWhwZmI5NDRsMWoxMQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>lifecare@gmail.com</span>
            </div>
            <div>
            <FaLocationDot/>
            <span>Kerala, India</span>
            </div>
          </div>
        </div>
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Life Care Hospital</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
