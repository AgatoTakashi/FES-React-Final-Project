import React, { useState } from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import List from '../components/List'

const Home = ({openList, setOpenList, myList, setMyList}) => {

  return (
    <>
        <Nav openList={openList} setOpenList={setOpenList} myList={myList} />
        <Landing />
        <Footer openList={openList} setOpenList={setOpenList} />
    </>
  )
}

export default Home
