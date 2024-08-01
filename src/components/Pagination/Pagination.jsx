// components/Pagination/Pagination.jsx
import s from "./Pagination.module.css";
import clsx from "clsx";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const totalPagesToShow = 10;
    const currentRange =
      Math.floor((currentPage - 1) / totalPagesToShow) * totalPagesToShow;
    const startPage = currentRange + 1;
    const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);
    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className={s.pagination}>
      {currentPage > 1 && (
        <button
          className={s.pageButton}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt;
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          className={clsx(s.pageButton, currentPage === page && s.active)}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className={s.pageButton}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
