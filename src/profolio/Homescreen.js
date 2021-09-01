import React from 'react'
import {  Container,  } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const Homescreen = () =>  {
    return (
        <> 
        <div className='her1'
        >
            <Container >  
        <h1 > Anyanwu Ugochukwu </h1>
        <h2 >  Web Developer.  </h2>
        </Container>
        <div className  ="text-center py-3">
             <SocialIcon className  ="svg" url="https://twitter.com/" />
               <SocialIcon className  ="svg" url="https://facebook.com/" />
               <SocialIcon className  ="svg" url="https://instagram.com/" />
               <SocialIcon className  ="svg" url="https://linkedin.com/" />
               <SocialIcon className  ="svg" url="https://githubusercontent.com/" />
       
        </div>
       
        </div>
        

        </>

    )
}

export default Homescreen
