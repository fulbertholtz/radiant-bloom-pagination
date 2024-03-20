import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

/**
 * A customizable pagination component for React applications.
 * @param {Object} props - The props object.
 * @param {number} props.pageCount - The total number of pages.
 * @param {function} props.onPageChange - The callback function triggered when a page is changed.
 * @returns {JSX.Element} - The pagination component.
 */
const RadiantBloomPagination = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  /**
   * Handles the change of selected page.
   * @param {number} selectedPage - The selected page number.
   */
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={({ selected }) => handlePageChange(selected)}
      forcePage={currentPage}
      containerClassName={'pagination'}
      activeClassName={'active'}
      previousLabel={'Previous'}
      nextLabel={'Next'}
    />
  );
};

export default RadiantBloomPagination;
