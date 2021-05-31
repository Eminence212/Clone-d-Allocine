import React from 'react'
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
function ButtonNavigation({ numPage, nextPage, previousPage, total_pages}) {
    return (
        <div className="row bouton-navigation">
            {

                numPage === 1 ? <>{"Page " + numPage + " sur "+total_pages} <span onClick={(e) => nextPage(e)} ><FaAngleDoubleRight/></span></>  : numPage === total_pages ? <>{"Page " + numPage + " sur "+total_pages}<span onClick={(e) => previousPage(e)}><FaAngleDoubleLeft/></span></> : (numPage <= total_pages) ? <><span onClick={(e) => previousPage(e)}><FaAngleDoubleLeft/></span>{"Page " + numPage + " sur "+total_pages}<span onClick={(e) => nextPage(e)}><FaAngleDoubleRight/></span></> : null
            }
        </div>
    )
}
export default ButtonNavigation
