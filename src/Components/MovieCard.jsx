import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
const MovieCard=({Data})=>{             
    return(
        <section className="movieCard my-5">
            <div className="container">
                <div className="row justify-content-evenly">
                    {Data.length>=1?(
                        Data.map((ele,index)=>{
                            return(
                                <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
                                    <Link to={`/movie/${ele.id}`}>
                                        <Card className="card">
                                            <p className='rate'><span>{Math.round(ele.vote_average)}</span></p>
                                            <Card.Img className='img-card' variant="top" src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt={ele.original_title}/>
                                            <Card.Body className='overlay'>
                                                <div>
                                                    <Card.Title className="card-title">{ele.original_title}</Card.Title>
                                                            <ul className='movie-type-list list-unstyled text-center d-flex justify-content-center flex-wrap'>
                                                                {ele.genre_ids.map((id)=>{
                                                                    if(id==35){
                                                                        return(<li className='movie-type'>Comedy</li>)
                                                                    }else if(id==12){
                                                                        return(<li className='movie-type'>Adventure</li>)
                                                                    }
                                                                    else if(id==14){
                                                                        return(<li className='movie-type'>Fantasy</li>)
                                                                    }
                                                                    else if(id==28){
                                                                        return(<li className='movie-type'>Action</li>)
                                                                    }
                                                                    else if(id==36){
                                                                        return(<li className='movie-type'>History</li>)
                                                                    }
                                                                    else if(id==878){
                                                                        return(<li className='movie-type'>Science</li>)
                                                                    }
                                                                    else if(id==16){
                                                                        return(<li className='movie-type'>Animation</li>)
                                                                    }
                                                                    else if(id==10751){
                                                                        return(<li className='movie-type'>Family</li>)
                                                                    }
                                                                    else if(id==10749){
                                                                        return(<li className='movie-type'>Romance</li>)
                                                                    }
                                                                    else if(id==80){
                                                                        return(<li className='movie-type'>Crime</li>)
                                                                    }
                                                                    else if(id==53){
                                                                        return(<li className='movie-type'>Thriller</li>)
                                                                    }
                                                                    else if(id==10752){
                                                                        return(<li className='movie-type'>War</li>)
                                                                    }
                                                                    else if(id==18){
                                                                        return(<li className='movie-type'>Drama</li>)
                                                                    }
                                                                    else if(id==27){
                                                                        return(<li className='movie-type'>Horror</li>)
                                                                    }
                                                                })}
                                                                
                                                            </ul>
                                                    <Card.Text className='card-text'>Release Date:- {ele.release_date}</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })
                    ):<h2 className='vh-100 d-flex justify-content-center align-items-center'>No Data Yet</h2>}
                </div>
            </div>
        </section>
    );
};
export default MovieCard;