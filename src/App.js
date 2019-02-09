import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import logo from "./logo.png";

// import API from "./Api";
import { grabAll, search } from "./Api";
import Spinner from "./components/Spinner";
import MovieList from "./components/MovieList";

import MovieDetails from "./components/MovieDetails";

class App extends Component {
  state = {
    loading: false,
    movies: [],
    searchTerm: "",
    id: ""
  };

  // ------------------------------------
  // Display all movies
  // ------------------------------------

  latestMovies() {
    grabAll(this.state.searchTerm).then(movies => {
      this.setState(prevState => ({
        loading: !prevState.loading,
        movies
      }));
      console.log(this.state.movies);
    });
    this.setState({ loading: true });
  }

  // ------------------------------------
  // search for movies
  // ------------------------------------
  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  };
  performSearch = () => {
    search(this.state.searchTerm).then(movies => {
      this.setState(prevState => ({
        loading: !prevState.loading,

        movies
      }));
      //  console.log(this.state.movies)
    });
  };

  submitForm = e => {
    e.preventDefault();

    this.performSearch();
    this.setState(prevState => ({
      loading: !prevState.loading,
      searchTerm: ""
    }));
  };

  //  if form submited =true display result otherwise display default

  componentDidMount() {
    this.latestMovies();
  }

  render() {
    const { movies } = this.state;

    return (
      <React.Fragment>
        <div className="main-container">
          <div className="header-logo">
            <img src={logo} alt="logo react tv web app" />
          </div>

          {this.state.loading ? <Spinner /> : ""}

          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                // component={MovieList}
                render={props => (
                  <MovieList
                    {...props}
                    movies={movies}
                    text={this.state.searchTerm}
                    handleChange={this.handleChange}
                    performSearch={this.performSearch}
                    submitForm={this.submitForm}
                  />
                )}
              />
              <Route exact path="/:id" component={MovieDetails} />} />
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
