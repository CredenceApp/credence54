import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createTransaction } from "redux/slices/transactions";
import { ToastContainer, toast } from "react-toastify";
import { TbCurrencyNaira } from "react-icons/tb";
import SuccessModal from "../../successModal/SuccessModal";

const bg = require("assets/profile.png");

function TransactionSummary({ closeModal, formData }) {
  const [success, setSuccess] = useState(false);
  const price = parseInt(formData.price);
  const Escrowprice = price * 0.025;
  const total = price + Escrowprice;

  // const deliveryDate = new Date(formData.deliveryDate).toLocaleDateString(
  //   "en-GB",
  //   {
  //     day: "numeric",
  //     month: "short",
  //     year: "numeric",
  //   }
  // );

  const data = formData;

  // console.log('summary', total);

  const successMsg = (msg) => {
    toast.success(msg);
  };

  const errorMsg = (msg) => {
    toast.error(msg);
  };

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);

    await dispatch(createTransaction(formData)).then((result) => {
      if (result?.meta?.requestStatus === "fulfilled") {
        setSuccess(true);
      } else if (result?.meta?.requestStatus === "rejected") {
        errorMsg(`Error creating transaction`);
      }
    });
    setTimeout(() => {
      closeModal();
    }, 3000);
    setLoading(false);
  };

  return (
    <>
      <div className="summarydiv modalDetails">
        <div className="summarydetails">
          <div className="detailsss">
            <h6>Title:</h6>
            <h1>{formData.title}</h1>
          </div>
          <div className="detailsss">
            <p>Category:</p>
            <h1>
              {formData.category === "others"
                ? formData.othercategory
                : formData.category}
            </h1>
          </div>
          <div className="detailsss">
            <p>Quantity:</p>
            <h1>{formData.commodityQuantity}</h1>
          </div>
          <div className="detailsss">
            <p>Delivery date:</p>
            <h1>{formData.deliveryDate}</h1>
          </div>
        </div>

        <div className="contact_details">
          <div className="big_contact_detail_div">
            <div className="contact_detail">
              <p>To</p>
              <h3>{formData.sellerName}</h3>
            </div>
            <div className="contact_detail">
              <p>Email</p>
              <h3>{formData.sellerEmail}</h3>
            </div>
            <div className="contact_detail">
              <p>Price(subtotal)</p>
              <h1 className="flex gap-2 items-center">
                <span>
                  <TbCurrencyNaira />
                </span>
                <span>{price?.toLocaleString()}</span>
              </h1>
            </div>
            <div className="contact_detail">
              <p>Escrow fee(2.5%)</p>
              <h1 className="flex gap-2 items-center">
                <span>
                  <TbCurrencyNaira />
                </span>
                <span>{Escrowprice?.toLocaleString()}</span>
              </h1>
            </div>
          </div>
          <div className="big_total_contact_detail_div">
            <div className="contact_detail divider">
              <p>
                <i>All prices are in NGN. Taxes may apply</i>
              </p>
              <hr />
              <hr />
            </div>
            <div className="contact_detail totaldiv">
              <h2>Total:</h2>
              <h2 className="flex gap-2 items-center">
                <span>
                  {" "}
                  <TbCurrencyNaira />
                </span>
                <span>{total?.toLocaleString()}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 md:mt-12 justify-center">
        <button
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
          className="flex mx-auto justify-center items-center gap-3 flex-row-reverse px-4 py-1"
        >
          <FaRegEdit size="1.5rem" />{" "}
          {loading ? "Creating your transaction" : "Create Transaction"}
        </button>
      </div>
      <ToastContainer />
      <SuccessModal
        text="Congratulations. You have successfully created an escrow transaction. We will inform you about the progress of the transaction."
        show={success}
        hide={() => setSuccess(false)}
      />
    </>
  );
}

export default TransactionSummary;
