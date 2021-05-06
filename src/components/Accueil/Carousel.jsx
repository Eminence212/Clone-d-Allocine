import React from 'react'
import hero1 from '../images/hero1.jpg'
import hero2 from '../images/hero2.jpg'
import hero3 from '../images/hero3.jpg'
import { MdPlayArrow, MdAdd } from 'react-icons/md'
const initialData = [
    {
        id: 1,
        image: hero1,
        titre: "Iron door",
        annee: "2021",
        age: "+18",
        duree: "2h6m",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus ex aspernatur suscipit illo! Labore animi veritatis sapiente reprehenderit iusto dicta, odit nihil necessitatibus atque aliquid!"
    },
    {
        id: 2,
        image: hero2,
        titre: "The earth",
        annee: "2021",
        age: "+18",
        duree: "2h6m",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus ex aspernatur suscipit illo! Labore animi veritatis sapiente reprehenderit iusto dicta, odit nihil necessitatibus atque aliquid!"
    },
    {
        id: 3,
        image: hero3,
        titre: "city dreams",
        annee: "2021",
        age: "+18",
        duree: "2h6m",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus ex aspernatur suscipit illo! Labore animi veritatis sapiente reprehenderit iusto dicta, odit nihil necessitatibus atque aliquid!"
    }
]
function Carousel() {
    return (
        <div className="carousel-inner">
            
            <div className="carousel-item active">
                <img src={hero1} className="d-block w-100" alt="Acteur-1" />
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
                        <a href="/"><MdPlayArrow />Jouer</a><a href="/"><MdAdd />Ma Liste</a>
                    </p>
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
                        <a href="/"><MdPlayArrow />Jouer</a><a href="/"><MdAdd />Ma Liste</a>
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
                        <a href="/"><MdPlayArrow />Jouer</a><a href="/"><MdAdd />Ma Liste</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Carousel
