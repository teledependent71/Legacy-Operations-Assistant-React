import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Operations Assistant</title>
        <meta property="og:title" content="Legacy Operations Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
