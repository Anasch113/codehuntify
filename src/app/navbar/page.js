import React from 'react'
import styles from "../page.module.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
       <nav className={styles.mainnav}>
       <ul>
        
       <Link href='/'>  <li className={styles.li}  >Home</li></Link>
       <Link href='/about'>   <li className={styles.li} >About</li></Link>
       <Link href='/blogss'><li className={styles.li} >Blog</li></Link>
       </ul>
       </nav>
    </div>
  )
}

export default Navbar
