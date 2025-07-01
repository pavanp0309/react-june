import {useEffect,useState} from 'react'
import fetchMovies from '../../api/movieApi';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {
    let [movies, setMovies] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let res = await fetchMovies(); // the returned data from fetchmovies is stored in res
      // and updated in movies through setMovies
      setMovies(res);
    };
    fetchData();
  }, []);

  // destructure the Id from the Url 
   const {movieId}=useParams()
   console.log(movieId)


   let imgUrl = `https://image.tmdb.org/t/p/w500`;

  //  logic For Printing the Details Of Cliked Card 
  let MovieDetails=movies.find(ele=>ele.id==movieId)
  console.log(MovieDetails)


  return (
<div className="container p-3">
      <div className="card my-3  mx-auto" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`${imgUrl}${MovieDetails?.poster_path}`} className="" alt="..." height={"300px"} width={"100%"}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{MovieDetails?.original_title}</h5>
        <p className="card-text">{MovieDetails?.overview}</p>
        <p className="card-text"><small className="text-body-secondary">{MovieDetails?.release_date}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default MovieDetails
