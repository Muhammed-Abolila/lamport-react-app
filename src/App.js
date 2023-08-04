import NavBar from "./Components/NavBar";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
};
export default App;
