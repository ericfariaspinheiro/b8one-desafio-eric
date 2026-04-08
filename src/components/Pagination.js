"use client";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

export default function Pagination({ currentPage, totalPages }) {

  const router = useRouter();

  const handlePageClick = (event) => {

    const page = event.selected + 1;

    router.push(`/ofertas?page=${page}`);

  };

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={currentPage - 1}

      onPageChange={handlePageClick}

      previousLabel="←"
      nextLabel="→"

      containerClassName="pagination"
      pageClassName="pagination__page"
      activeClassName="pagination__page--active"
    />
  );
}