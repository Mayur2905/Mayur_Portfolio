import React from 'react';
import "./Project-card.css";

function Projectcard({project}) {
    return (
        <div>
        <div className='project-card'>
            <div className="project-info">
                <label  className="project-title">Box-office</label>
                <div className="project-links">
                    <a href="https://mayur2905.github.io/box-office/#/" className="project-link">
                    <div className="link-button">
                     <i class="fa fa-globe"></i>Demo
                    </div>
                    </a>
                    <a href="https://github.com/Mayur2905/box-office" className="project-link">
                    <div className="link-button">
                     <i class="fa fa-github"></i>Git-Hub Link
                    </div>
                    </a>
                </div>
                <p>This is a simple website made up of ReactJS.<br/>
with the hooks like useState, useEffect, React-router.<br/>
We can search shows and see the information about a show like summary, cast, seasons and date of aired.
We can also search about actors and can see their country and alive or dead.
                </p>
                <div className="project-tag">
                    <lable >
                        <label className="tag">React-JS</label> <label className="tag">Node-JS</label><label className="tag">JSX</label><label className="tag">React-Hooks</label> <label className="tag">API</label> 
                    </lable>
                </div>
            </div>
            <img src={require('../../../assets/Home/Box-Office.JPG')} alt='No internet'/>
        </div>
        <div className='project-card'>
            <div className="project-info">
                <label  className="project-title">TIC-TAC-TEO</label>
                <div className="project-links">
                    <a href=" https://tictacteogame.surge.sh/" className="project-link">
                    <div className="link-button">
                     <i class="fa fa-globe"></i>Demo
                    </div>
                    </a>
                    <a href="https://github.com/Mayur2905/TicTacToe" className="project-link">
                    <div className="link-button">
                     <i class="fa fa-github"></i>Git-Hub Link
                    </div>
                    </a>
                </div>
                <p>This is my first project using reactjs framework.<br/> 
                It is a simple web app where anyone can play TicTacTeo Game.<br/>
                We can see game winner or get result as Tie!! and also restart new game </p>
                <div className="project-tag">
                    <lable >
                        <label className="tag">React-JS</label> <label className="tag">Node-JS</label><label className="tag">JSX</label><label className="tag">React-Hooks</label> 
                    </lable>  
                </div>
            </div>
            <img src={require('../../../assets/Home/Capture.JPG')} alt='No internet'/>
        </div>
        <div className='project-card'>
            <div className="project-info">
                <label  className="project-title">Mobile Shoppee</label>
                <div className="project-links">
                    {/* <a href="#" className="project-link">
                    <div className="link-button">
                     <i class="fa fa-globe"></i>Demo
                    </div>
                    </a> */}
                    <a href="https://github.com/Mayur2905/Mobile-Shoppee" className="project-link">
                    <div className="link-button">
                     <i class="fa fa-github"></i>Git-Hub Link
                    </div>
                    </a>
                </div>
                <p>It is a simple website that sells mobile phones.<br/>
                    It is made by using HTML, CSS, Bootstrap, PHP, and MYSQL, JQUERY and Works on the WAMP server.<br/>
                    It can store the user details,product details,their cart details and payment details in backend.<br/>
                    On Mobile Shoppee user can SignUp to make account , Login with existing account, add product to cart,<br/> apply coupon code to get 2% OFF and fill his payment details.
                </p>
                <div className="project-tag">
                    <lable >
                        <label className="tag">HTML</label><label className="tag">CSS</label><label className="tag">Bootstrap</label><label className="tag">PHP</label><label className="tag">MYSQL</label>
                            <lable className="tag">JQUERY</lable> 
                    </lable>
                </div>
            </div>
            <img src={require('../../../assets/Home/Mobile_Shoppee.png')} alt='No internet'/>
        </div>
    </div>
    )
}

export default Projectcard;
