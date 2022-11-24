import React from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
    
    return (
        <div>
            <div className="portfolio__filters">
                {projectsNav.map((item, index) => {
                    return <span key={index} className="portfolio__item">{item.name}</span>
                })}
            </div>

            <div className="portfolio__container container grid">
                {projectsData.map((item) => {
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Works