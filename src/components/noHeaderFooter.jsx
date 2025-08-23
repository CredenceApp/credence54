import { Link, NavLink } from "react-router-dom";
import {
  faEnvelope,
  faHandPointer,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import Navbar from "landing-page/components/Navbar";

const logo = require("../assets/Logo.png");

function LandingLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const style = {
    backgroundColor: scrolled
      ? "rgba(196, 255, 204, 0.9"
      : "rgba(196, 255, 204, 0.1)",
  };
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(true);
  };
  const handleHide = () => {
    setShowMenu(false);
  };
  // window.history
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <footer>
        <div className="footercontainer">
          <div className="footerMaincontent">
            <div className="footerElement footerElement1">
              <img src={logo} alt="" />
              <p>JOIN OUR NEWSLETTER</p>
              <span>
                <input type="email" placeholder="Email address" />
                <button>
                  <FaTelegramPlane />
                </button>
              </span>
            </div>
            <div className="footerElement">
              <h1>Company</h1>
              <hr />
              <ul>
                <li>Features</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Whitepaper</li>
              </ul>
            </div>
            <div className="footerElement">
              <h1>Legal</h1>
              <hr />
              <ul>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footerElement">
              <h1>Contact</h1>
              <hr />
              <ul>
                <NavLink to="emailto:support@credenceapp.co">
                  <FontAwesomeIcon icon={faEnvelope} />
                  support@credenceapp.co
                </NavLink>
                <NavLink to="tel:+2340123456789">
                  <FontAwesomeIcon icon={faPhone} />
                  +234 012 345 6789
                </NavLink>
              </ul>
            </div>
          </div>
          <hr className="hrrr" />
          <div className="footerMinorcontent">
            <p>&#169;Copyright 2022 Credence</p>
            <span className="socials">
              <NavLink>
                <FaFacebook color="#007538" size="1.6rem" />
              </NavLink>
              <NavLink>
                <FaTwitter color="#007538" size="1.6rem" />
              </NavLink>
              <NavLink>
                <FaInstagram color="#007538" size="1.6rem" />
              </NavLink>
              <NavLink>
                <FaLinkedin color="#007538" size="1.6rem" />
              </NavLink>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default LandingLayout;
