"use client"


import { useEffect, useState } from 'react';
import styles from "./blogsdetails.module.css"
import Navbar from "../../navbar/page"
import {FaRegUserCircle} from "react-icons/fa"
import Footer from "../../footer/page"

async function fetchData(title) {
  try {
    const response = await fetch(`/api/${title}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle the error as needed
  }
}

const BlogsDetails = ({ params }) => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (params.blogsdetails) {
      fetchData(params.blogsdetails).then((data) => {
        setBlogData(data);
      });
    }
  }, [params.blogsdetails]);

  return (
    <>
       <Navbar/>
      <div className={styles.bdcontainer}>
        

        {blogData ? (
          <div className={styles.bdcontainer}>
<div className={styles.bdarea}>

<span id={styles.spanc}><button>{blogData.category}</button></span>

            <h1>{blogData.title}</h1>
            <img src={blogData.image} alt="" />
            <p id={styles.author}> <FaRegUserCircle/> {blogData.author}</p>
            <p>{blogData.description}</p>
            <div className={styles.hed}>

<p id={styles.deshed}>{blogData.deshed}</p>
            </div>
<p>{blogData.desheddes}</p>
          </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default BlogsDetails;