import React from 'react'
import Acteur from '../Acteur'

function TeteAffiche({resultats,styles,titre}) {
    return  (
        <div className={"row p-3 "+styles}>
            <div className="col">
                <h5 className="text-black ">{titre}</h5>
                <div className="container">
                    <div className="row acteurs">
                        {
                            resultats.map(actor => (<Acteur actor={actor} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TeteAffiche
