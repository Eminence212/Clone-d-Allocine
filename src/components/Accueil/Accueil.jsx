import React,{ useState, useEffect } from 'react'
import Indicators from './Indicators'
import Carousel from './Carousel'
import BoutonPrecedent from './BoutonPrecedent'
import BoutonSuivant from './BoutonSuivant'

function Accueil() {
    
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const poster_path = "https://image.tmdb.org/t/p/w500"
    const requete_nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=1`

     //Fetching NowPlayin
    useEffect(() => {
        try {
            fetch(requete_nowPlayingMovies)
                .then(function (response) {
                    response.json()
                        .then(function (data) {
                            setNowPlayingMovies(data.results)
                        })
                })
        } catch (error) {
            console.log("Err :", error);
        }
    }, [requete_nowPlayingMovies])
    return (
        
        <div id="sliderAccueil" className="carousel slide" data-ride="carousel">
            <Indicators/>
            <Carousel poster_path = {poster_path} data = {nowPlayingMovies} />
            <BoutonPrecedent />
            <BoutonSuivant />
        </div>

    )
}

export default Accueil
