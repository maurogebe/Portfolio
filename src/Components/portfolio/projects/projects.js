import React from 'react'

// Import style
import './projects.css'


export default function Projects() {

    return (
        <>
            <div className="projects-contain">
                <div className="project">
                    <a className="project__link" href="https://pokedex-mauricio.netlify.app/pokedex" target="_blank">
                        <img className="project__img" src="https://portfolio-mauricio.s3.amazonaws.com/img-pokedex.png"/>
                    </a>
                </div>
                <div className="project">
                    <a className="project__link" href="https://mauricio-actividad-2-estados-y-listas.netlify.app/" target="_blank">
                        <img className="project__img" src="https://portfolio-mauricio.s3.amazonaws.com/img-tweet.png"/>
                    </a>
                </div>
            </div>
        </>
    )
}