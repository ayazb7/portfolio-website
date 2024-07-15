import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi' 

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayazbaig7/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ayazb7" target="_blank"><FaGithub/></a>
        <a href="https://www.dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default Socials