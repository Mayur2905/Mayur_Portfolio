import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Profile from './Profile/Profile'
import "./Home.css";



export default function Home() {
    return (
        <>
        <div className='home-conatiner'>
            <Header/>
            <Profile/>
            <Footer/>   
        </div>
        </>
    )
}

