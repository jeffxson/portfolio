import React from 'react'
import {  Container,  } from 'react-bootstrap'
import logo from './logo.jpeg'

const AboutScreen = () => {
    return (
        <>
            <Container >  
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
                   <ul className = "basic-info">
                       <li> <b>Birthday  :</b> 30th May 199*</li>
                       <li> <b>Website  :</b> www.example.com</li>
                       <li> <b>Phone :</b> +234 903 473 683</li>
                       <li> <b>City :</b> Lagos, Nigeria. </li> 
                       </ul>
                      <ul className = "basic-info">
                      <li> <b>Age :</b> 2*</li>
                       <li> <b>Email :</b> jeffxon20@gmail.com</li>
                       <li> <b>Freelance :</b> Avalable</li>
                       <li> <b>Nationality :</b> Nigeria</li>       
                  
                      </ul>
                   
               </div>
                
              </div>
            </div>
            </div>

            <Container>
            <div className='skill'>
                <h1>Skills</h1>
                Here is my rating in web development essenentially
                <p>HTML &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp; 100%</p>
                <hr className = 'he1'size= '100' ></hr>
                <p>CSS &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp; 80%</p>
                <hr className = 'he2'size= '100' ></hr>
                <p>JAVASCRIPT &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp; 70%</p>
                <hr className = 'he3'size= '100' ></hr>
                <p>REACT &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp; 85%</p>
                <hr className = 'he4'size= '100' ></hr>
                <p>PHOTOSHOP &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp; 90%</p>
                <hr className = 'he5'size= '100' ></hr>
                <p>CREATIVITY &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp; 90%</p>
                <hr className = 'he5'size= '100' ></hr>
            </div>

            </Container >  
            </Container >  
            
            
        </>
    )
}

export default AboutScreen
