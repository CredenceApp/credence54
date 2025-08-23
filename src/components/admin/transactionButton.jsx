import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import FormModal from "./modalFolder/transactionModal";
// import { NavLink } from "react-router-dom";

const TransactionButton = (prop, props) => {
  const [showModal, setShowModal] = useState(false);

  const handleNewTransaction = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div className="dashHead">
      <h2 className="remove">{prop.head}</h2>
      <button
        className="dashHeadButton bg-newCredenceGreen"
        onClick={handleNewTransaction}
      >
        <span><FaPlus /></span>
        <span className="remove">Escrow Transaction</span>
        {/* </NavLink> */}
      </button>
      {showModal && <FormModal onClose={onClose} show={setShowModal} props={props} />}
    </div>
  );
};
export default TransactionButton;
