import React from 'react'

function ButtonNavigation({ numPage, nextPage, previousPage, total_pages}) {
    return (
        <div className="row bouton-navigation">
            {

                numPage === 1 ? <span onClick={(e) => nextPage(e)} >Page suivant</span> : numPage === total_pages ? <span onClick={(e) => previousPage(e)}>Page précédente</span> : (numPage <= total_pages) ? <><span onClick={(e) => previousPage(e)}>Page précédente</span><span onClick={(e) => nextPage(e)}>Page suivant</span></> : null
            }
        </div>
    )
}
export default ButtonNavigation
