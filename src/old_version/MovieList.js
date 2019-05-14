import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

// get our fontawesome imports
import { faStar, faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieList(props) {
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
        {movies.map(item => {
          return (
            <div key={item.id} className="movie__card">
              <Link to={`/${item.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <div className="movie__desc">
                {/* <Link to={`/${item.id}`}>
                  <button>see more details</button>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="icon icon-right"
                  />
                </Link> */}
                {/* <h1>{item.title}</h1> */}
                <p>
                  <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                </p>
                <p>
                  <FontAwesomeIcon icon={faBookmark} className="icon-heart" />
                </p>
                <p>
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  {item.vote_average}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
