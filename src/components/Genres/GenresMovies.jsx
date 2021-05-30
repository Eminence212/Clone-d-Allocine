import React from 'react'

function GenresMovies({ganres,handleClick}) {
    return (
        <div className="container-fluid genres-movies" >
            <div className="row genres">
                <button key={0} >Tous</button>
                {
                   
                    ganres.map(genre => <button key ={genre.id} >{genre.name}</button>)
               }
                
              
            </div>
        </div>
    )
}

export default GenresMovies
