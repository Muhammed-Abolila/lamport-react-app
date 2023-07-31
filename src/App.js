import NavBar from "./Components/NavBar";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useEffect, useState } from "react";
import MovieDetails from "./Components/MovieDetails";
function App() {
  let [Data,setData]=useState([]);
  let [PagesCount,setPagesCount]=useState(0);

  async function fetchData(){
      let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
      let data = await response.json();
      setData( data.results);
      setPagesCount(data.total_pages);
  }

  async function paginationPage(pageNumber){
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&page=${pageNumber}`);
    let data = await response.json();
    setData( data.results);
}

    async function searchMovie(param){
      if(param==""){
        fetchData()
      }else{
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${param}`);
        let dataSearch = await response.json();
        setData( dataSearch.results);
        setPagesCount(dataSearch.total_pages);
      }    
  }

  useEffect(
    ()=>{
      fetchData();
    }
    ,[]);
    
  return (
    <div>
      
      <BrowserRouter>
          <NavBar searchMovie={searchMovie}/>
          <Routes>
            <Route path="/" element={<MovieList Data={Data} paginationPage={paginationPage} PagesCount={PagesCount}/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
