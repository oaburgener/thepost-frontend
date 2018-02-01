import React from 'react';
import  Navbar  from './Navbar'
import Footer from './Footer'

const About = () => {


  return (
  <div className='about-container'>
    <h1 className= "about-title">About PRO-FILE & The Post</h1>
    <img className= "about-image" src= {require("../logos/partnersPhoto.jpg")} height="220" width="293" alt="Image" />
    <p className="about-paragraph">
      PRO-FILE is a networking platform focused on a specific demographic, which makes us capable of developing our model to a give voice to collegiate athletes, amateur athletes, women and men. We are helping everyone find career opportunities and also providing support for teams to find new talent. We are creating a global community: built by athletes for athletes.
    </p>
    <p className="about-paragraph">
      The Post is an extension of PROFILE, intended to embody the core concepts of what PRO-FILE represents.  It is a platform that allows athletes
      to share their stories to an audience seeking inspiration.  These are stories and testimonials writtend by real athletes, for athletes.
    </p>
  </div>
  )
}

export default About
