import React from 'react'
import { Link } from "react-router-dom";
 
import "./movieItem.css";

// get our fontawesome imports
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MovieItem=(props)=> {
    const {item}= props;
   
  return (
<React.Fragment>
    <div id="tab-1-content" className="tab-content-item show">
      <div className="tab-1-content-inner movie__card">
        <div>
            <img
                  src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                />
            <div className="overlay">
              <Link to={`/${item.id}`}>
              <p>see more details</p>
              </Link>

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
      </div>
    </div>
</React.Fragment>
  )
}
export default MovieItem;