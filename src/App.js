import React from 'react'
import Cards from './components/Cards'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './components/footer.css'
import './components/navbar.css'
import TextCon from './components/TextCon'

function App() {
  return (
    <div className='App'>
       
       <div className='container-fluid'>
      <Navbar/>

      </div>
      <div className=
      'container-fluid'>
        
      <Cards/>
      </div>
    
    </div>
  )
}

export default App