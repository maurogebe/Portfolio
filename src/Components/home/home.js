import React from 'react'
import {
    Link
  } from "react-router-dom";

// Import style
import './home.css'

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function Home(props) {

    return (
        <>
            <div className="home">
                <div className="home__background-dinamic"></div>
                <section className="section-home">
                    <img className="section-home__img-personal" src="https://portfolio-mauricio.s3.amazonaws.com/profile.jpeg" alt="profile" />
                    <div className="description">
                        <div className="description-personal">
                            <span>Hola!</span>
                            <h1>SOY <span className="description__personal-title-name">MAURICIO GUERRA</span></h1>
                            <p>
                                Soy desarrollador Frontend de Medellin centrado en crear experiencias limpias y faciles de usar. Me apasiona plasmar las ideas y suenos en codigo para mostrar en tu pagina web.
                            </p>
                            <Link to="/about" className="button__link">
                                <div className="personal-button">
                                    <FontAwesomeIcon className="personal-button__icon" icon={faUser} />
                                    <span className="personal-button__link">
                                        MÁS SOBRE MÍ
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}