import React from 'react'
import './Footer.css'
import githubLogo from '../assets/GithubLogo.png'
import linkedInLogo from '../assets/linkedin.png'
const githubRepoURL = 'https://github.com/GigiAvila/Weather-App'
const linkedInURL = 'https://www.linkedin.com/in/gisela-avila-203ba33a/'

const Footer = () => {
  return (
    <footer>
      <div className='footerIcons'>
        <a href={githubRepoURL} target='_blank' rel='noopener noreferrer'>
          <img src={githubLogo} alt='GitHub' />
        </a>
        <a href={linkedInURL} target='_blank' rel='noopener noreferrer'>
          <img src={linkedInLogo} alt='LinkedIn' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
