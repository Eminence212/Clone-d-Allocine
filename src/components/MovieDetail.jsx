import React, { useEffect, useState } from 'react'
import { BsLink} from 'react-icons/bs'
import RecommandationMovie from './sections/RecommandationMovie'
import SimularMovies from './sections/TeteAffiche'
import TeteAffiche from './sections/TeteAffiche'
import imgDefault from '../components/images/default/default.png'

function MovieDetail({ match }) {

    const idMovie = Number(match.params.query)
    const [movieDetail, setMovieDetail] = useState({})
    const [movieCredit, setMovieCredit] = useState({})
    const [recommandationMovie, setRecommandationMovie] = useState({})
    const poster_path = "https://image.tmdb.org/t/p/w500"
    const logo_path = "https://image.tmdb.org/t/p/w500"
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const requete = `http://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=fr-FR`
    const requete_acteur = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${api_key}&language=fr-FR`
    const requete_RecommandationMovie = `https://api.themoviedb.org/3/movie//${idMovie}/similar?api_key=${api_key}&language=fr-FR&page=1`

     function getKeyMovie(requete) {
        try {
            fetch(requete)
                .then((response) => {
                    response.json()
                        .then((dataSet) => {
                            setMovieDetail(dataSet)
                        })
                })


        } catch (error) {
            console.error(error);
        }
     }
    function getCreditMovie(requete_acteur) {
        try {
            fetch(requete_acteur)
                .then((response) => {
                    response.json()
                        .then((dataSet) => {
                            setMovieCredit(dataSet)
                        })
                })


        } catch (error) {
            console.error(error);
        }
    }

    function getRecommandationMovie(requete_RecommandationMovie) {
        try {
            fetch(requete_RecommandationMovie)
                .then((response) => {
                    response.json()
                        .then((dataSet) => {
                            setRecommandationMovie(dataSet)
                        })
                })


        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getKeyMovie(requete)
        getCreditMovie(requete_acteur)
        getRecommandationMovie(requete_RecommandationMovie)
    }, [requete, requete_acteur, requete_RecommandationMovie])
   
    const img =(movieDetail.poster_path !== null && movieDetail.poster_path !== undefined) ? poster_path + movieDetail.poster_path : imgDefault 
   console.log("movieDetail.poster_path:",movieDetail.poster_path)
    console.log("lien image : ", img)
    return (
        (movieDetail !== undefined )?
        <section className= "detail-movie animate__animated animate__fadeIn animate__delay-0.6s">
                <div className="detail">
                {/* <img className="img-fluid d-none d-md-block" src={bg} alt="detail" /> */}
                    <div className="filter">
                        <div className="container">
                            <div className="row  text-white p-5 justify-content-center">
                            <div className="col-11 col-md-6 col-lg-4">
                                <img src={img} alt={movieDetail.title} className="img-fluid rounded shadow" />
                            </div>
                             <div className="col-11 col-md-6 col-lg-8 justify-content-center">
                                    <h1>{movieDetail.title}</h1>
                                <ul className = "sous-titre" >
                                    <li>R</li>
                                    <li>{movieDetail.release_date}</li>
                                        {
                                            movieDetail.genres !== undefined ?
                                            movieDetail.genres.map(genre => (
                                                <li key={genre.id}><a href="/">{genre.name}</a> </li>
                                        )) : null
                                    }
                                </ul>
                                <div className="container" >
                                    <div className="row justify-content-center">
                                        <div className="col-6 col-md-6 col-lg note-user">
                                            <div className="progress rounded-circle">
                                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow={movieDetail.vote_average * 10} aria-valuemin={0} aria-valuemax={100}>{movieDetail.vote_average * 10}%</div>
                                            </div>
                                            <p>Note des utilisateurs</p>
                                        </div>
                                        <div className="col-6 col-md-6 col-lg">
                                            <div className="rounded-circle addToList" title={"Page d'accueil de "+movieDetail.title}>
                                                <a href={movieDetail.homepage}> <BsLink /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    {movieDetail.overview !=="" ?
                                        <>
                                            <h2>Description</h2>
                                            <p>{movieDetail.overview}</p>
                                        </> : null
                                    }
                                    <div className="container">
                                        <div className="row">
                                            <div className="col col-md col-lg-9">
                                                <div className="row">
                                                   
                                                    {
                                                        (movieDetail.production_countries !== undefined )?
                                                        <div className="col">
                                                            <h6>Pays de production</h6>
                                                            <p>
                                                                <ul>
                                                                    {
                                                                            movieDetail.production_countries.map((pays,id) => (
                                                                                <li key={id} >{pays.name + " (" + pays.iso_3166_1 + ")"}</li>
                                                                    ))
                                                                
                                                                    }
                                                                </ul>
                                                            </p>
                                                         </div>
                                                            : null
                                                    }

                                                    {
                                                        (movieDetail.production_companies !== undefined) ?
                                                            <div className="col">
                                                                <h6>sociétés de production</h6>
                                                                <p>
                                                                    <ul>
                                                                        {
                                                                            movieDetail.production_companies.map(societe => (
                                                                                <li key={societe.id} >{societe.name + " (" + societe.origin_country + ")"}</li>
                                                                            ))

                                                                        }
                                                                    </ul>
                                                                </p>
                                                            </div>
                                                            : null
                                                    }
                                               </div>
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    {
                                                        (movieDetail.budget !== undefined && movieDetail.budget > 0) ?
                                                            <div className="col">
                                                                <h6>Budget</h6>
                                                                <p>{movieDetail.budget + " USD"} </p>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                                <div className="row">
                                                    {
                                                        (movieDetail.revenue !== undefined && movieDetail.revenue > 0) ?
                                                            <div className="col">
                                                                <h6>Revenue</h6>
                                                                <p>{movieDetail.revenue + " USD"} </p>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                                <div className="row">
                                                    {
                                                        (movieDetail.status !== undefined) ?
                                                            <div className="col">
                                                                <h6>Status</h6>
                                                                <p>{movieDetail.status} </p>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                            </div>
                                            
                                     </div>
                                    </div>
                            </div>
                            </div>

                            {
                                (movieCredit.crew !== undefined ) ?
                           
                                    <TeteAffiche resultats={ movieCredit.crew} styles ="bg-white tete-affiche" titre = "Têtes d'affiche" />
                                    : null
                            }
                            {
                                (recommandationMovie.results !== undefined) ?
                                    <RecommandationMovie resultats={recommandationMovie.results} styles ="film-simulaire" titre = "Films Recommandés" />
                                    : null
                            }

                        </div>
                    </div>
                </div>
        </section>
        : "Aucun détail pour le film"
    )
}

export default MovieDetail
