import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from './Spinner';
const MovieDetails = () => {
  let [DataById,setDataById]=useState([])
  let idParam=useParams();
  async function fetchDataById(){
    let response=await fetch(`https://api.themoviedb.org/3/movie/${idParam.id}?api_key=44f29529c8bf03d698c2c52509a2607f&append_to_response=videos,reviews,similar,credits`);
    let data = await response.json();
    setDataById( data);
}
useEffect(
  ()=>{
    fetchDataById()
  }
  ,[]);
  return ( 
      <div>
        {DataById?
        (
          <div>
          <div className='details' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${DataById.backdrop_path})`}}>
            <div className="overlay d-flex justify-content-between align-items-center">
              <div className="container">
                <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center">
                  <div>
                    <div className="caption">
                      <h3>{DataById.original_title}</h3>
                      <h4>Date:- {DataById.release_date}</h4>
                      <p>{DataById.overview}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="image">
                    <img className='w-100' src={`https://image.tmdb.org/t/p/w500${DataById.poster_path}`} alt={DataById.original_title} />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons my-3 d-flex justify-content-center align-items-center">
            <div className="btn btn-danger px-4 me-2">
              <a href={DataById.homepage?(DataById.homepage):null} target='_blank'>Watch</a>
            </div>
            <div className="btn btn-danger px-4 ms-2">
              <Link to="/">Home</Link>
            </div>
          </div>
          </div>
        )
        :<Spinner/>}
      </div>
  )
}

export default MovieDetails
