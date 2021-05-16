import React from 'react'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function CardFilm({ data, poster_path, genresMovies }) {
    return (
        
        <div className="col-6 col-md-4 col-lg-2 w-responsive">
           
            <div className="card">
                <img src={poster_path + data.poster_path} className="card-img-top img-fluid" alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{data.title}</h5>
                    <p className="card-text">
                        <span >{data.release_date !== undefined ? data.release_date.slice(0, 4) : null}</span>
                        <span>{data.popularity}</span>
                        <span>{(data.vote_average * 10) + " %"}</span>
                    </p>
                </div>
                <div className="film-info">
                 
                    <div><NavLink to={"/pay/movie/" + data.id} title="YouTube video player"><MdPlayArrow /></NavLink></div>
                    <div><a href="/"><MdAdd /></a></div>
                    <div><NavLink to={"/" + data.id} title={"Voir plus sur " + data.title} ><FaInfo /></NavLink></div>
                  
                    
                    {/* Modal */}
         





                </div>
            </div>
        </div>
    )
}
export default CardFilm
