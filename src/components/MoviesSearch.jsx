import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import CardFilm from '../components/sections/CardFilm'
import ButtonNavigation from './ButtonNavigation'
import GenresMovies from './Genres/GenresMovies'

function MoviesSearch({ genresMovies}) {
    const poster_path = "https://image.tmdb.org/t/p/w500/"
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const [searchValue, setSearchValue] = useState("")
    const [numPage, setNumPage] = useState(1)
    const [total_pages, setTotal_pages] = useState(1)
    const [movies, setMovies] = useState([])
     const [genreId, setGenreId] = useState(0)
    const [isWithGenres,setIsWithGenres]=useState(false)
    let requete = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=fr-FR&query=${searchValue}&page=${numPage}`
    let requeteWith_genres = `https://api.themoviedb.org/3/search/movie?with_genres=${genreId}&api_key=${api_key}&language=fr-FR&query=${searchValue}&page=${numPage}`

    let requete_all = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=${numPage}`

    let requete_allWith_genres = `https://api.themoviedb.org/3/movie/now_playing?with_genres=${genreId}&api_key=${api_key}&language=fr-FR&page=${numPage}`

    const requetes = (isWithGenres && genreId !==0) ? requeteWith_genres : requete
     const requettes = (isWithGenres && genreId !==0) ? requete_allWith_genres : requete_all
    const HandleSubmit = (e) => {
        e.preventDefault()
        try {
            
            fetch(searchValue !== "" ? requetes : requettes)
                .then((response) => {
                    response.json()
                        .then((dataSet) => {
                            setMovies(dataSet.results)
                            setTotal_pages(dataSet.total_pages)
                        })
                })
        } catch (error) {
            console.error(error);
        }
       
   }
    const HandleChange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)

    }
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

    useEffect(() => {
        try {

            fetch(searchValue !== "" ? requetes : requettes)
                .then((response) => {
                    response.json()
                        .then((dataSet) => {
                            setMovies(dataSet.results)
                            setTotal_pages(dataSet.total_pages)
                        })
                })
        } catch (error) {
            console.error(error);
        }
    }, [numPage, requettes,requetes])

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
        <section className= "search-movies" >

            <div className="container-fluid">
                <div className="row justify-content-center">

                    <form action ="" onSubmit = {HandleSubmit} className= "col-11 col-md-6 col-lg-10 mt-3 search-box animate__animated animate__fadeIn animate__delay-0.6s" >
                        <div className="input-group form-container">
                            <input className="form-control search-input" onChange = {HandleChange} name = "query" type="text" placeholder="Titre du film ici" autofocus="autofocus" autoCorrect="on" />
                            <span className="input-group-btn">
                                <button className="btn btn-search">
                                    <MdSearch />
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                {   
                        
                    (movies !== undefined && movies.length > 0) ?
                        <>
                    <div className="container justify-content-center">
                        <GenresMovies ganres={genresMovies} handleChangeIdGender = {handleChangeIdGender} CancelGenderChange = {CancelGenderChange} />
                        <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} />
                    </div>
                    </>
                            : null
                    
                }
             
                <div className="row justify-content-center pt-3 searchCard">
                    {
                        (  movies !== undefined && movies.length > 0 )?
                        movies.map(movie => (
                            movie.poster_path ? < CardFilm data={movie} poster_path={poster_path} key={movie.id} /> : null
                         
                        )) : "Aucun r??sultat trouv?? pour "+searchValue
                    }
                </div>
                {

                    (movies !== undefined && movies.length > 0 )? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} /> : null
                }
             </div>
        </section>
    )
}

export default MoviesSearch
