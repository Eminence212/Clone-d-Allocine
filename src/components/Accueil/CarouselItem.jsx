import React from 'react'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
function CarouselItem({ data }) {
    console.log(data.id);
    return (
        <div className={"carousel-item " + data.id == 1 ? "active" : null}>
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
                    <a href="/"><MdPlayArrow />Jouer</a><a href="/"><MdAdd />Ma Liste</a>
                </p>
            </div>
        </div>
    )
}

export default CarouselItem
