import {
     MdMenu, 
     MdClose ,
     MdSettings
    } from 'react-icons/md'
import { useState } from "react";
import SearchBox from './SearchBox';

const Header = () =>{
    const [showLinks,setShowLinks] = useState(false)
     const [showSearchBox,setShowSearchBox] = useState(false)
     const handleShowSearchBox = () =>{
         setShowSearchBox(!showSearchBox)
     }
    const handleClick = ()=>{
        setShowLinks(!showLinks)
    }
    return(
    <header id="header" className="fixed-top entete">
        <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo me-auto"><a href="/index.html"><span>Emi</span>Stream</a></h1>
        <SearchBox showSearchBox = {showSearchBox} handleShowSearchBox = {handleShowSearchBox} />
        
        <nav id="navbar" className={"navbar " + (showLinks? "navbar-mobile" : null)}>
            <ul>
                <li><a className="nav-link scrollto" href="/">Accueil</a></li>
                <li><a className="nav-link scrollto" href="/">Films</a></li> 
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


