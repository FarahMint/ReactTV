import React from 'react';
import Search from "../Search/Search";
import MoviesMenu from "../Movies/MoviesMenu/MoviesMenu";
import showcase from "../../showcase.jpg";
 import "./home.css"

const Home=(props) =>{

const divStyle = {
height: "90vh",
width:"100%",
position:"relative",
backgroundImage:
      "url(" +
      showcase +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };

  const { movies } = props;

  const { handleChange, text, submitForm } = props;
  //  console.log(movies)
  return (
    <React.Fragment>

      <div className="showcase"  style={divStyle}>
        <div className="showcase-content">

            <h1>See what's next</h1>
            <p>search for a movie and build your own library</p>
            <Search
          submitForm={submitForm}
          handleChange={handleChange}
          text={text}
        />
 
        </div>
    </div>

   <MoviesMenu
     movies={movies } 
     addSelection={props.addSelection} 
     position={props.position} />
    
    </React.Fragment>
  );
}
export default Home;