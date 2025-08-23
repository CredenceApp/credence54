import React from "react";

function MarketPLaceTransactions() {
  return (
    <div className="p-3 pb-6 min-h-screen">
    <h2 className="p-2 leading-[36px] font-thicker">Marketplace Transactions</h2>
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
            {/* {transactions === null ? (
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
          )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarketPLaceTransactions;
