import React from 'react'
import Separator from '../../Common/Separator';
import Social from '../../Common/Social';
import "./About.css";

function About() {
    return (
        <div className='about'>
            <Separator/>
            <label className="section-title">About Me</label>
            <div className="about-top">
            <div className="about-info">
                Hello There 👋, 
                <br/>I am <span className='info-name'>Mayur</span>,
                <br/> Full stack web and mobile developer with background knowledge of React, along with a knack of building applications with utmost efficiency. A Certified Ethical Hacker with aware about website vulnerabilities. 
            </div>
            <div className="about-photo">
                <img 
                src={require('../../../assets/Home/Coding.png')}
                 className='picture' alt='No Internet'
                 />
            </div>
            </div>
            <div>
                <Social/>
            </div>
        </div>
    )
}

export default About
