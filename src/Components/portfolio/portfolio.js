import React from 'react'

// Import style
import './portfolio.css'

// Import components
import Projects from './projects/projects'


export default function Portfolio() {

    return (
        <>
            <div className="portfolio">
                <h1 className="portfolio__title">
                    MY
                    <span className="portfolio__text"> PORTFOLIO</span>
                    <span className="portfolio-title-transparent">
                        WORKS
                    </span>
                </h1>
                <Projects />
            </div>
        </>
    )
}