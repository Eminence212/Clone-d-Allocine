import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import CardFilm from '../components/sections/CardFilm'
import ButtonNavigation from './ButtonNavigation'

function MoviesSearch() {
    const poster_path = "https://image.tmdb.org/t/p/w500/"
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const [searchValue, setSearchValue] = useState("")
    const [numPage, setNumPage] = useState(1)
    const [total_pages, setTotal_pages] = useState(1)
    const [movies,setMovies] = useState([])
    let requete = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=fr-FR&query=${searchValue}&page=${numPage}`
    let requete_all = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=${numPage}`
    const HandleSubmit = (e) => {
        e.preventDefault()
        try {
            
            fetch(searchValue !== "" ? requete : requete_all)
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

            fetch(searchValue !== "" ? requete : requete_all)
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
    }, [numPage])
    console.log('Total page : ',total_pages)
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
                
                    (movies !== undefined && movies.length > 0 )? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} /> : null
                }
             
                <div className="row justify-content-center pt-3 searchCard">
                    {
                        (  movies !== undefined && movies.length > 0 )?
                        movies.map(movie => (
                            movie.poster_path ? < CardFilm data={movie} poster_path={poster_path} key={movie.id} /> : null
                         
                        )) : "Aucun résultat trouvé pour "+searchValue
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
