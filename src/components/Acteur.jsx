import React from 'react'
import img from '../components/images/detail/acteur.jpg'
const logo_path = "https://image.tmdb.org/t/p/w500"
function Acteur({ nom, actor }) {
    const profile =   actor.profile_path ?  actor.profile_path.includes(".jpg") ? true : null: null
     return (
       profile != null ?
        <div className="col">
            <div className="card">
                <img src={logo_path+actor.profile_path} className="card-img-top" alt="..." />
                <div className="card-body container">
                    <h5 className="card-title">{actor.name}</h5>
                        <ul>
                            <li><span>Département : </span>{actor.department}</li>
                            <li><span>Connu pour : </span>{actor.known_for_department}</li>
                            <li><span>Job : </span>{actor.job}</li>
                    </ul>
                </div>
            </div>
            </div>
            : null
    )
}

export default Acteur
