"use client"
import React from 'react'
import styles from "./page.module.css"
import Navbar from './navbar/page'
import styless from "../../src/app/blogss/blogss.module.css"

import {FaRegUserCircle} from "react-icons/fa"
import Link from 'next/link'
import Footer from './footer/page'




const Page = () => {

  return (
    <>
    <Navbar/>
    <style jsx global>
      {
        `
      .blog-heading h2{
        text-align:center;
        margin-top:20px;
        font-size:30px
      }
        `
  
      }
    </style>
 
    <div className={styles.maincontainer}>
      
       <div className={styles.herocontainer}>

      <h1  className={styles.helloh1}> Code Huntify </h1> 
      <span className={styles.smallhed}>
      <h4>Welcome to a world where knowledge meets inspiration, and curiosity finds its spark. </h4>
      <h4>Your Journey Starts Here.!</h4>
      </span>
      
      <div className={styles.btns}>
       <Link href={"/blogss"}> <button className={styles.btn}>Our Blogs</button></Link>
       <Link href={"/about"}> <button id={styles.blue} className={styles.btn}>About Info</button></Link>
      </div>
      
       </div>
       <div className='blog-heading'>
<h2>Popular Blogs</h2>

      </div>
       <div id={styles.blogssarea} className={styless.blogssarea}>
      
      

        <div id={styles.blogsssection1} className={styless.blogsssection}>
          <div className={styless.blogssimg}>
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220714150931/JavaScript-Introduction.jpg"alt="" />
          </div>
          <div className={styless.categorytext}>
 <button>Language</button>

</div>
          <h2>JavaScript: The Key to Dynamic Web Development</h2>
          <div className={styless.author}>
          <p id={styless.authorr2}><FaRegUserCircle/> Guido van Rossum</p>
          <p>13-09-2023</p>
          </div>
        <Link href={"/blogss"}><button id={styles.btnsss1} className={styless.blogssbtn}>Read More</button></Link> 
        </div>
        <div id={styles.blogsssection2} className={styless.blogsssection}>
        <div className={styless.blogssimg}>

            <img src="https://zemez.io/wp-content/uploads/2022/10/python-1024x576.png"alt="" />
          </div>
          <div className={styless.categorytext}>
 <button>Language</button>

</div>
          <h2> Python: Unleashing the Power of Simplicity in Programming</h2>
          <div className={styless.author}>
          <p id={styless.authorr1}><FaRegUserCircle/> Guido van Rossum</p>
          <p>11-09-2023</p>
          </div>
         
          <Link href={"/blogss"}><button id={styles.btnsss2} className={styless.blogssbtn}>Read More</button></Link> 
        </div>
      </div>
   
    </div>
    <Footer/>
    </>
  )
}

export default Page
