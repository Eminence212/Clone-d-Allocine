import React, { useState, useEffect }  from 'react'
import CardFilm from './CardFilm'
import ButtonNavigation from '../ButtonNavigation'

function AlaUne() {
const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
const poster_path = "https://image.tmdb.org/t/p/w500/"
const [numPage, setNumPage] = useState(1)
    const [total_pages, setTotal_pages] = useState(1)

const [nowPlayingMovies, setNowPlayingMovies] = useState({})

    const requete_nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=${numPage}`

    //Fetching NowPlayin
    useEffect(() => {
        try {
            fetch(requete_nowPlayingMovies)
                .then(function (res) {
                    res.json()
                        .then(function (data) {
                            setNowPlayingMovies(data)
                            setTotal_pages(data.total_pages)
                        })
                })
        } catch (error) {
            console.log("Err :", error);
        }
    }, [numPage, requete_nowPlayingMovies])

   //Convert date local
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const getDateLocal = (dateString) => new Date(dateString).toLocaleDateString("fr-FR", options)

    //
    const nextPage = (event) => {
        event.preventDefault()
        if (numPage < total_pages) {
            setNumPage(numPage + 1)
        }
    }
    const previousPage = (event) => {
        event.preventDefault()
        if (numPage > 1 && numPage <= total_pages) {
            setNumPage(numPage - 1)
        }
        console.log("previous page")
    }
    return (
      
        <section section className="films-alaune" >
            {
                nowPlayingMovies.results !== undefined ?
                <div className="section-title">
                        <h2>A la une , <span> {getDateLocal(nowPlayingMovies.dates.minimum) + " - " + getDateLocal(nowPlayingMovies.dates.maximum)}</span></h2>
                </div> : null
            }
            <diw className="container">
                {
                    nowPlayingMovies.results !== undefined ? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} /> : null
                }
                <div className="row justify-content-center" >
                    {
                        nowPlayingMovies.results !== undefined ?

                        nowPlayingMovies.results.map(movie => (
                            < CardFilm data={movie} poster_path={poster_path} key={movie.id} />
                        )) : null
                    }
                </div>
                {
                    nowPlayingMovies.results !== undefined ? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} /> : null
                }
            </diw>
            </section>
    )
}
export default AlaUne
