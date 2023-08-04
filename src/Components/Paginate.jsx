import React from 'react'
import ReactPaginate from "react-paginate"
import { useDispatch, useSelector } from 'react-redux'
import { paginationPage } from '../Redux/Actions/getAllMovies';
const Paginate = () => {
  let pageCount=useSelector((state)=>state.moviesReducer.pageCount);
  let dispatch=useDispatch()
    function handlePageClick(value){
      dispatch(paginationPage(value.selected+1));
    };
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        pageCount={pageCount<=500?pageCount:500}
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
};
export default Paginate
