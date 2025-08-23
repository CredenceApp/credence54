import { useEffect, useState } from "react";
import { getAllUserTransactions } from "redux/slices/transactions";
import { useDispatch, useSelector } from "react-redux";

function TransactionHistory() {
  const [transactions, setTransaction] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user?.user);
  const commodity = useSelector(
    (state) => state?.transaction?.transaction?.Transactions
  );

  // console.log("maptrs", commodity);

  const headerstyle = {
    display: "flex",
    alighItems: "center",
    justifyContent: "space-between",
    background: "#F0F1EC",
    color: "white",
    height: "40px",
    width: "100%",
    border: "2px solid red",
  };

  const getUserTransaction = (id) => {
    id = user?._id;
    dispatch(getAllUserTransactions(id)).then((res) => {
      // console.log("userT", res?.payload?.Transactions);
      setTransaction(res?.payload?.Transactions);
    });
  };

  // console.log("t", transactions);

  useEffect(() => {
    getUserTransaction(user?._id);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="tranHist overflow-scroll">
      <table className="table">
        <thead>
          <tr>
            <th>Commodities</th>
            <th>Date</th>
            <th>Buyer name</th>
            <th>Status</th>
            <th>Amount</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {transactions === null ? (
            <tr>
              <td className="col-span-6">
                You do not have any transactions yet
              </td>
            </tr>
          ) : (
            transactions?.map((items) => (
              <tr key={items?._id}>
                <td>{items?.commodityName}</td>
                <td>{formatDate(items?.createdAt)}</td>
                <td>{items?.buyerName}</td>
                <td>{items?.status}</td>
                <td>{items?.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;

