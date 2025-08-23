import ConfirmForm from "./confimForm";
import LoginForms from "./loginForms";
import Signupforms from "./signupForms";
import { Link, Route, Routes, Outlet } from "react-router-dom";
const myImage = require("../assets/Frame 58.png");
const Logo = require("../assets/Union.png");
const bg = require("../assets/Authentication img.png");

function Reg() {
  return (
    <div className="signs">
      <div className="sideimg"></div>

      <Outlet />
    </div>
  );
}

export default Reg;
