import MovieCard from "./MovieCard";
import Paginate from "./Paginate";
const MovieList=({Data,paginationPage ,PagesCount})=>{
    
    return(
        <div>
            <MovieCard Data={Data}/>
            <Paginate paginationPage={paginationPage} PagesCount={PagesCount}/>
        </div>
    );
};
export default MovieList;