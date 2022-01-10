import React from "react";
import Typical from 'react-typical';
import './Profile.css';


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
        <div className="colz">
             <div className="colz-icon">
            <a
              href="https://www.linkedin.com/in/mayur-gaikwad-7385051b5/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              href="https://github.com/Mayur2905"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github-square"></i>
            </a>
            <a
              href="https://www.instagram.com/mayur_gaikwad2905/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/mayur.gaikawad.397"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a
              href="https://twitter.com/GorakshaMayur"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter-square"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            {" "}
            Hello, I'M <span className="highlighted-text">Mayur</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={
                    [
                    "Full Stack Developer 👨",
                    1000,
                    "Compitative Programmer 💻",
                    1000,
                    "React Js Developer 🔯 ",
                    1000,
                    "BackEnd Developer 📊 ",
                    1000,
                    "Certified Ethical Hacker 😎 ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knock of building application wit front and back end
                operation.
              </span>

            </span>
          </div>
          <div className="profile-options">
            <a href="#Contact">
              <button className="btn primary-btn">
                {" "}
                Hire me
                {""}
              </button>
            </a>
            <a href="https://github.com/Mayur2905/certificate/raw/master/Mayur%20Resume-Mayur-Gaikwad.pdf" download="Mayur_Resume.pdf">
                      <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
