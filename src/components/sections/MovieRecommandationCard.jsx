import React from 'react'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
import { BsInfo } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Notes from '../Notes'
function MovieRecommandationCard({ data, poster_path, genresMovies }) {
    const Note = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="col-6 col-md-4 col-lg-2 w-responsive">

            <div className="card">
                <img src={poster_path + data.poster_path} className="card-img-top img-fluid" alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{data.title}</h5>
                  
                </div>
                <div className="film-info">

                    <div><NavLink to={"/play/movie/" + data.id} title="YouTube video player"><MdPlayArrow /></NavLink></div>
                    <div><a href="/"><MdAdd /></a></div>
                    <div><NavLink to={"/detail/movie/" + data.id} title={"Voir plus sur " + data.title} ><BsInfo /></NavLink></div>

                </div>
            </div>
        </div>
    )
}

export default MovieRecommandationCard
