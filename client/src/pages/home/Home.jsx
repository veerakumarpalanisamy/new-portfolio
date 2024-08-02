import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Content from '../../components/content/Content'
import Footer from '../../components/footer/Footer'
import Skills from '../../components/skills/Skills'

const Home = () => {
  return (
    <div>
        <Header />
        <Content />
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Home