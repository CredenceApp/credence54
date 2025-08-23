import { useEffect, useState } from "react";
import { getAllUserTransactions } from "redux/slices/transactions";
import { useDispatch, useSelector } from "react-redux";

const filter = require("assets/icon.png");

function TransactionCategories() {
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user?.user);

  const commodity = useSelector(
    (state) => state?.transaction?.transaction?.Transactions
  );

  //   const filterTransactions = () => {
  //     const filteredTransactions = commodity.filter((transaction) => {
  //       const transactionDate = new Date(transaction.createdAt);
  //       return (
  //         transactionDate >= new Date(startDate) &&
  //         transactionDate <= new Date(endDate)
  //       );
  //     });
  //     setTransactions(filteredTransactions);
  //   };

  const filterTransactions = () => {
    // Check if both start date and end date are selected
    if (startDate && endDate) {
      const filteredTransactions = commodity?.filter((transaction) => {
        const transactionDate = new Date(transaction.createdAt);
        return (
          transactionDate >= new Date(startDate) &&
          transactionDate <= new Date(endDate)
        );
      });
      setTransactions(filteredTransactions);
    } else {
      // If either start date or end date is not selected, set transactions to the original list
      setTransactions(commodity);
    }
  };

  return (
    <div className="transactCategoryCont">
      {/* <select name="transactionCategory" id="transactionCategory">
        <option value="AllCategory">All Category</option>
        <option value="AllCategory">All Categories</option>
      </select>
      <div className="datesContainer">
        <div className="dates">
          <div className="from">
            <div className="fromdate">
              <p>From: </p>{" "}
              <input
                type="date"
                name=""
                id=""
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="dates">
          <div className="to">
            <div className="fromdate">
              <p>To: </p>
              <input
                type="date"
                name=""
                id=""
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="filter cursor-pointer" onClick={filterTransactions}>
          <img src={filter} />
          <p>Filter</p>
        </div>
      </div> */}
    </div>
  );
}

export default TransactionCategories;
