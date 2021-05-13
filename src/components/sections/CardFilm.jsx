import React from 'react'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function CardFilm({ data, poster_path, genresMovies}) {
    const getGenresMovie = (movie) => {
     
        let listGenres = []
        if (genresMovies.length !== undefined) {
            movie.genre_ids.map(id => (
                listGenres.push(genresMovies.filter(genre => genre.id === id)[0].name)
            ))
        }
        return listGenres.join(',')
    }
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
                    <div><a href="/"><MdPlayArrow /></a></div>
                    <div><a href="/"><MdAdd /></a></div>
                    <div><NavLink to={"/"+data.id}><FaInfo /></NavLink></div>
                </div>
            </div>
        </div>
    )
}
export default CardFilm
