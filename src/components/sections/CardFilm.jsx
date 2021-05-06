import React from 'react'
import { MdPlayArrow} from 'react-icons/md'
function CardFilm({ data }) {
    console.log(data);
    return (
        <div className="col  mt-3">
            <div className="card">
                <img src={data.image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{data.titre}</h5>
                    <p className="card-text">
                        <span>{data.annee}</span>
                        <span> {data.age} </span>
                        <span> {data.type} </span>
                    </p>
                </div>
                <div className="film-info">
                    <a href="/"><MdPlayArrow /></a>
                    <a href="/"><MdPlayArrow /></a>
                    <a href="/"><MdPlayArrow /></a>
                </div>

            </div>
        </div>

    )
}

export default CardFilm
