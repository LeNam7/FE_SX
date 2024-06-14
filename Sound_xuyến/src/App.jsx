import React from 'react'
import './App.css'

import SXheader from './Components/Header/header'
import Intro from './Components/Intro/Intro'
import Service from './Components/Service/Service'
import About from './Components/About/About'
import SXFooster from './Components/Fooster/Fooster'

const App = () => {
  return (
    <div className='container' style={{width: '100%'}}>
        <SXheader/>
        <Intro/>
        <Service/>
        <About/>
        <SXFooster/>
    </div>
  )
}

export default App