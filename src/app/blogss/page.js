"use client"

import { useEffect, useState } from "react";
import styles from "./blogss.module.css"
import Navbar from "../navbar/page";
import Link from "next/link";
import Footer from "../footer/page"
import {FaRegUserCircle} from "react-icons/fa"
const Blogss = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/blogs"); // This makes a request to your API route
        const data = await response.json();
        setBlogs(data);
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
  <>
  <Navbar/>
    <div className={styles.blogsscontainer}>
      <div className={styles.blogssheading}>
      <h1>Explore Our Popular Blogs</h1>
      <h3>Crafting prose like a painter's brush, </h3>
      <h3> we weave stories that dance in the reader's heart.</h3>
      </div>
    
      <ul className={styles.blogssarea}>
       
        {blogs.map((item) => (
          <li key={item.id}>
            <div className={styles.blogsssection}>
<div className={styles.blogssimg}>

<img src={item.image}  />
</div>
<div className={styles.categorytext}>
 <button>{item.category}</button>

</div>

            <h2>{item.title}</h2>
            
            <div className={styles.author}>
            <p><FaRegUserCircle/> {item.author}</p>
<p>{item.date}</p>
            </div>
           
           <Link href={`/blogss/${item.title}`}><button className={styles.blogssbtn}>Read More</button></Link> 
            </div>
            
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default Blogss;