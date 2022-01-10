import React from 'react'
import './Social.css'
function Social() {
    return (
        <div className='social-contact'>
            <div className="colz">
             <div className="colz-icon">
            <a
              href="https://github.com/Mayur2905"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require('../../assets/Home/github - Copy.png')} alt='No internet'/>
            </a>
            <a
              href="https://www.linkedin.com/in/mayur-gaikwad-7385051b5/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require('../../assets/Home/linkedin - Copy.png')} alt='No internet'/>
            </a>
            <a
              href="https://www.instagram.com/mayur_gaikwad2905/"
              target="_blank"
              rel="noreferrer"
            >
               <img src={require('../../assets/Home/instagram - Copy.png')} alt='No Internnet'/>
            </a>
            <a
              href="https://www.facebook.com/mayur.gaikawad.397"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require('../../assets/Home/facebook - Copy.png')} alt='No internet'/>
            </a>
            <a
              href="https://twitter.com/GorakshaMayur"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require('../../assets/Home/twitter - Copy.png')}alt='No Internnet'/>
            </a>
            </div>
          </div>
        </div>
    )
}

export default Social;
