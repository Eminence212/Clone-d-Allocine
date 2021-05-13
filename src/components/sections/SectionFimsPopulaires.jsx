import React ,{useState,useEffect} from 'react'
import CardFilm from './CardFilm'
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

    
   

  const  nextPage = (num) => {
      if (num < total_pages) {
          setNumPage(numPage+1)
        }
  }
    const previousPage = (num) => {
        if (num > 0 && num <= total_pages) {
            setNumPage(numPage -1)
        }
    }
    return (
        <section className="films-populaires" >
            {   populrsMovies.results !== undefined ? <div className="section-title">
                <h2>Films populaires</h2>
            </div>: null} 
            <diw className="container">
                <div className= "row justify-content-center" >
                {
                        populrsMovies.results !== undefined ?
                            
                    populrsMovies.results.map(movie => (
                        < CardFilm data={movie} poster_path={poster_path} key={movie.id} genresMovies ={genresMovies} />
                    )) : null
                }
                </div>
            </diw>
            <div className="row justify-content-center bouton-navigation">
                <div className="col">
                    <button>Precedent</button>
                </div>
                <div className="col">
                    <button>suivant</button>
                </div>
            </div>
        </section>
    )
}
export default SectionFimsPopulaires
