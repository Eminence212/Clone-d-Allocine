import React from 'react'
import { MdList, MdFavoriteBorder, MdPlayArrow, MdShare} from 'react-icons/md'
// import bg from '../components/images/detail/bg.jpg'
import bg1 from '../components/images/detail/bg1.jpg'
import Acteur from './Acteur'

function MovieDetail() {
    return (
        <section className= "detail-movie animate__animated animate__fadeIn animate__delay-0.6s">
                <div className="detail">
                {/* <img className="img-fluid d-none d-md-block" src={bg} alt="detail" /> */}
                    <div className="filter">
                        <div className="container">
                            <div className="row  text-white p-5 justify-content-center">
                            <div className="col-11 col-md-6 col-lg-4">
                                <img src={bg1} alt="..." className="img-fluid rounded shadow" />
                                
                            </div>
                             <div className="col-11 col-md-6 col-lg-8 justify-content-center">
                                <h1>Mortal Kombat (2021)</h1>
                                <ul className = "sous-titre" >
                                    <li>R</li>
                                    <li>23/04/2021 (US)</li>
                                    <li><a href="/">Action</a> </li>
                                    <li><a href="/">Fantastique</a> </li>
                                    <li><a href="/">Aventure</a> </li>
                                    <li> <a href="/"> Science-Fiction</a></li>
                                    <li><a href="/">1h 50m</a></li>
                                </ul>
                                <div className="container" >
                                    <div className="row justify-content-center">
                                        <div className="col-11 col-md-4 col-lg-4 note-user">
                                            <div className="progress rounded-circle">
                                                <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                            </div>
                                            <p>Note des utilisateurs</p>
                                        </div>
                                        <div className="col-6 col-md-6 col-lg">
                                            <div className="rounded-circle addToList" title="Liste">
                                                <MdList />
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 col-lg">
                                            <div className="rounded-circle addToList">
                                                <MdFavoriteBorder />
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 col-lg">
                                            <div className="rounded-circle addToList">
                                                <MdPlayArrow />
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 col-lg">
                                            <div className="rounded-circle addToList">
                                                <MdShare />
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                                <h2>Description</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eveniet porro rerum praesentium quibusdam impedit facere dolorum? Facilis cupiditate alias laboriosam harum, reiciendis cumque ut libero tenetur eum iusto ipsam!
                                </p>
                            </div>
                            </div>
                        <div className="row bg-white p-3 tete-affiche">
                                <div className="col">
                                <h5 className = "text-black ">Têtes d'affiche</h5>
                                <div className="container">
                                    <div className="row acteurs">
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                        <Acteur nom="Mulex" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default MovieDetail
