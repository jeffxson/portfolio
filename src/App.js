import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homescreen from './profolio/Homescreen'
import AboutScreen from './profolio/AboutScreen'
import Resume from './profolio/Resume'
import ContactUs from './profolio/ContactUs'
import Header from './profolio/container/Header'



const App = () => {
  return (
    <Router>
     <Header />
    <main className='py'> 
     <Route path= '/' component= {Homescreen} exact /> 
     <Route path= '/about' component= {AboutScreen} exact /> 
     <Route path= '/resume' component= {Resume} exact /> 
     <Route path= '/contact' component= {ContactUs} exact /> 
    
    </main>
  </Router>
  )
}

export default App