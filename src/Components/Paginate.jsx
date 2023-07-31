import React from 'react'
import ReactPaginate from "react-paginate"
const Paginate = ({paginationPage,PagesCount}) => {
    function handlePageClick(value){
        paginationPage(value.selected+1);
        console.log(value);
    }
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        pageCount={PagesCount<=500?PagesCount:500}
        previousLabel="previous"
        containerClassName='pagination justify-content-center'
        nextClassName='page-item'
        nextLinkClassName='page-link next-link'
        previousClassName='page-item'
        previousLinkClassName='page-link prev-link'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'
      />
  )
}

export default Paginate
