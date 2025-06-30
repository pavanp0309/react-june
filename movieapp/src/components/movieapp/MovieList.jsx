import { useEffect, useState } from "react";
import fetchMovies from "../../api/movieApi";
import MovieCard from "./MovieCard";

const MovieList = () => {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let res = await fetchMovies(); // the returned data from fetchmovies is stored in res
      // and updated in movies through setMovies
      setMovies(res);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
       <div className="row">
        {
            movies?.map((movie)=>(
                <MovieCard {...movie} />
            ))
        }
       </div>
    </div>
  )
};

export default MovieList;
