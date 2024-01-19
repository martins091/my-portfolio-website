import React from 'react'
import './App.css';
import { About, Banner, Contact, Header, Nav, Services, Works } from './components';

const App = () => {
  return (
    <div className='text-[white] overflow-hidden'>
    <Header />
    <Banner />
    <Nav />
    <About />
    <Services />
    <Works />
    <Contact />
    </div>
  )
}

export default App