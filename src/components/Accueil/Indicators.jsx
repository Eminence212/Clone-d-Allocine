import React from 'react'

function Indicators() {
    return (
        <ol className="carousel-indicators">
            <li data-target="#sliderAccueil" data-slide-to={0} className="active" />
            <li data-target="#sliderAccueil" data-slide-to={1} />
            <li data-target="#sliderAccueil" data-slide-to={2} />
        </ol>
    )
}

export default Indicators
