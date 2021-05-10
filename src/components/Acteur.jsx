import React from 'react'
import img from '../components/images/detail/acteur.jpg'

function Acteur({nom}) {
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{nom}</h5>

                </div>
            </div>
       </div>

    )
}

export default Acteur
