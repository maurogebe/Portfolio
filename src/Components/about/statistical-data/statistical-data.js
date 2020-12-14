import React from 'react'

// Import style
import './statistical-data.css'


export default function StatisticalData() {

    return (
        <>
            <ul class="statistical-data">
                <li class="statistical-data__detail">
                    <h3 class="statistical-data__title">12+</h3>
                    <span class="statistical-data__text statistical-data__text--blue">YEARS OF</span>
                    <span class="statistical-data__text statistical-data__text--display-block">EXPERIENCE</span>
                </li>
                <li class="statistical-data__col-3">
                    <h3 class="statistical-data__title">0</h3>
                    <span class="statistical-data__text">COMPLETE</span>
                    <span class="statistical-data__text statistical-data__text--display-block">PROJECTS</span>
                </li>
                <li class="statistical-data__col-3">
                    <h3 class="statistical-data__title">81+</h3>
                    <span class="statistical-data__text">HAPPY</span>
                    <span class="statistical-data__text statistical-data__text--display-block">CUSTOMERS</span>
                </li>
            </ul>
        </>
    )
}