import {
     MdMenu, 
     MdClose ,
     MdSettings
    } from 'react-icons/md'
import { useState } from "react";
import SearchBox from './SearchBox';
import { NavLink } from 'react-router-dom'
const Header = () =>{
    const [showLinks,setShowLinks] = useState(false)

    const handleClick = ()=>{
        setShowLinks(!showLinks)
    }
    return(
        <header id="header" className="fixed-top entete animate__animated animate__fadeIn animate__delay-0.6s">
        <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo me-auto"><NavLink to="/" exact ={true} ><span>Emi</span>Stream</NavLink></h1>
        <SearchBox/>
        
        <nav id="navbar" className={"navbar " + (showLinks? "navbar-mobile" : null)}>
            <ul>
                        <li><NavLink className="nav-link scrollto" to="/" exact={true}  onClick = {handleClick}  >Accueil</NavLink></li>
                        <li><NavLink className="nav-link scrollto" to="/movies-search"  onClick = {handleClick} >Films</NavLink></li>
                <li><a 
                className="nav-link scrollto" 
                id = "settings" 
                href = "/"
                data-bs-toggle="tooltip" data-bs-placement="left" title="Paramètres de recherche"
                 ><MdSettings/></a></li>
            </ul>
            <i className="mobile-nav-toggle" onClick = {handleClick} >
                {
                    showLinks? <MdClose/> : <MdMenu/>
                }
            </i>
        </nav>
              
        </div>
    </header>
)}
export default Header


