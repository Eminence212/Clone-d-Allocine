import React from 'react'
import CardFilm from './CardFilm'
import MovieRecommandationCard from './MovieRecommandationCard'

function RecommandationMovie({ resultats, styles, titre }) {
    const poster_path = "https://image.tmdb.org/t/p/w500/"
    return (
        <div className={"row p-3 " + styles}>
            <div className="col">
                <h5 className="text-black ">{titre}</h5>
                <div className="container">
                    <div className="row acteurs">
                        {
                            resultats.map(movie => (<MovieRecommandationCard data={movie} poster_path={poster_path} key={movie.id} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommandationMovie
