import React from 'react'
import CardFilm from './CardFilm'
import image1 from '../images/ala-une/02 (2).jpg'
import image2 from '../images/ala-une/04 (1).jpg'
import image3 from '../images/ala-une/04 (2).jpg'
import image4 from '../images/ala-une/05 (1).jpg'
import image5 from '../images/ala-une/06 (5).jpg'
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
function AlaUne() {
    return (
      
        <section section className="films-alaune" >
            <div className="section-title">
                <h2>A la une</h2>
            </div>
            <diw className="container">
                    
                <div className="row justify-content-center" >
                    {
                        moviesPopulars.map(movie => (
                            <CardFilm data={movie} key={movie.id} />
                        ))
                    }
                </div>
            </diw>
            </section>
    )
}

export default AlaUne
