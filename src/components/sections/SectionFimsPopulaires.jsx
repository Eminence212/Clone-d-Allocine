import React ,{useState,useEffect} from 'react'
import CardFilm from './CardFilm'
import ButtonNavigation from '../ButtonNavigation'
import GenresMovies from '../Genres/GenresMovies'
function SectionFimsPopulaires({ genresMovies}) {
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const poster_path = "https://image.tmdb.org/t/p/w500/"
    const [numPage, setNumPage] = useState(1)
    const [total_pages,setTotal_pages] = useState(1)
    const [populrsMovies, setPopularsMovies] = useState({})
    const [genreId, setGenreId] = useState(0)
    const [isWithGenres,setIsWithGenres]=useState(false)
    const requete_popularsMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-FR&page=${numPage}`
    const requete_popularsMoviesWith_genres = `https://api.themoviedb.org/3/movie/popular?with_genres=${genreId}&api_key=${api_key}&language=fr-FR&page=${numPage}`
  const requette = (isWithGenres && genreId !==0) ? requete_popularsMoviesWith_genres : requete_popularsMovies
  //Fetching popularsMovies
    useEffect(() => {
        try {
            fetch(requette)
                .then(function (res) {
                    res.json()
                .then(function (data) {
                    setPopularsMovies(data)
                    setTotal_pages(data.total_pages)
                })
                })
        } catch (error) {
            console.log("Err :",error);
        }
    }, [numPage,requette]) 

    const nextPage = (event) => {
        event.preventDefault()
        if (numPage < total_pages) {
          setNumPage(numPage+1)
        }
  }
    const previousPage = (event) => {
        event.preventDefault()
        if (numPage > 1 && numPage <= total_pages) {
            setNumPage(numPage -1)
        }
        console.log("previous page")
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
        <section className="films-populaires" >
            {
                populrsMovies.results !== undefined ? <div className="section-title">
                    <h2>Films populaires</h2>
                    {
                        (genresMovies !== undefined && genresMovies.length > 0) ?
                            <GenresMovies ganres={genresMovies} handleChangeIdGender = {handleChangeIdGender} CancelGenderChange = {CancelGenderChange} />
                            : null
                    }
            </div>: null} 
            <diw className="container">
                {
                    populrsMovies.results !== undefined ? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} /> : null
                }
                <div className= "row justify-content-center" >
                {
                        populrsMovies.results !== undefined ?
                            
                    populrsMovies.results.map(movie => (
                        < CardFilm data={movie} poster_path={poster_path} key={movie.id} />
                    )) : null
                }
                </div>
                {
                    populrsMovies.results !== undefined ? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} />:null
               }
            </diw>
          
        </section>
    )
}
export default SectionFimsPopulaires
