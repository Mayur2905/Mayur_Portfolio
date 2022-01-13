import React from 'react'
import "./Mobile.css"

export default function Mobile({isOpen,setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <i className="fa fa-times-circle"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                <a href='#Project'>
                        <i className="fa fa-folder-open"></i>
                        <p>Projects</p>
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#Skill'>
                        <i className="fa fa-laptop"></i>
                        Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#Works'>
                        <i className="fa fa-briefcase"></i>
                        Works
                </a>
                </div>
                <div className='mobile-option'>
                    <a href='#Contact'>
                        <i className="fa fa-user"></i>Contact
                    </a>
                </div>
            </div>

        </div>
    )
}
