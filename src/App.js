import React from 'react'
import Cards from './components/Cards'
import './App.css'
import Navbar from './components/Navbar'
import './components/navbar.css'
import TextCon from './components/TextCon'

function App() {
  return (
    <div className='App'>
       
       <div className='container-fluid'>
      <Navbar/>

      </div>
      <div className='container-fluid'>
        
      <Cards/>
      </div>

      
          <TextCon/>
     
    
    </div>
  )
}

export default App