import React from 'react'
import { Link } from "react-router-dom";
 


// get our fontawesome imports
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MovieItem=(props)=> {
    const {item}= props;
  return (
    <div className="movie__card">
              <Link to={`/${item.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                />
                  <div className="overlay">
                  <p>see more details</p>
               </div>
              </Link>
              <div className="movie__desc">

              <Link to={`/user/selection`}>
                <button 
                type="button" 
                className="btn__add-selection"
                onClick={()=>props.addSelection(item)}
                >
                  <FontAwesomeIcon
                   icon={faBookmark} 
                  className="icon-bookmark"
                  title="bookmark this movie"
                   />add to selection
                </button>
                 </Link>
                <span>
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  {item.vote_average}
                </span>
              </div>
            </div>
  )
}
export default MovieItem;