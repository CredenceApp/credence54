import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./admin/dashboard";
import TopBar from "./topbar";
import Payment from "./admin/payment";
import Settings from "./admin/settings";
import Transaction from "./admin/transaction";
import Sidenav from "./sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell } from "@fortawesome/free-solid-svg-icons";
import FormModal from "./admin/modalFolder/transactionModal";
import MarketPlace from "./admin/MarketPlace";
import ViewSeller from "./admin/ViewSeller";
import PreviewAcceptTransaction from "./admin/PreviewAcceptTransaction";
import MobileNav from "./mobileNav/MobileNav";
import Capital from "./admin/capital/Capital";
import MarketPLaceTransactions from "./marketplaceTransactions/MarketPLaceTransactions";

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <div className="admin-dashboard">
      <Sidenav activeLink={activeLink} />

      <div className="content w-full lg:w-[75%] xl:w-[77%] ml-auto min-h-screen overflow-scroll">
        <TopBar faBell={faBell} faComment={faComment} />
        <Routes>
          {/* <Route path="/" exact element={<Dashboard />} /> */}
          <Route path="/market" exact element={<MarketPlace />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/escrow-transactions" exact element={<Transaction />} />
          <Route path="/market-place-transactions" exact element={<MarketPLaceTransactions />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/settings/*" exact element={<Settings />} />
          <Route path="/view-seller" exact element={<ViewSeller />} />
          <Route path="/capital" exact element={<Capital />} />
        </Routes>
        <MobileNav />
      </div>
    </div>
  );
}

export default AdminDashboard;
