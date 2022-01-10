import React from 'react'
import Separator from '../../Common/Separator';
import Projectcard from './Project-card';
import { ProjectData } from './Project-data';
import "./Project.css"

function Project() {
    const data= ProjectData;
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return <Projectcard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Project
