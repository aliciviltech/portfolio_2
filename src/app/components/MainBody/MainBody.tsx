import React, { useState, useEffect } from 'react'
import './MainBody.css'
import Hero from './Hero/Hero'
import About from './About/About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Skills from './Skills/Skills'
import CurrentProject from './CurrentProject/CurrentProject'
import GiaicProjects from './GiaicProjects/GiaicProjects'

const MainBody = () => { 
  const [moveTopBtn, setMoveTopBtn]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
        setMoveTopBtn(true);
      } else{
        setMoveTopBtn(false);
      }
    })
  },[])

  return (
    <div className='MainBody'>
        <Hero/>
        <About/>
        <Skills/>
        <CurrentProject/>
        <GiaicProjects/>
        {
          moveTopBtn &&
        <div className="moveToTop" onClick={()=>{window.scrollTo({top:0})}}>
          <FontAwesomeIcon icon={faAngleUp}/>
        </div>
        }
    </div>
  )
}

export default MainBody
