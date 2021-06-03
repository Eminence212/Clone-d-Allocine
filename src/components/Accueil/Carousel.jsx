import React from 'react'
import hero1 from '../images/hero1.jpg'
import hero2 from '../images/hero2.jpg'
import hero3 from '../images/hero3.jpg'
import { BsInfoCircle } from 'react-icons/bs'
import { BiCaretRightCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'


function Carousel({ poster_path, data }) {
const img1 = data.length >0 ? data[0].backdrop_path !==null? poster_path+data[0].backdrop_path:hero1 : hero1
const img2 = data.length >0 ? data[1].backdrop_path !==null? poster_path+data[1].backdrop_path:hero1 : hero2
const img3 = data.length >0 ? data[2].backdrop_path !==null? poster_path+data[2].backdrop_path:hero1 : hero3
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">

                <img src={img1} className="d-block w-100" alt="Acteur-1" />
                
                <div className = "overlay" >
                    <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s" >
                        <h2><span className="badge badge-warning">New</span></h2>
                        <h5>{data.length >0 ? data[0].title : null}</h5>
                        <div>
                            <span>{data.length >0 ? data[0].release_date.slice(0, 4) : null}</span>
                            <span>{data.length >0 ? data[0].popularity : 0}</span>
                            <span>2h6m</span>
                        </div>
                        <p  className="overview">
                         
                              {data.length >0 ? data[0].overview : null}
                        </p>
                        <p className="animate__animated animate__zoomIn animate__delay-2s mt-2">
                           
                          { data.length >0 ?<NavLink to={"/play/movie/" + data[0].id} title="YouTube video player"><BiCaretRightCircle />Jouer</NavLink>:null}

                            {data.length >0 ? <NavLink to={"/detail/movie/" + data[0].id} title={"Voir plus sur " + data[0].title} ><BsInfoCircle />Voir plus</NavLink> : null}
                        </p>
                    </div>
               </div>
            </div>
           
            {/* <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="Acteur-2" />
                <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s">
                    <h2><span className="badge badge-warning">New</span></h2>
                    <h5> {data.length >0 ? data[1].title : null}</h5>
                    <div>
                        <span>{data.length >0 ? data[1].release_date.slice(0, 4) : null}</span>
                        <span>{data.length >0 ? data[1].popularity : 0}</span>
                        <span>2h6m</span>
                    </div>
                    <p  className="overview">
                           {data.length >0 ? data[1].overview : null}
                    </p>
                    <p className="animate__animated animate__zoomIn animate__delay-2s mt-2">
                      { data.length >0 ?<NavLink to={"/play/movie/" + data[1].id} title="YouTube video player"><BiCaretRightCircle />Jouer</NavLink>:null}

                            {data.length >0 ? <NavLink to={"/detail/movie/" + data[1].id} title={"Voir plus sur " + data[1].title} ><BsInfoCircle />Voir plus</NavLink> : null}
                        
                    </p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="Acteur-3" />
                <div className="carousel-caption d-none d-md-block animate__animated animate__fadeIn animate__delay-1s">
                    <h2><span className="badge badge-warning">New</span></h2>
                    <h5> {data.length >0 ? data[2].title : null}</h5>
                    <div>
                        <span>{data.length >0 ? data[2].release_date.slice(0, 4) : null}</span>
                        <span>{data.length >0 ? data[2].popularity : 0}</span>
                        <span>2h6m</span>
                    </div>
                    <p className="overview">
                       {data.length >0 ? data[2].overview : null}
                    </p>
                    <p className="animate__animated animate__zoomIn animate__delay-2s mt-2">
                      { data.length >0 ?<NavLink to={"/play/movie/" + data[2].id} title="YouTube video player"><BiCaretRightCircle />Jouer</NavLink>:null}

                            {data.length >0 ? <NavLink to={"/detail/movie/" + data[2].id} title={"Voir plus sur " + data[2].title} ><BsInfoCircle />Voir plus</NavLink> : null}
                    </p>
                </div>
            </div>
        */}
        </div>
    )
}

export default Carousel
