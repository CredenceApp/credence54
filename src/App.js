import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
// import AdminDashboard from "components/admin";
import { lazy, useState } from "react";
import LoginForms from "components/loginForms";
import Reg from "components/reg";
import Signupforms from "components/signupForms";
import ConfirmForm from "components/confimForm";
import Protected from "components/Protected";
import { Suspense } from "react";
import { useEffect } from "react";
import Home from "landing-page/pages/Home";
import Terms from "landing-page/pages/Terms";
import Policy from "landing-page/pages/Policy";
import logo from './assets/new_logo.svg';
import ForgotPassword from "components/ForgotPassword";
import PreviewAcceptTransaction from "components/admin/PreviewAcceptTransaction";
import Decline from "components/Decline";


import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLazy = lazy(() => import("./components/admin"));

function App() {
  const responseOutput = (response) => {
    // console.log(response);
  };

  const errorOutput = (error) => {
    // console.log(error);
  };

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

  
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/auth" element={<Reg />}>
            <Route exact path="/auth/signup" element={<Signupforms />} />
            <Route exact path="/auth/login" element={<LoginForms />} />
            <Route exact path="/auth/confirm" element={<ConfirmForm />} />
            <Route exact path="/auth/forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route
            path="/user/*"
            element={
              // <Protected>
              <Suspense fallback={<div className="h-screen flex items-center justify-center"><img className="animate-pulse h-[100px] w-[100px]" src={logo} /></div>}>
                <AdminLazy />
              </Suspense>
              // </Protected>
            }
          />
          {/* <Route path="/accept" exact element={<PreviewAcceptTransaction />} />
          <Route path="/decline" exact element={<Decline />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
