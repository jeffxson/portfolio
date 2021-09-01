import React from 'react'
import {  Container,  } from 'react-bootstrap'
import logo from './logo.jpeg'

const AboutScreen = () => {
    return (
        <>
            <Container >  
                <div className='mainer'>

               
                <h1 className= 'h11'>About</h1>
                <p className='p11'>
            Building quality websites and applications with HTML, CSS, and JavaScript. Provided front-end website development using React, HTML, CSS, Bootstrap, MongoDB Node.js and other editing software, seeks a position with a top technology firm.
            </p>
        

            
            <div className ="container1">
            <div className= "box1">
            
            <img src={logo} className  ="logo" alt="logo"/>
            </div>    
        
            <div className= "box2">
            
            <div className= 'type'>
                <h2>Web Developer</h2>
                <p>
                    Hello, i am a frontend web developer and here are basic information about me and some personal information 
                </p>
                <div className= 'new-box' >
                    <div className ='boxer1'>
                         <ul className = "basic-info">
                      
                       <li> <b>Email :</b> jeffxon20@gmail.com</li>
                       <li> <b>Phone :</b> +234 903 473 683</li>
                       <li> <b>City :</b> Lagos, Nigeria. </li> 
                       <li> <b>Freelance :</b> Avalable</li>
                       <li> <b>Nationality :</b> Nigeria</li>
                       </ul>
                    </div>
            
                   
               </div>
                
              </div>
            </div>
            </div>
            </div>
            </Container >  
            
            
        </>
    )
}

export default AboutScreen
