import React, { useState, useEffect }  from 'react'
import CardFilm from './CardFilm'
import ButtonNavigation from '../ButtonNavigation'
import GenresMovies from '../Genres/GenresMovies'

function AlaUne({ genresMovies}) {
const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
const poster_path = "https://image.tmdb.org/t/p/w500/"
const [numPage, setNumPage] = useState(1)
const [total_pages, setTotal_pages] = useState(1)
const [genreId, setGenreId] = useState(0)
const [isWithGenres,setIsWithGenres]=useState(false)
const [nowPlayingMovies, setNowPlayingMovies] = useState({})

    const requete_nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=${numPage}`

  const requete_nowPlayingMoviesWith_genres = `https://api.themoviedb.org/3/movie/now_playing?with_genres=${genreId}&api_key=${api_key}&language=fr-FR&page=${numPage}`
   
    const requette = (isWithGenres && genreId !==0) ? requete_nowPlayingMoviesWith_genres : requete_nowPlayingMovies
 
  
  //Fetching NowPlayin
    useEffect(() => {
        try {
            fetch(requette)
                .then(function (response) {
                    response.json()
                        .then(function (data) {
                            setNowPlayingMovies(data)
                            setTotal_pages(data.total_pages)
                        })
                })
        } catch (error) {
            console.log("Err :", error);
        }
    }, [numPage, requette])

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
    }
    const handleChangeIdGender = (idGenre) => {
      setNumPage(1)
      setIsWithGenres(true)
      setGenreId(idGenre)
  }
    const CancelGenderChange = () => {
       setNumPage(1)
      setIsWithGenres(false)
      setGenreId(0)
}
    return (
      
        <section section className="films-alaune" >
            {
                nowPlayingMovies.results !== undefined ?
                <div className="section-title">
                    <h2>A la une , <span> {" Du " + getDateLocal(nowPlayingMovies.dates.minimum) + " au " + getDateLocal(nowPlayingMovies.dates.maximum)}</span></h2>
                        {
                           ( genresMovies !== undefined && genresMovies.length >0 )?
                                <GenresMovies ganres={genresMovies} handleChangeIdGender = {handleChangeIdGender} CancelGenderChange = {CancelGenderChange} />
                                :null
                        }
                </div> : null
            }
            <div className="container">
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
            </div>
            </section>
    )
}
export default AlaUne
