import React from 'react'
import { LinkWrapper } from './TypoUtils'

function SocialLinks() {
  return (
    <div className='text-gray-600 space-x-5'>
        <LinkWrapper link="https://github.com/Suraj-Ram">GitHub</LinkWrapper>
        <LinkWrapper link="/resume.pdf">Resume</LinkWrapper>
        <LinkWrapper link="https://www.linkedin.com/in/surajramchandran/">LinkedIn</LinkWrapper>
    </div>
  )
}

export default SocialLinks