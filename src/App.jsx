import React from 'react'
import Nav from './component/Nav';
import './App.css'
import Banner from './component/Banner';
import Relevant from './component/Relevant';
import Compassion from './component/Compassion'
import Benefits from './component/Benefits';
const App = () => {
  return (
    <>
    <Nav/>
    <Banner />
  <Relevant/>
  <Compassion/>
  <Benefits/>
    </>

  )
}

export default App