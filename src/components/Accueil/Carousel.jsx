import React, { useEffect, useState } from 'react'
import hero1 from '../images/hero1.jpg'
import hero2 from '../images/hero2.jpg'
import hero3 from '../images/hero3.jpg'
import { BsInfoCircle } from 'react-icons/bs'
import { BiCaretRightCircle} from 'react-icons/bi'
// import CarouselItem from '../Accueil/CarouselItem'

function Carousel() {
    const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
    const poster_path = "https://image.tmdb.org/t/p/w500"

    const [nowPlayingMovies, setNowPlayingMovies] = useState([])

    const requete_nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=1`

    //Fetching NowPlayin
    useEffect(() => {
        try {
            fetch(requete_nowPlayingMovies)
                .then(function (res) {
                    res.json()
                        .then(function (data) {
                            setNowPlayingMovies(data.results)
                          
                        })
                })
        } catch (error) {
            console.log("Err :", error);
        }
    }, [requete_nowPlayingMovies])
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">

                <img src={hero1} className="d-block w-100" alt="Acteur-1" />
                
                <div className = "overlay" >
                    <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s" >
                        <h2><span className="badge badge-warning">New</span></h2>
                        <h5>Iron door</h5>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>2h6m</span>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus ex aspernatur suscipit illo! Labore animi veritatis sapiente reprehenderit iusto dicta, odit nihil necessitatibus atque aliquid!</p>
                        <p className="animate__animated animate__zoomIn animate__delay-2s">
                            <a href="/"><BiCaretRightCircle />Jouer</a><a href="/"><BsInfoCircle />Voir plus</a>
                        </p>
                    </div>
               </div>
            </div>
           
            <div className="carousel-item">
                <img src={hero2} className="d-block w-100" alt="Acteur-2" />
                <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s">
                    <h2><span className="badge badge-warning">New</span></h2>
                    <h5>The earth</h5>
                    <div>
                        <span>2021</span>
                        <span>+18</span>
                        <span>2h6m</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempore vero qui rem voluptatibus voluptas dolor itaque id numquam, consectetur iusto explicabo fuga architecto tempora maiores.</p>
                    <p className="animate__animated animate__zoomIn animate__delay-2s">
                        <a href="/"><BiCaretRightCircle />Jouer</a><a href="/"><BsInfoCircle />Voir plus</a>
                    </p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={hero3} className="d-block w-100" alt="Acteur-3" />
                <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s">
                    <h2><span className="badge badge-warning">New</span></h2>
                    <h5>city dreams</h5>
                    <div>
                        <span>2021</span>
                        <span>+18</span>
                        <span>2h6m</span>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, earum quos laudantium, non a beatae, atque cumque debitis quae natus est sapiente iure itaque consequuntur!</p>
                    <p className="animate__animated animate__zoomIn animate__delay-2s">
                        <a href="/"><BiCaretRightCircle />Jouer</a><a href="/"><BsInfoCircle />Voir plus</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Carousel
