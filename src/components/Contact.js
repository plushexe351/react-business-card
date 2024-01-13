import React from 'react'
import twitterLogo from "../images/twitter.svg"
import facebookLogo from "../images/facebook.svg"
import instagramLogo from "../images/instagram.svg"
import githubLogo from "../images/github.svg"

const Contact = () => {
    return (
        <div className='contact'>
            <a href="https://twitter.com/iam_ushnish" target="_blank" rel="noreferrer"><img src={twitterLogo} alt="twitter-logo"></img></a>
            <a href="/"><img src={facebookLogo} alt="facebook-logo"></img></a>
            <a href="https://www.instagram.com/ush.nsfw/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="instagram-logo"></img></a>
            <a href="https://github.com/plushexe351" target="_blank" rel="noreferrer"><img src={githubLogo} alt="github-logo"></img></a>
        </div>
    )
}

export default Contact
