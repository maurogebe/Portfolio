import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

// Import style
import './stats-skills.css'
import 'react-circular-progressbar/dist/styles.css';


export default function StatsSkills(props) {

    return (
        <>
            <h2 className="title-skills">My Skills</h2>
            <section class="skills">
                <div className="skill">
                    <CircularProgressbar value={props.profileData.skills.html} text={`${props.profileData.skills.html}%`} />
                    <h3 className="skill__title">HTML</h3>
                </div>
                <div className="skill">
                    <CircularProgressbar className="progress-skill" value={props.profileData.skills.css} text={`${props.profileData.skills.css}%`} />
                    <h3 className="skill__title">CSS</h3>
                </div>
                <div className="skill">
                    <CircularProgressbar className="progress-skill" value={props.profileData.skills.javascript} text={`${props.profileData.skills.javascript}%`} />
                    <h3 className="skill__title">Javascript</h3>
                </div>
                <div className="skill">
                    <CircularProgressbar className="progress-skill" value={props.profileData.skills.react} text={`${props.profileData.skills.react}%`} />
                    <h3 className="skill__title">React</h3>
                </div>
            </section>
        </>
    )
}