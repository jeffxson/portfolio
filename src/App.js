import React from 'react'
import Homescreen from './profolio/Homescreen'
import AboutScreen from './profolio/AboutScreen'
import Resume from './profolio/Resume'
import{Container} from 'react-bootstrap'
import Header from './profolio/container/Header'
import Fotter from './profolio/container/Fotter'


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
