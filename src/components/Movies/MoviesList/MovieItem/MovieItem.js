import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
 
import "./movieItem.css";

// get our fontawesome imports
import { faStar, faBookmark, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MovieItem=(props)=> {
    const {item}= props;
  // console.log("overview: ",item.overview)
  // console.log("length: ",item.overview.length)
  const overviewShort = item.overview.length > 100 ?
    (`${item.overview.substring(0, 100)}..`) :( item.overview)
       
   
  return (
<React.Fragment>
    <div className="tab-content-item show">
      <div className="tab-1-content-inner movie__card">
        <div className="sm">
            <img
                  src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                />
            <div className="overlay">
              <div className="lg-hidden">
                <h3>{item.title}</h3>
               <p>{overviewShort}</p>
           </div>
             
              <Link to={`/${item.id}`}>
              <button 
                type="button" 
                title="see more details about this movie"
                >details
                <FontAwesomeIcon
                   icon={faEye} 
                  className="icon"
                  title="see more details"
                   />
                </button>
        
              </Link>

              <Link to={`/user/selection`}>
          <button 
                type="button" 
                title="add it to your selection"
                onClick={()=>props.addSelection(item)}
                >select
          <FontAwesomeIcon
                   icon={faBookmark} 
                  className="icon"
                  title="bookmark this movie"
                   />
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

MovieItem.propTypes = {
  MovieItem:PropTypes.func
};

export default MovieItem;