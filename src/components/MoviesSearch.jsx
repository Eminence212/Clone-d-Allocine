import React from 'react'
import { MdSearch } from 'react-icons/md'
import CardFilm from '../components/sections/CardFilm'
import image1 from '../components/images/populaire/01 (1).jpg'
import image2 from '../components/images/populaire/01.jpg'
import image3 from '../components/images/populaire/01 (2).jpg'
import image4 from '../components/images/populaire/01 (3).jpg'
import image5 from '../components/images/populaire/01 (5).jpg'
function MoviesSearch() {

        const moviesPopulars = [
            {
                id: 1,
                image: image1,
                titre: "The love",
                annee: "2021",
                age: "+18",
                type: "Action"
            },
            {
                id: 2,
                image: image2,
                titre: "The love",
                annee: "2021",
                age: "+18",
                type: "Action"

            },
            {
                id: 3,
                image: image3,
                titre: "The love",
                annee: "2021",
                age: "+18",
                type: "Action"

            },
            {
                id: 4,
                image: image4,
                titre: "The love",
                annee: "2021",
                age: "+18",
                type: "Action"

            },
            {
                id: 5,
                image: image5,
                titre: "The love",
                annee: "2021",
                age: "+18",
                type: "Action"

            }
        ]
    return (
        <section className= "search-movies" >

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <form className= "col-11 col-md-6 col-lg-10 mt-3 search-box animate__animated animate__fadeIn animate__delay-0.6s" >
                        <div className="input-group form-container">
                            <input className="form-control search-input" type="text" placeholder="Titre du film ici" autofocus="autofocus" autoCorrect = "off" />
                            <span className="input-group-btn">
                                <button className="btn btn-search">
                                    <MdSearch/>
                                </button>
                            </span>
                        
                        </div>
                    </form>
                </div>
                <div className="row justify-content-center pt-3">
                    {
                        moviesPopulars.map(movie => (
                            < CardFilm data={movie} key={movie.id} />
                         
                        ))
                    }
                </div>
             </div>
        </section>
    )
}

export default MoviesSearch
