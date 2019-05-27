import React from 'react'


import { NavLink } from 'react-router-dom'
import { faHome, faTv} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./navigation.css"

const Navigation =(props) =>{
  // console.log(props.selection.length) 
      const pathname = window.location.pathname;
 
  return (
     <header 
    className="header">
           <FontAwesomeIcon icon={faTv} className="header-logo" title="logo react tv"/>
              <nav className="navbar">
              <ul>
              <li> 
                   <NavLink 
                   to="/" 
                    className={ pathname === '/' ? 'selected' : '' } >
                 
                    <FontAwesomeIcon icon={faHome} className="icon-home" title="home Page" />
                   </NavLink>
              </li>
          <li><NavLink 
          to="/user/selection"
            className={ pathname === '/user/selection' ? 'selected' : '' }
            >your selection
         
         {props.selection && props.selection.length > 0 ? 
          ( <span className="badge">{props.selection.length}</span> )
          :(null) }
        
        </NavLink></li>    
              </ul>
              </nav>
 
          </header>
  )
}
export default  Navigation;