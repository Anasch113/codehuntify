import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  title: 'Code Huntify | Coding and Programming Blogs',
  description: 'Code Huntify is the nextjs application where you find numerous blogs related to coding , programming , technology and artifical intelligence. Code Huntify offers comprehensive guide on modern programming languages and frameworks like Javascript, Pyhton, Reactjs and Nextjs etc.  ',
  
 
}

export default function RootLayout({ children }) {
  return (
    <>

    <html lang="en">

      <body className={inter.className}>
      
        {children}
      
      </body>
    </html>
    </>
  )
}
