import React from "react";

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./search.css";

const Search =(props) =>{
  
   const { handleChange , text, submitForm} = props;
   
  return (
   
      <form onSubmit={submitForm}>
        <input
          type="text"
         onChange={handleChange}
         value={text}
        placeholder="Search for a movie or tv show..." />
    
        <button type="submit">
          <FontAwesomeIcon  className="icon-search" icon={faSearch} /> </button>
      </form>
    
  );
 

}
export default Search;
