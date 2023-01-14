import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Head>
          <title>Kreative Search | A Hiring Platform</title>
          <meta charset="UTF-8" lang='en'/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="description" content="Kreative Search is a candidate hiring platform. A Place That Helps You To Reach Your Destiny. We do recruitment right here. We link you to the right people." />
          <meta property='og:title' content='Kreative Search | A Hiring Platform' />
          <meta property='og:description' content="Kreative Search is a candidate hiring platform. A Place That Helps You To Reach Your Destiny" />
          <meta name="keywords" content="Employee, Job, Candidate, Hiring, HR, Recruitment, Company, IT Company" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
          <link rel="shortcut icon" href="/kreative-favicon.png" sizes='any' type="image/x-icon" />
          <link rel="apple-touch-icon" href="/kreative-favicon.png" sizes='152x152' type="image/x-icon" />
          <link rel="mask-icon" href="/kreative-favicon.png" type="image/x-icon" color='#000000' />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout