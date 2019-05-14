import React from 'react';
 

import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const  MovieSelection =(props)=> {
   const {selection}= props
  return (
    <div>
       <div className="main-container">
      { (selection && selection.length > 0 )? <h1>your selection</h1> :  <h1>Select your favorite movies</h1>
      }

    
      {selection && selection.map(item=> {
        return(
          
          <div className="card__container" key={item.id}>
            <img
              src={`http://image.tmdb.org/t/p/w185/${ item.poster_path}`}
              alt={ item.title || item.name}
            />
            <div className="movie__desc-details">
              <h1>{item.title || item.name}</h1>
              {/*  <FontAwesomeIcon  icon={faHandPointLeft} />*/}
              <span>
                <FontAwesomeIcon icon={faStar} className="icon-star" />
                {item.vote_average}
              </span>
              - <span>{item.vote_count} votes - </span>
              <span>release date:{item.release_date}</span>
              <p>{item.overview}</p>

                  <button 
             type="button" 
             className="btn__remove-selection"
             onClick={()=>props.handleDelete(item.id)}>remove</button>
            </div>
         
          </div>
        )
      })}
        </div> 
    </div>
  )
}
export default MovieSelection;