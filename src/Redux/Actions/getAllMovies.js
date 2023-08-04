import axios from "axios";
import { ALLMOVIES, ALLMOVIESAPI, MOVIEBYID } from "../Types/type"
export const getAllMovies=()=>{
    return async(dispatch)=>{
        let response =await axios.get(ALLMOVIESAPI);
        dispatch({type:ALLMOVIES,data:response.data.results,pages:response.data.total_pages})
    }
};
export const getMovieDetails=(idParam)=>{
    return async(dispatch)=>{
        let response =await axios.get(`https://api.themoviedb.org/3/movie/${idParam}?api_key=44f29529c8bf03d698c2c52509a2607f&append_to_response=videos,reviews,similar,credits`);
        dispatch({type:MOVIEBYID,data:response.data})
    }
};
export const getMoviesSearch=(word)=>{
    return async(dispatch)=>{
        let response =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${word}`);
        dispatch({type:ALLMOVIES,data:response.data.results,pages:response.data.total_pages})
    }
};
export const paginationPage=(pageNumber)=>{
    return async(dispatch)=>{
        let response =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&page=${pageNumber}`);
        dispatch({type:ALLMOVIES,data:response.data.results,pages:response.data.total_pages})
    }
};