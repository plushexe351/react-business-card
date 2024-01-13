import React from 'react'
import Subject from "../images/Subject.PNG"
import emailLogo from "../images/email.svg"
import linkedInLogo from "../images/linkedin.svg"


const MainInfo = () => {
    return (
        <div className='main-info'>
            <img src={Subject} alt="Subject" className='subject'></img>
            <div className='info-container'>
                <h1 className='name'>Ushnish Tapaswi</h1>
                <p className='role'>Frontend Developer</p>
                <a href="/" className='website-link'>Check out my website!</a>
                <div className='social-links'>
                    <a href="mailto:example@example.com" className='social-link email'>
                        <img src={emailLogo}></img>
                        <p>Email</p>
                    </a>
                    <a href="https://www.linkedin.com/in/ushnish-tapaswi-719489267/" className='social-link linkedin'>
                        <img src={linkedInLogo}></img>
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className='text-content about'>
                    <h1>About</h1>
                    <p>I am Ushnish Tapaswi and I am a Frontend Developer. I love coding and am proficient in JavaScipt and modern web frameworks.</p>
                </div>
                <div className='text-content Interests'>
                    <h1>Interests</h1>
                    <p>I love making music, and any form of art - be it digital art or paintings. I play the piano and the guitar. I also love reading books and coding in my bare time.</p>
                </div>
            </div>
        </div>
    )
}

export default MainInfo
