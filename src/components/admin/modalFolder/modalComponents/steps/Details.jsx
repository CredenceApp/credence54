import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronRight } from "react-icons/fa";
import { Form } from "react-router-dom";

function Details({ onNext, formData, onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <div className="modalDetails">
      <form onSubmit={handleSubmit}>
        <div className="modalForm">
          <label htmlFor="transactTitle">Transaction title*</label>
          <input
            type="text"
            name="title"
            required
            id="transactTitle"
            value={formData.title}
            onChange={onInputChange}
          />
        </div>
        <div className="modalForm">
          <label htmlFor="inspecctionDuration">Inspection Duration*</label>
          <input
            type="number"
            name="inspectionDuration"
            id="inspecctionDuration"
            placeholder="Inspection Duration in day(s)"
            required
            value={formData.inspectionDuration}
            onChange={onInputChange}
          />
        </div>

        {/* GRADING PARAMETER */}
        <div className="modalForm">
          <label htmlFor="grading">Grading Parameter</label>
          <select
            name="gradingParameter"
            id="grading"
            value={formData.gradingParameter}
            onChange={onInputChange}
          >
            <option value="">Select</option>
            <option value="MoistureContent">Moisture Content</option>
            <option value="KOR">KOR</option>
            <option value="SeedCount">Seed Count</option>
            <option value="infestation">infestation</option>
            <option value="ForeignMatters">Foreign Matters</option>
          </select>
        </div>

        {/* SHIPPING FEE PAID BY */}
        <div className="modalForm">
          <label htmlFor="shippingFee">Shipping fee paid by:*</label>
          <select
            name="shippingFeePaidBy"
            id="shippingFee"
            required
            // value={formData.shippingFee}
            onChange={onInputChange}
          >
            <option value="">Select</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        <div className="modalForm">
          <label htmlFor="commodityName">Commodity Name*</label>
          <input
            type="text"
            name="commodityName"
            id="commodityName"
            required
            value={formData.commodityName}
            onChange={onInputChange}
          />
        </div>

        <div className="modalForm">
          <label htmlFor="date-picker">Delivery date*</label>
          <input
            type="date"
            name="deliveryDate"
            id="delivery_date"
            required
            dateformat="dd/MM/yyyy"
            value={formData.deliveryDate}
            onChange={onInputChange}
          />
        </div>
        <div className="modalForm">
          <label htmlFor="price">Price*</label>
          <span>
            <input
              type="number"
              placeholder="0.00"
              name="price"
              id="price"
              value={formData.price}
              required
              onChange={onInputChange}
            />
          </span>
        </div>
        <div className="modalForm">
          <label htmlFor="price">Shipping Fee*</label>
          <span>
            <input
              type="number"
              placeholder="0.00"
              name="shippingFee"
              id="price"
              value={formData.shippingFee}
              required
              onChange={onInputChange}
            />
          </span>
        </div>
        <div className="modalForm">
          <label htmlFor="commodityDescription">Commodity Specification*</label>
          <textarea
            name="commodityDescription"
            cols="20"
            rows="3"
            required
            value={formData.commodityDescription}
            onChange={onInputChange}
            id="description"
            className="border-2 border-gray-200 rounded-md "
          ></textarea>
        </div>

        <div className="col-span-2 text-center">
          <button className="flex mx-auto justify-center items-center gap-3 flex-row-reverse px-4 py-1" type="submit">
            <FaChevronRight />
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default Details;
