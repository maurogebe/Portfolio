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
                </h1>
                <section class="container">
                    <div class="content">
                        <h3 class="content__title">PERSONAL INFOS</h3>
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