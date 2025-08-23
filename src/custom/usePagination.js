import React, { useState } from 'react'

function usePagination(items=[], initialPage = 1, itemsPerPage = 5) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
    };

    const totalPages = Math.ceil(items?.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = items.slice(indexOfFirstItem, indexOfLastItem);

    return {
        currentPage,
        nextPage,
        prevPage,
        goToPage,
        itemsPerPage,
        totalPages,
        currentData,
    };
}

export default usePagination