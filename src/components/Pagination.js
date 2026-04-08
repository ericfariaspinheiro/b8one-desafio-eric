"use client";

import ReactPaginate from "react-paginate";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {

  if (!totalPages) return null;

  return (
    <ReactPaginate

      pageCount={totalPages}

      forcePage={currentPage - 1}

      onPageChange={(event) =>
        onPageChange(event.selected + 1)
      }

      previousLabel="←"
      nextLabel="→"

      containerClassName="pagination"
      pageClassName="pagination__page"
      activeClassName="pagination__page--active"

    />
  );
}