import React from 'react'

function GenresMovies({ganres,handleChangeIdGender,CancelGenderChange}) {
    return (
        <div className="container-fluid genres-movies" >
            <div className="row genres"  >
                <button key={0} onClick = {()=>CancelGenderChange()} >Tous</button>
                {
                   
                    ganres.map(genre => <button key ={genre.id} onClick = {()=>handleChangeIdGender(genre.id)} >{genre.name}</button>)
               }
                
              
            </div>
        </div>
    )
}

export default GenresMovies
