import React, { Component } from "react";
import { BrowserRouter, Route
} from "react-router-dom";

import { grabAll, search, position } from "./Api";
import Spinner from "./components/Spinner/Spinner";
import Home from "./components/Home/Home"
// import MovieList from "./components/Movies/MovieList";

import Navigation from "./components/Navigation/Navigation";
import MovieDetails from "./components/Movies/MovieDetails/MovieDetails";
import MovieSelection from "./components/Movies/MoviesSelection/MovieSelection";

import "./App.css";

class App extends Component {
  state = {
    loading: false,
    movies: [],
    searchTerm: "",
    selection:[],

    prevScrollpos: window.pageYOffset,
    visible: true
  };

  // ------------------------------------
  // Display all movies
  // ------------------------------------

  latestMovies() {
    const {movies} = this.state
if(movies){
    // 1-get movies toLS
    const json = localStorage.getItem("movies");
    const movies = JSON.parse(json);
    this.setState({ movies });
} else{
  
    grabAll(this.state.searchTerm)
    .then(movies => {
      this.setState(prevState => ({
      loading: !prevState.loading,
       movies
      })
      );
    }).catch(err=> console.log(err));
    this.setState({ loading: true });
}

    
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
    
    position();
  };


 
    // ------------------------------------
  // add selection movies
  // ------------------------------------

  addSelection= (item)=>{
    //  1- check if selection is empty array
    if(this.state.selection === null) return this.setState({ selection: [ item]})
  //  2 -if selection is !empty spread the array
    this.setState((prevState)=>{
      return{   
       selection: [ item, ...prevState.selection] 
      } 
    }) 
    localStorage.setItem('selection', this.state.selection);

// console.log(this.state.favorite)
  }

  // ------------------------------------
  // delete movies selected
  // ------------------------------------

  handleDelete=(id)=>{
 
      this.setState((prevState)=>{
      return{
        selection:  prevState.selection.filter(item => item.id !== id)
      }
    })
  }


  // ------------------------------------
  // navbar visibility 
  // ------------------------------------

  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  


  componentDidMount() {
    this.latestMovies();
  

       const jsonSelection = localStorage.getItem("selection");
    const selection = JSON.parse(jsonSelection);
    this.setState({ selection });
       
 

  window.addEventListener("scroll", this.handleScroll);
  
  }

  componentDidUpdate(prevState, prevProps){
  const movies = JSON.stringify(this.state.movies);
  const selection = JSON.stringify(this.state.selection);
    // assign to local storage
    localStorage.setItem("movies", movies);
    localStorage.setItem("selection", selection);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
 




  render() {

 
    const { movies, selection, visible } = this.state;
 
    return (
      <React.Fragment>
       <BrowserRouter>
        <div className="main-container">
        <Navigation 
         selection={selection}
        visible={ visible  }/>
      {this.state.loading ? <Spinner /> : ""}  
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    movies={movies}
                    text={this.state.searchTerm}
                    handleChange={this.handleChange}
                    addSelection={this.addSelection}
                    performSearch={this.performSearch}
                    submitForm={this.submitForm}
                  />
                )}
              />
            <Route exact path="/:id" component={MovieDetails}/>

              <Route exact path='/user/selection' render={(props) => (
            <MovieSelection  {...props} 
            selection={selection}
            handleDelete={this.handleDelete}
            />
          )} />      
        </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
