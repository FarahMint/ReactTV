import React from 'react';
import { faBookmark ,  faTv, faLaptop} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

import "./marketing.css";


const  MarketingMaterial =() => {
    return (
        <React.Fragment>
            <div id="tab-2-content" className="tab-content-item">
                <div className="tab-2-content-top">
                    <p className="text-lg">
                       build your own library of tv shows &amp; movies you like or want to watch.
                    </p>
                    <a 
                    href="https://github.com/FarahMint/ReactTV" 
                    type="button" 
                    target="_blank" 
                     rel="noopener noreferrer"
                     title="link to my github repo" 
                     className="btn btn-lg">
                         free tool build with React.js</a>
                </div>

                <div className="tab-2-content-bottom">
                    <div>
                    <FontAwesomeIcon
                   icon={faBookmark} 
                  className="icon-bookmark"
                  title="bookmark this movie"
                   />
                <p className="text-md">select any movie or show of interest.</p>
                    </div>

                    <div>
                    <FontAwesomeIcon
                   icon={faTv} 
                  className="icon-TV"
                  title="responsive web app"
                   />
                <p className="text-md">this is a responsive web app.</p>
                    </div>
                    <div>

                    <FontAwesomeIcon
                   icon={faLaptop} 
                  className="icon-laptop"
                  title="use any computer"
                   />
                        <p className="text-md">datafetched with movieDB API.</p>
                       
                    </div>
                </div>    

            </div>
        </React.Fragment>
             
    )
}


export default MarketingMaterial;