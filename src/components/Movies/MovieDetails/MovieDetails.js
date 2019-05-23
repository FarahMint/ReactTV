import React, { Component } from "react";
import { grabSelectedMovie } from "../../../Api";



// get our fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./movieDetails.css"
export default class MovieDetails extends Component {
  state = {
    movie: [],
    id: ""
  };

  getSelectedMovie = async () => {
    try {
      let id = await this.props.match.params.id;

      this.setState({ id });

      const data = await grabSelectedMovie(this.state.id);

      const jsondata = await data;
      this.setState({
        movie: jsondata
      });
      // console.log(this.state.movie);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getSelectedMovie();
  }

  render() {
    const {
      title,
      overview,
      poster_path,
      release_date,
      vote_average,
      vote_count
    } = this.state.movie;
    return (
      <React.Fragment>
        
           

          <div className="card__container">

            <img
              src={`http://image.tmdb.org/t/p/w185/${poster_path}`}
              alt={title}
            />

            <div className="movie__desc-details">
              <h1>{title}</h1>
              {/*  <FontAwesomeIcon  icon={faHandPointLeft} />*/}
              <span className="icon-star">
                <FontAwesomeIcon icon={faStar}/>
                { vote_average } - { vote_count } votes. </span>
              <h3>release date:{release_date}</h3>
              <p>{overview}</p>
            </div>
          </div>
      
      </React.Fragment>
    );
  }
}
