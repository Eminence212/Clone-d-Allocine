import React, { useState,useEffect} from 'react'
import Accueil from './Accueil/Accueil'
import AlaUne from './sections/AlaUne'
import SectionFimsPopulaires from './sections/SectionFimsPopulaires'

function Main({ genresMovies}) {
    return (
        <div className="main">
            <Accueil />
            <AlaUne genresMovies={genresMovies} />
            <SectionFimsPopulaires genresMovies={genresMovies} />
            
        </div>        
    )
}
export default Main
