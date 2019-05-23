import React from 'react';
 

import MovieList from "../../Movies/MoviesList/MovieList";
import MarketingMaterial from "../../MarketingMaterial/MarketingMaterial"
import Tabs from "./Tabs";

import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const  MoviesMenu =(props) =>{
    return (

        <Tabs>
      <div label="movie &amp; tv show result">
   
      <MovieList 
       movies={props.movies } 
       addSelection={props.addSelection} /> 
      </div>

      <div label="how it works">
   
      <MarketingMaterial/>
      </div>

      <div label="pick your price">
    <p  className="text-lg">
      
      Just kidding, it is free, hope you enjoy the experience. You can see my projects @ 
        <a href="h​ttps://github.com/FarahMint">
      <FontAwesomeIcon
                   icon={faCat} 
                  className="icon-cat"
                  title="github link FarahMint"
                   /></a>
      </p>  
      
                   
      </div>
    </Tabs>


       
    )
}
export default MoviesMenu;