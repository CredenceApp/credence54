import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { BsBagPlus } from "react-icons/bs";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import usePagination from "custom/usePagination";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/new_logo.svg";
import BecomeSeller from "./modalFolder/becomeSeller/BecomeSeller";
import RequestCommodity from "./modalFolder/requestCommodity/RequestCommodity";
import SuccessModal from "./modalFolder/successModal/SuccessModal";
import { getCommodityRequest } from "redux/slices/marketplace";
import { useDispatch } from "react-redux";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import SideModal from "./modalFolder/sideModal/SideModal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function MarketPlace({ props }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [sellerModal, setSellerModal] = useState(false);
  const [rfq, setRfq] = useState([]);
  const [commodityModal, setCommodityModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [sideModal, setSideModal] = useState(false);
  const navigate = useNavigate();
  const { currentPage, totalPages, currentData, nextPage, prevPage, goToPage } =
    usePagination(rfq);

  const fetchData = async () => {
    setIsLoading(true);
    await dispatch(getCommodityRequest()).then((res) => {
      console.log("RFQ", res.payload?.commodities);
      setRfq(res.payload?.commodities);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEyeClick = (rowData) => {
    setSelectedRowData(rowData);
    setSideModal(true);
  };

  return (
    <div className="p-4 overflow-y-scroll mb-9">
      <div className="flex flex-col gap-3 lg:gap-1 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-dashHeader leading-[36px] font-thicker">
          Marketplace
        </h2>
        <div className="maerket_btns flex flex-col md:flex-row gap-2">
          <button className="border-2 border-newCredenceGreen text-newCredenceGreen text-base w-fit flex items-center gap-2 px-[24px] py-[10px] rounded-[8px] font-thick">
            <span>
              <BsBagPlus />
            </span>
            <span onClick={() => setSellerModal(true)}>Become a Seller</span>
          </button>
          <button
            onClick={() => setCommodityModal(true)}
            className="border-2 border-newCredenceGreen text-newCredenceGreen text-base flex items-center gap-2 w-fit px-[24px] py-[10px] rounded-[8px] font-thick"
          >
            <span>
              <BsBagPlus />
            </span>
            <span>Buy Commodities</span>
          </button>
        </div>
      </div>
      <div className="table_container mt-10 p-2 lg:p-4">
        <div className="flex flex-col gap-3 lg:gap-1 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-subDashHeader font-thickShade">
            Commodities Requested (RFQ)
          </h2>
          {/* <div className="filter_container border border-grey300 py-3 px-4 flex w-fit gap-4 rounded-xl cursor-pointer">
            <span className="text-grey300 text-sm font-light">Filter</span>
            <span className="text-grey300">
              <BiFilterAlt />
            </span>
          </div> */}
        </div>
        <div className="overflow-scroll">
          <table className="lg:w-[97%] lg:mx-auto mt-10">
            <thead className="border-b border-b-grey200">
              <tr>
                <th className="bg-white text-grey300 text-base font-light">
                  #
                </th>
                <th className="bg-white text-grey300 text-base font-light">
                  Buyer Name
                </th>
                <th className="bg-white text-grey300 text-base font-light">
                  Commodity
                </th>
                <th className="bg-white text-grey300 text-base font-light">
                  Order Date
                </th>
                <th className="bg-white text-grey300 text-base font-light">
                  Target Price
                </th>
                <th className="bg-white text-grey300 text-base font-light">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {!currentData  ? (
                <tr className="border-b border-b-grey200 font-thin">
                  <td
                    colSpan={5}
                    className="text-center text-grey900 font-thin text-base"
                  >
                    No commodities requested on the market place.
                  </td>
                </tr>
              ) : isLoading ? (
                <tr className="border-b border-b-grey200 font-thin">
                  <td
                    colSpan={5}
                    className="text-center text-grey900 font-thin text-base"
                  >
                    <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
                  </td>
                </tr>
              ) : (
                currentData.map((items, index) => (
                  <tr
                    key={index}
                    className="border-b border-b-grey200 font-thin"
                  >
                    <td className="text-grey900 font-thin text-base">
                      {index + 1}
                    </td>
                    <td className="text-grey900 font-thin text-base">
                      {items?.tradingCompany}
                    </td>
                    <td className="text-grey900 font-thin text-base">
                      {items?.commodityName?.slice(0, 2).join(", ")}
                    </td>
                    <td className="text-grey900 font-thin text-base">
                      {new Date(items?.createdAt).toLocaleDateString()}
                    </td>
                    <td className="text-grey900 font-thin text-base flex items-center">
                      <span>
                        <TbCurrencyNaira />
                      </span>
                      <span> {items?.price?.toLocaleString()}</span>
                    </td>
                    <td>
                      <span
                        className="text-2xl text-credenceGreen cursor-pointer"
                        onClick={() => handleEyeClick(items)}
                      >
                        <FaEye />
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-controls mt-4 flex justify-between p-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="mr-2 border border-gray-200 px-3 py-2 rounded-lg text-sm flex items-center gap-2"
        >
          <span>
            <FaArrowLeft />
          </span>
          <span>Previous</span>
        </button>
        <div>
          {/* Display the buttons for the current page, the previous page, and the next page */}
          {[currentPage - 1, currentPage, currentPage + 1].map((pageNumber) => {
            // Only render the button if the page number is within the valid range
            if (pageNumber >= 1 && pageNumber <= totalPages) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`mx-1 px-3 py-2 rounded-lg text-sm border border-gray-200 ${
                    currentPage === pageNumber
                      ? "bg-schemesPrimary text-white"
                      : ""
                  }`}
                >
                  {pageNumber}
                </button>
              );
            }
            return null;
          })}

          {/* Display ellipsis if there are more pages to the left */}
          {currentPage > 2 && currentPage < totalPages ? (
            <span>...</span>
          ) : (
            currentPage === totalPages && <span></span>
          )}

          {/* Display ellipsis if there are more pages to the right */}
          {currentPage < totalPages - 1 && <span>...</span>}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="ml-2 border border-gray-200 px-3 py-2 rounded-lg text-sm flex items-center gap-2"
        >
          <span>Next</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      {sellerModal && (
        <BecomeSeller
          show={sellerModal}
          hide={() => setSellerModal(false)}
          props={props}
        />
      )}
      {commodityModal && (
        <RequestCommodity
          show={commodityModal}
          hide={() => setCommodityModal(false)}
        />
      )}
      {commodityModal && (
        <SuccessModal show={success} hide={() => setSuccess(false)} />
      )}

      {sideModal && (
        <SideModal
          show={sideModal}
          hide={() => setSideModal(false)}
          rowData={selectedRowData}
        />
      )}
    </div>
  );
}

export default MarketPlace;
