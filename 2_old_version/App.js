import React, { Component } from "react";
import { BrowserRouter, Route, 
// Switch, 
// Redirect
} from "react-router-dom";
import "./App.css";
 
// import API from "./Api";
import { grabAll, search } from "./Api";
import Spinner from "./components/Spinner";
import MovieList from "./components/MovieList";

import Navigation from "./components/Navigation";
import MovieDetails from "./components/MovieDetails";
import MovieSelection from "./components/MovieSelection";


class App extends Component {
  state = {
    loading: false,
    movies: [],
    searchTerm: "",
    id: "",
    selection:[]
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
  
    grabAll(this.state.searchTerm).then(movies => {
      this.setState(prevState => ({
        loading: !prevState.loading,
       movies
      }));
    });
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
   
      
  };

  //  if form submited =true display result otherwise display default

  componentDidMount() {
    this.latestMovies();
    //    const json = localStorage.getItem("movies");
    // const movies = JSON.parse(json);
    // this.setState({ movies });

       const jsonSelection = localStorage.getItem("selection");
    const selection = JSON.parse(jsonSelection);
    this.setState({ selection });
       
  // const movies= localStorage.getItem('movies') ;
  // this.setState({ movies});
   

  }

  componentDidUpdate(prevState, prevProps){
  const movies = JSON.stringify(this.state.movies);
  const selection = JSON.stringify(this.state.selection);
    // assign to local storage
    localStorage.setItem("movies", movies);
    localStorage.setItem("selection", selection);
  }
 

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

  render() {

 
    const { movies, selection } = this.state;

    return (
      <React.Fragment>
       <BrowserRouter>
        <div className="main-container">
        <Navigation  selection={selection}/>
        
 

          {this.state.loading ? <Spinner /> : ""}
  
         
         
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
                    addSelection={this.addSelection}
                    performSearch={this.performSearch}
                    submitForm={this.submitForm}
                  />
                )}
              />
              {/* <Route exact path="/:id" component={MovieDetails} />} /> */}
              {/* <Redirect from="/:id" to="/selection"/> */}
            {/* <Route exact path="/selection" component={MovieSelection}/> */}
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
