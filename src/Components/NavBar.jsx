import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar=({searchMovie})=>{
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

