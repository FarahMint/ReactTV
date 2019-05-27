import React from "react";
  import { Link } from "react-router-dom";
import MovieItem from "./MovieItem/MovieItem";
 

 import "./movieList.css"

const MovieList=(props) =>{
 
  const { movies } = props;
const title =  movies ? (<h1>Search TV Show Results</h1>) : 
(<Link to="/#search"
onClick={ props.position}>
<h1>No search yet, Start searching a movie.</h1> </Link>);

  //  console.log(movies)
  return (
    <React.Fragment>
      <div className="text-lg">
              {title }
      </div>
      

      <div className="list__container">
         
        { movies
        && movies.map(item => {
          return <MovieItem 
          key={item.id}  
          item={item}
           addSelection={props.addSelection}      
           />
        })}
      </div>
    </React.Fragment>
  );
}
export default MovieList;