import React from 'react'
import Accueil from './Accueil/Accueil'
import AlaUne from './sections/AlaUne'
import SectionFimsPopulaires from './sections/SectionFimsPopulaires'

function Main() {
    return (
        <div className="main">
              <Accueil />
              <SectionFimsPopulaires />
              <AlaUne/>
        </div>
      
        
    )
}

export default Main