import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMovies, getMoviesSearch } from '../Redux/Actions/getAllMovies';
const NavBar=()=>{
    let dispatch=useDispatch();
    function searchMovie(word){
        if(word==""){
            dispatch(getAllMovies());
        }else{
            dispatch(getMoviesSearch(word));
        } ;   
    };
    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="#" className="brand">
                    <Link to="/"> Lamport </Link>
                </Navbar.Brand>
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="w-75 "
                    aria-label="Search"
                    onChange={(e)=>searchMovie(e.target.value)}
                    />
            </Container>
        </Navbar>
    );
};
export default NavBar;

