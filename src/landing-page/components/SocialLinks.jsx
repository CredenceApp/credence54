import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import twitter from "../../assets/x_twitter.svg";

function SocialLinks() {
  return (
    <div className="fixed top-56 right-4 flex flex-col items-center py-3 space-y-5 z-20 bg-whiteLightB h-[332px]">
      <p className="text-mainBlack p-2">
        <a
          href="https://www.linkedin.com/company/credenceapphq/"
          target="_blank"
          rel="noreferrer" 
          className="text-mainBlack"
        >
          <FaLinkedin />
        </a>
      </p>
      <p className="text-mainBlack p-2">
        <a
          href="https://www.instagram.com/credenceapphq/"
          target="_blank"
          rel="noreferrer" 
          className="text-mainBlack"
        >
          <FaInstagram />
        </a>
      </p>
      <p className="text-mainBlack p-2">
        <a
          href="https://twitter.com/credenceapphq"
          target="_blank"
          rel="noreferrer" 
          className="text-mainBlack"
        >
          <>
            <img src={twitter} alt="twitter" />
          </>
        </a>
      </p>
      <p className="text-mainBlack p-2">
        <a
          href="https://www.facebook.com/Credenceapphq?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer" 
          className="text-mainBlack"
        >
          <FaFacebookF />
        </a>
      </p>
      <p className="text-mainBlack p-1"> | </p>{" "}
      <p className="rotate-[270deg] text-mainBlack p-1">Follow Us</p>
    </div>
  );
}

export default SocialLinks;
