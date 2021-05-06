import React from 'react'
import {
    MdSearch
   } from 'react-icons/md'
function SearchBox({showSearchBox,handleShowSearchBox}) {
    return (
     <span className = "input-group rounded d-flex align-items-center justify-content-center" >
            {
                showSearchBox ?<><input type="search" name="searchBox" id="searchBox" className = "form-control rounded " 
                placeholder="Recherche par titre du film" aria-label="Search"
                aria-describedby="search-addon"
            /> <MdSearch onClick = {() =>handleShowSearchBox()} /></>:
              <MdSearch onClick = {() =>handleShowSearchBox()} />
              }
        </span>
      
    )
}

export default SearchBox
