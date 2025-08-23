// import { useEffect, useState } from "react";
// import UserDetails from "./dashboardElements/useraccountdetails";
// import Transactions from "./dashboardElements/transactoins";
// import TransactionHistory from "./dashboardElements/transacHistory";
// import { Modal } from "react-bootstrap";
// import { getPendingTransaction } from "redux/slices/transactions";
// import { useDispatch, useSelector } from "react-redux";

// import TransactionButton from "./transactionButton";

// const Dashboard = ({...props}) => {
//   const dispatch = useDispatch();
//   const [openModal, setOpenModal] = useState(false);
//   const pending = useSelector(
//     (state) => state?.transaction?.transaction?.pendingTransactions
//   );

//   const handleClose = () => setOpenModal(false);
//   const handleShow = () => setOpenModal(true);

//   useEffect(() => {
//     const pendingTransactions = async () => {
//       await dispatch(getPendingTransaction()).then((res) => {
//         console.log("pendingTs", res?.payload?.pendingTransactions);
//         res?.payload?.pendingTransactions && setOpenModal(true);
//       });
//     };

//     pendingTransactions();
//   }, []);

//   return (
//     <>
//       <div className="dashboard">
//         <TransactionButton head="Dashboard" />
//         <UserDetails />
//         <Transactions />
//         <div className="transacrHistory_main_div">
//           <p className="transacrHistory_main_div_head">Transactions history</p>
//           <TransactionHistory />
//         </div>
//       </div>
//       {openModal && (
//         <>
//           <Modal
//             show={openModal}
//             onHide={handleClose}
//             size="lg"
//             centered
//             {...props}
//           >
//             <Modal.Header closeButton>
//               <Modal.Title>Pending Transactions</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               Some text as placeholder. In real life you can have the elements
//               you have chosen. Like, text, images, lists, etc.
//             </Modal.Body>
//           </Modal>
//         </>
//       )}
//     </>
//   );
// };
// export default Dashboard;

import { useEffect, useState } from "react";
import UserDetails from "./dashboardElements/useraccountdetails";
import Transactions from "./dashboardElements/transactoins";
import TransactionHistory from "./dashboardElements/transacHistory";
import { getPendingTransaction } from "redux/slices/transactions";
import { useDispatch, useSelector } from "react-redux";
import TransactionButton from "./transactionButton";
import PendingModal from "./dashboardElements/pendingModal/PendingModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const pending = useSelector(
    (state) => state?.transaction?.transaction?.pendingTransactions
  );

  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

  useEffect(() => {
    const pendingTransactions = async () => {
      await dispatch(getPendingTransaction()).then((res) => {
        // console.log("pendingTs", res?.payload?.pendingTransactions);
        res?.payload?.pendingTransactions && setOpenModal(true);
      });
    };

    pendingTransactions();
  }, []);

  return (
    <div className="dashboard pb-8 ">
      <TransactionButton head="Dashboard" />
      <UserDetails />
      <Transactions />
      {/* <div className="transacrHistory_main_div">
        <p className="transacrHistory_main_div_head">Transactions history</p>
        <TransactionHistory />
      </div> */}
      {openModal && (
        <PendingModal show={handleShow} close={handleClose} />
      )}
    </div>
  );
};

export default Dashboard;
