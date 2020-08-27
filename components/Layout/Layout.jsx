import React from 'react'
import TopBar from './components/TopBar/TopBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Layout({children}) {
  return (
    <div>
      <>
        <Header />
        {children}
        <Footer />
        <a 
          href="#" 
          id="back-to-top" 
          title="Back to top" 
          style={{display: "none"}}
        >
          &uarr;
        </a>
      </>
    </div>
  )
}
