import React from 'react'

// Import style
import './about.css'

// Import Components
import PersonalDetail from './personal-detail/personal-detail'
import StatisticalData from './statistical-data/statistical-data'
import StatsSkills from './stats-skills/stats-skills'

//  Import Source
import { profile } from '../../source'

export default function About() {

    return (
        <>
            <div class="about">
                <h1 class="about__title">
                    ABOUT
                    <span class="about__text"> ME</span>
                    <span className="about-title-transparent">
                        RESUME
                    </span>
                </h1>
                <section class="container">
                    <div class="content">
                        <h2 class="content__title">PERSONAL INFOS</h2>
                        <PersonalDetail 
                            profileData={profile}
                        /> 
                    </div>
                    <div class="content">
                        <StatisticalData />
                    </div>
                </section>
                <StatsSkills 
                    profileData={profile}
                />

                <section class="about__section-3">

                </section>
            </div>
        </>
    )
}