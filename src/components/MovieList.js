import React from "react";
// import { Link } from "react-router-dom";
import Search from "./Search";
import MovieItem from "./MovieItem";

 

const MovieList=(props) =>{
  const { movies } = props;

  const { handleChange, text, submitForm } = props;
  //  console.log(movies)
  return (
    <React.Fragment>
      <div className="main-container{">
        <Search
          submitForm={submitForm}
          handleChange={handleChange}
          text={text}
        />
      </div>

      <div className="list__container">
        { movies && movies.map(item => {
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