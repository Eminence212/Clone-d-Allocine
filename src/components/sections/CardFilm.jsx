import React from 'react'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
import { BsInfo } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Notes from '../Notes'

function CardFilm({ data, poster_path}) {
    const Note = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
    return (
        
        <div className="col-6 col-md-4 col-lg-2 w-responsive">
        
            <div className="card">
                <img src={poster_path + data.poster_path} className="card-img-top img-fluid" alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{data.title}</h5>
                    <div className="card-text">
                        <span className="item" >{data.release_date !== undefined ? data.release_date.slice(0, 4) : null}</span>
                        <span className="item">{data.popularity}</span>
                        <p>
                            {
                                Note.map((note) => (
                                    note <= Math.trunc(Number(data.vote_average)) ? <span><Notes /></span> : <Notes />
                             ))
                           }
                           
                        </p>
                    </div>
                </div>
                <div className="film-info">
                 
                    <div><NavLink to={"/pay/movie/" + data.id} title="YouTube video player"><MdPlayArrow /></NavLink></div>
                    <div><a href="/"><MdAdd /></a></div>
                    <div><NavLink to={"/" + data.id} title={"Voir plus sur " + data.title} ><BsInfo /></NavLink></div>
                  
                </div>
            </div>
           
        </div>
    )
}
export default CardFilm
