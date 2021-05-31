import React from 'react'

function ButtonNavigation({ numPage, nextPage, previousPage, total_pages}) {
    return (
        <div className="row bouton-navigation">
            {

                numPage === 1 ? <>{"Page " + numPage + " sur "+total_pages} <span onClick={(e) => nextPage(e)} >Page suivante</span></>  : numPage === total_pages ? <>{"Page " + numPage + " sur "+total_pages}<span onClick={(e) => previousPage(e)}>Page précédente</span></> : (numPage <= total_pages) ? <><span onClick={(e) => previousPage(e)}>Page précédente</span>{"Page " + numPage + " sur "+total_pages}<span onClick={(e) => nextPage(e)}>Page suivante</span></> : null
            }
        </div>
    )
}
export default ButtonNavigation
