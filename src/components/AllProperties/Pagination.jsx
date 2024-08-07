import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<FiChevronsRight />}
      pageRangeDisplayed={2}
      previousLabel={<FiChevronsLeft />}
      renderOnZeroPageCount={null}
      containerClassName="wb-pagination"
      pageClassName="pagination-item"
      pageLinkClassName="pagination-link"
      activeClassName="pagination-link-active"
      previousLinkClassName="prev"
      nextLinkClassName="next"
      disabledClassName="disabled"
    />
  );
};

export default Pagination;
