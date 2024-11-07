import React from 'react'

import Hero from './components/hero'
import About from './about/page'

import SocialMedia from './socialmedia/page'
import ProjectMe from './projectme/page'
import Contact from './contact/page'

const page = () => {
  return (
    <div>
     
       <Hero/>
    <  About/>
      <SocialMedia/>
      <ProjectMe/>
      <Contact/>

      
    </div>
  )
}

export default page
