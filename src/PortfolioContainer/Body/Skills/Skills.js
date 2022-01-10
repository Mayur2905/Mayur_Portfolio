import React from 'react'
import "./Skills.css"
import "./skill-card.css"
import Separator from '../../Common/Separator';
import { SkillsData } from '../../Data/skill';


function Skills() {
    const data =SkillsData;
    return (
        <div>
            <Separator/>
            <label className="section-title">Skills</label> 
            <div className='skills-container'>
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className='skills-section-title'>{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return(
                                        <div className='skill-card'>
                                        <div className="skill-icon">{skill.icon}</div>
                                        <label className='skill-name'>{skill.name}</label>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
