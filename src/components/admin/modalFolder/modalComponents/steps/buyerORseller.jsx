import { useState } from "react";
import { FaAngleDoubleRight, FaChevronRight } from "react-icons/fa";
// , buyerData, sellerData, onInputChange, onInputChange
function BuyerorSeller({ onNext, formData, onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };
  return (
    <div className="modalDetails">
      <form onSubmit={handleSubmit} action="">
        <div className="modalForm">
          <label htmlFor="sellername">Seller name</label>
          <input
            type="text"
            required
            name="sellerName"
            id="sellername"
            value={formData.sellerName}
            onChange={onInputChange}
          />
        </div>
        <div className="modalForm">
          <label htmlFor="selleremail">Seller Email</label>
          <input
            required
            type="email"
            name="sellerEmail"
            id="selleremail"
            value={formData.sellerEmail}
            onChange={onInputChange}
          />
        </div>
        <div className="modalForm">
          <label htmlFor="buyername">Buyer name</label>
          <input
            type="text"
            required
            name="buyerName"
            id="buyername"
            value={formData.BuyerName}
            onChange={onInputChange}
          />
        </div>
        <div className="modalForm">
          <label htmlFor="buyeremail">Buyer Email</label>
          <input
            required
            type="email"
            name="buyerEmail"
            id="buyeremail"
            value={formData.buyerEmail}
            onChange={onInputChange}
          />
        </div>
        {/* Shipping Method: */}
        <div className="modalForm">
          <label htmlFor="shipping">Shipping Method*</label>
          <select
            name="shippingMethod"
            id="shipping"
            required
            value={formData.shippingMethod}
            onChange={onInputChange}
          >
            <option value="">Select</option>
            <option value="Road">Road</option>
            <option value="Rail">Rail</option>
            <option value="Airfreight">Airfreight</option>
            <option value=" ContainerShipping">Container Shipping</option>
          </select>
        </div>

        {/* TRANSACTION TYPE */}
        <div className="modalForm">
          <label htmlFor="TransactionType">Transaction Type</label>
          <select
            name="transactionType"
            id="TransactionType"
            value={formData.transactionType}
            onChange={onInputChange}
          >
            <option value="">Select</option>
            <option value=",one-off">One-off</option>
            <option value="milestone">Milestone</option>
            <option value="layby">Layby</option>
          </select>
        </div>
        {/* CATEGORY */}
        <div className="modalForm">
          <label htmlFor="customerRole">Category*</label>
          {formData.category !== "others" ? (
            <select
              name="category"
              id="category"
              required
              value={formData.category}
              onChange={onInputChange}
            >
              <option value="">Select</option>
              <option value="Paddy Rice">Paddy Rice</option>
              <option value="Cashew Nut">Cashew Nut</option>
              <option value="Maize">Maize</option>
              <option value="Beans">Beans</option>
              <option value="Cocoa">Cocoa</option>
              <option value="Sesame Seed">Sesame Seed</option>
              <option value="Ginger">Ginger</option>
              <option value="others">Others</option>
            </select>
          ) : (
            <input
              type="text"
              placeholder="please enter category"
              name="category"
              id="othercategory"
              // value={formData.categoryInput}
              onChange={onInputChange}
              required
            />
          )}
        </div>

        {/* QUANTITY */}
        <div className="modalForm">
          <label htmlFor="commodityQuantity">
            Commodity Quantity <small>in Metric Ton</small>*
          </label>
          <input
            required
            type="text"
            name="commodityQuantity"
            id="quantity"
            value={formData.commodityQuantity}
            onChange={onInputChange}
          />
        </div>
        <div className="col-span-2 text-center">
          <button className="flex mx-auto justify-center items-center gap-3 flex-row-reverse px-4 py-1">
            <FaAngleDoubleRight />
            Proceed to Summary
          </button>
        </div>
      </form>
    </div>
  );
}

export default BuyerorSeller;
