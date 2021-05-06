import React from 'react'

import Indicators from './Indicators'
import Carousel from './Carousel'
import BoutonPrecedent from './BoutonPrecedent'
import BoutonSuivant from './BoutonSuivant'
function Accueil() {
    return (

        <div id="sliderAccueil" className="carousel slide" data-ride="carousel">
            <Indicators/>
            <Carousel/>
            <BoutonPrecedent/>
            <BoutonSuivant/>
        </div>

    )
}

export default Accueil
