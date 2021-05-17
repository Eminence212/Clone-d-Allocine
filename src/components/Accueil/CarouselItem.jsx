import React from 'react'

import { BsInfoCircle } from 'react-icons/bs'
import { BiCaretRightCircle } from 'react-icons/bi'
function CarouselItem({ data }) {

    return (
        <div className={"carousel-item " + data.id === 1 ? "active" : null}>
            <img src={data.image} className="d-block w-100" alt="Acteur-1" />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s" >
                <h2><span className="badge badge-warning">New</span></h2>
                <h5>{data.titre}</h5>
                <div>
                    <span>{ data.annee}</span>
                    <span>{data.age}</span>
                    <span>{ data.duree}</span>
                </div>
                <p>{ data.description}</p>
                <p className="animate__animated animate__zoomIn animate__delay-2s">
                    <a href="/"><BiCaretRightCircle />Jouer</a><a href="/"><BsInfoCircle />Voir plus</a>
                </p>
            </div>
        </div>
    )
}

export default CarouselItem
