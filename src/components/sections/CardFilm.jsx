import React from 'react'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function CardFilm({ data }) {
    return (
        <div className="col-6 col-md-4 col-lg-2 mt-1 w-responsive">
            <div className="card">
                <img src={data.image} className="card-img-top img-fluid" alt={data.titre} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{data.titre}</h5>
                    <p className="card-text">
                        <span >{data.annee}</span>
                        <span> {data.age} </span>
                        <span> {data.type} </span>
                    </p>
                </div>
                <div className="film-info">
                    <div><a href="/"><MdPlayArrow /></a></div>
                    <div><a href="/"><MdAdd /></a></div>
                    <div><NavLink to="/movie"><FaInfo /></NavLink></div>
                </div>

            </div>
        </div>

    )
}
export default CardFilm
