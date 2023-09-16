import React from 'react'
import Navbar from '../navbar/page'
import aboutstyles from "../blogss/[blogsdetails]/blogsdetails.module.css"
import Footer from "../footer/page"
const About = () => {
  return (
    <>
       <Navbar/>
      <div className={aboutstyles.bdcontainer}>
        

  
          <div className={aboutstyles.bdcontainer}>
<div className={aboutstyles.bdarea}>



            <h1>About Info</h1>
            <img src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?w=996&t=st=1694839256~exp=1694839856~hmac=62877453d7ce19ac5f87a3c6b075c63d3f1bcef9533e60935e0c8f0d5e9fbdc4" alt="aboutus" />
       
         
            <div className={aboutstyles.hed}>

<p id={aboutstyles.deshed}>Unlocking the World of Code and Technology </p>
            </div>
<p>Welcome to our coding and technology blog, where innovation meets inspiration. At Code Huntify, we are passionate about demystifying the digital realm and empowering enthusiasts, beginners, and experts alike to embark on a journey of endless possibilities. Who We Are We are a community of tech aficionados, programmers, and lifelong learners who believe that knowledge is the key to mastering the ever-evolving landscape of coding and technology. Our team of dedicated writers, developers, and tech enthusiasts is committed to delivering insightful, informative, and engaging content that helps you stay at the forefront of this dynamic field.</p>
          </div>
          </div>
        
       
      </div>
      <Footer/>
    </>
  )
}

export default About
