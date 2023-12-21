import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, PageToBeChange }) => {
  const handlePrevClick = () => {
    PageToBeChange(currentPage - 1);
  };

  const handleNextClick = () => {
    PageToBeChange(currentPage + 1);
  };

  return (
    <div className={styles.containerPagination}>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
