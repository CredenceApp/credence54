import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUser,
  faFileAlt,
  faFile,
  faCalendar,
  faAddressBook,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FaChartLine } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getPendingTransaction } from "redux/slices/transactions";

function UserDetails() {
  const user = useSelector((state) => state?.user?.user?.user);

  return (
    <>
      <div className="userAccountDetails scrollbar">
        <div className="wallet detailCOntainer shadow-lg">
          <p>Wallet</p>
          <div className="wallletDetails innerCon">
            <span className="remove">
              <FontAwesomeIcon icon={faMoneyBill1} color="white" size="lg" />{" "}
            </span>
            <div className="amounts">
              <p>Available balance</p>
              <h3>₦0.00</h3>
            </div>
          </div>
        </div>
        <div className="totalOrders detailCOntainer shadow-lg">
          <p>Total orders</p>
          <div className="orderDetails innerCon">
            <span className=" remove">
              <FontAwesomeIcon icon={faCartShopping} color="white" size="lg" />{" "}
            </span>
            <div className="amounts">
              <p>0 Orders</p>
              <p>₦0.00</p>
            </div>
            {/* <FontAwesomeIcon className="chartIcon remove" icon={faUser} /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <FaChartLine
                color="green"
                className="remove chartIcon"
                size={22}
              />
              {/* <p style={{ color: "green" }}>12.1%</p> */}
            </div>
          </div>
        </div>
        <div className="totalOrders detailCOntainer shadow-lg">
          <p>
            {" "}
            <span className="remove">Commodities</span>Sold
          </p>
          <div className="orderDetails innerCon">
            <span className="remove">
              <FontAwesomeIcon icon={faFileAlt} color="white" size="lg" />{" "}
            </span>
            <h2>0</h2>
            {/* <FontAwesomeIcon className="remove chartIcon" icon={faFile} color='green'/> */}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <FaChartLine
                color="green"
                className="remove chartIcon"
                size={22}
              />
              <p style={{ color: "green" }}>12.1%</p>
            </div> */}
          </div>
        </div>
        <div className="totalOrders detailCOntainer shadow-lg">
          <p>
            {" "}
            <span className="remove">Commodities</span> Bought
          </p>
          <div className="orderDetails innerCon">
            <div
              style={{ display: "flex", gap: ".2rem", alignItems: "center" }}
            >
              <span className="remove">
                <FontAwesomeIcon icon={faFileAlt} color="white" size="lg" />{" "}
              </span>
              <h2>0</h2>
            </div>
            {/* <FontAwesomeIcon className="remove chartIcon" icon={faFile} color='green'/> */}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <FaChartLine className="remove chartIcon" size={22} color="red" />
              <p style={{ color: "red" }}>12.1%</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
