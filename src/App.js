import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Homescreen from './profolio/Homescreen'
import AboutScreen from './profolio/AboutScreen'
import Resume from './profolio/Resume'
import ContactUs from './profolio/ContactUs'
import Header from './profolio/container/Header'



const App = () => {
  return (
    <BrowserRouter>
     <Header />
    <main className='py'> 
    <Routes>
     <Route path= '/' component= {Homescreen}  /> 
     <Route path= '/about' component= {AboutScreen}  /> 
     <Route path= '/resume' component= {Resume}  /> 
     <Route path= '/contact' component= {ContactUs}  /> 
     </Routes>
    
    </main>
  </BrowserRouter>
  )
}

export default App
