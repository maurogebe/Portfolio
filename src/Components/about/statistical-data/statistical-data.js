import React from 'react'

// Import style
import './statistical-data.css'


export default function StatisticalData() {

    return (
        <>
            <ul className="statistical-data">
                <li className="statistical-data__detail">
                    <h3 className="statistical-data__title">12+</h3>
                    <div className="statistical-data__contain">
                        <span className="statistical-data__linear">___</span>
                        <div>
                            <span className="statistical-data__text statistical-data__text--blue">YEARS OF</span>
                            <span className="statistical-data__text statistical-data__text--display-block">EXPERIENCE</span>
                        </div>
                    </div>
                </li>
                <li className="statistical-data__detail">
                    <h3 className="statistical-data__title">0</h3>
                    <div className="statistical-data__contain">
                        <span className="statistical-data__linear">___</span>
                        <div>
                            <span className="statistical-data__text">COMPLETE</span>
                            <span className="statistical-data__text statistical-data__text--display-block">PROJECTS</span>
                        </div>
                    </div>
                </li>
                <li className="statistical-data__detail">
                    <h3 className="statistical-data__title">81+</h3>
                    <div className="statistical-data__contain">
                        <span className="statistical-data__linear">___</span>
                        <div>
                            <span className="statistical-data__text">HAPPY</span>
                            <span className="statistical-data__text statistical-data__text--display-block">CUSTOMERS</span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}