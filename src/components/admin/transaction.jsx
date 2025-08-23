import TransactionHistory from "./dashboardElements/transacHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import TransactionCategories from "./transactionCategory";
import React, { useState } from "react";
import FormModal from "./modalFolder/transactionModal";
import TransactionButton from "./transactionButton";

function Transaction() {


  return (
    <div className="transaction">
      <TransactionButton head='Transaction'/>

      <TransactionCategories />
      <div className="transacrHistory_main_div">
        <h5>Escrow Transactions</h5>
        <TransactionHistory />
      </div>

    </div>
  );
}

export default Transaction;
