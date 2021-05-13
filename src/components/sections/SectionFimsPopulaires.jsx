import React ,{useState,useEffect} from 'react'
import CardFilm from './CardFilm'
import ButtonNavigation from '../ButtonNavigation'
function SectionFimsPopulaires() {
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const poster_path = "https://image.tmdb.org/t/p/w500/"
    const [numPage, setNumPage] = useState(1)
    const [total_pages,setTotal_pages] = useState(1)
    const [populrsMovies, setPopularsMovies] = useState({})
    const [genresMovies, setGeresMovies] = useState([])
    const requete_popularsMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-FR&page=${numPage}`
    const requete_genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=fr-FR`
  //Fetching popularsMovies
    useEffect(() => {
        try {
            fetch(requete_popularsMovies)
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
    }, [numPage,requete_popularsMovies])

    //Fetchinng genres movies

    useEffect(() => {
        try {
            fetch(requete_genres)
                .then(function (res) {
                    res.json()
                        .then(function (data) {
                            setGeresMovies(data.genres)
                        })
                })
        } catch (error) {
        }
    }, [])

    console.log(populrsMovies)
   

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
    return (
        <section className="films-populaires" >
            {   populrsMovies.results !== undefined ? <div className="section-title">
                <h2>Films populaires</h2>
            </div>: null} 
            <diw className="container">
                {
                    populrsMovies.results !== undefined ? <ButtonNavigation numPage={numPage} nextPage={nextPage} previousPage={previousPage} total_pages={total_pages} /> : null
                }
                <div className= "row justify-content-center" >
                {
                        populrsMovies.results !== undefined ?
                            
                    populrsMovies.results.map(movie => (
                        < CardFilm data={movie} poster_path={poster_path} key={movie.id} genresMovies ={genresMovies} />
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
