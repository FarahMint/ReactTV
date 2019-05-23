import React from 'react'
import logo from "../logo.png";

import { NavLink } from 'react-router-dom'
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation =(props) =>{
  // console.log(props.selection.length) 
      const pathname = window.location.pathname;
      
  return (
     <header className="header header-logo">
            <img src={logo} alt="logo react tv web app" />
              <nav className="navbar">
              <ul>
              <li>
                   <NavLink 
                   to="/" 
                    className={ pathname === '/' ? 'selected' : '' } >
                 
                    <FontAwesomeIcon icon={faHome} className="icon-home" />
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