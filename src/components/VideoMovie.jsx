import React, { useEffect, useState } from 'react'

function VideoMovie({ match }) {
    const [keyMovie,setKeyMovie] = useState([])
    let idMovie = Number(match.params.query)
       const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const requete = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${api_key}&language=fr-FR`

  async  function getKeyMovie(requete) {
        try {
            fetch(requete)
                .then((response) => {
                    response.json()
                        .then((dataSet) => {
                   setKeyMovie(dataSet.results)
                        })
                })
              

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
      getKeyMovie(requete)

   },[requete])

 
 
    // // console.log("Key : ",keyMovieForYoutube)
    console.log("ID : ", idMovie)
    console.log("Data : ", keyMovie)
   
    return (
        <section className = "play-movie" > 
            <div className="container" >
                <div className="row ">
                    <div className="col ">
                       
                        {
                            keyMovie.length > 0 ?
                                <iframe src={"https://www.youtube.com/embed/" + keyMovie[0].key} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                
                                : <div className="info-movie" > <div className="alert alert-dark w-100" role="alert" >Aucun extrait disponible</div> </div>
                           
                      }
                        
                  </div>
                </div>
                
          </div>
       </section>

    )    
}

export default VideoMovie
