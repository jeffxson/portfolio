import React from 'react'
import Homescreen from './profolio/Homescreen'
import AboutScreen from './profolio/AboutScreen'
import Resume from './profolio/Resume'
import Header from './profolio/container/Header'



const App = () => {
  return (
    <>
     <Header />
    <main className='py'> 
     < Homescreen /> 
     < AboutScreen /> 
     < Resume /> 

     
    </main>
    
  </>
  )
}

export default App