import React from 'react'
import {
    MdSearch
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
function SearchBox({showSearchBox,handleShowSearchBox}) {
    return (
        <span>
            <NavLink to="/movies-search" ><MdSearch /></NavLink>
        </span>
      
    )
}

export default SearchBox
