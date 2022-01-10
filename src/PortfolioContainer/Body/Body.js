import React from 'react'
import About from './AboutMe/About'
import Contact from './ContactMe/Contact'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import Works from './Works/Works'

function Body() {
    return (
        <div className='body'>
            <section id='about'>
                <About/>
            </section>
            <section id='Project'>
                <Project/>
            </section>
            <section id='Skill'>
                <Skills/>
            </section>
            <section id='Works'>
                <Works/>
            </section>
            <section id='Contact'>
                 <Contact/>
            </section>
        </div>
    )
}

export default Body
