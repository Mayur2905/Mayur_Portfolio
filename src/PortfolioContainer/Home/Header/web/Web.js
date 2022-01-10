import React from 'react'
import "./web.css"

export default function Web() {
    return (
        <>
        < div className='web'>
            <div className='web-option'>
                <a href='#Project'>
                    <i className="fa fa-folder-open"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#Skill'>
                    <i className="fa fa-laptop"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#Works'>
                    <i className="fa fa-briefcase"></i> Works
            </a>
        </div><div className='web-option'>
                <a href='#Contact'>
                    <i className="fa fa-user"></i>Contact
                </a>
            </div>
        </div>
        </>
    )
}
