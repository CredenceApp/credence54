import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import PasswordSet from "./settingsElement/password";
import ProfileSet from "./settingsElement/profile";
function Settings() {
  const [activeLink, setActiveLink] = useState("profile");

  const location = useLocation();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    // Update activeLink when route changes
    if (location.pathname === "/user/settings/profile") {
      setActiveLink("profile");
    } else if (location.pathname === "/user/settings/passwordsettings") {
      setActiveLink("passwordsettings");
    }
  }, [location]);

  return (
    <div className="min-h-screen ">
      <div className="settingsElement overflow-scroll">
        <span
          className={
            activeLink === "profile" ? "activatedProfileSettingsSpan" : ""
          }
        >
          <Link to="profile">Profile</Link>
        </span>
        <span
          className={
            activeLink === "passwordsettings"
              ? "activatedProfileSettingsSpan"
              : ""
          }
        >
          <Link to="passwordsettings">Password</Link>
        </span>
      </div>
      <div className="settingsElementcontent">
        <Routes>
          <Route path="/profile" element={<ProfileSet />} />
          <Route path="/passwordsettings" element={<PasswordSet />} />
        </Routes>
      </div>
    </div>
  );
}

export default Settings;
