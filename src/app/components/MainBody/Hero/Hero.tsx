import React from 'react'
import 'animate.css';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='Hero' id='heroSection'>
      <h1 >
        Hello!<br />
        I'm <span className='animate__animated animate__bounce animate__infinite' >Muhammad Ali</span>
      </h1>
      <h3>
        <FontAwesomeIcon icon={faQuoteLeft} className='quoteIcon'/> 
        &nbsp; Embarking on excellence <br /> in &nbsp;
        <span>
          <span className='key'>W</span>
          <span className='key'>e</span>
          <span className='key'>b</span>
          <span>-</span>
          <span className='key'>D</span>
          <span className='key'>e</span>
          <span className='key'>v</span>
          <span className='key'>e</span>
          <span className='key'>l</span>
          <span className='key'>o</span>
          <span className='key'>p</span>
          <span className='key'>m</span>
          <span className='key'>e</span>
          <span className='key'>n</span>
          <span className='key'>t</span>
        </span>
          {/* Web-Development */}  
          &nbsp;
        <FontAwesomeIcon icon={faQuoteRight} className='quoteIcon' />
      </h3>
      <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-x6n5t31i.png" alt="" />
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
      <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp" alt="" />
      <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="" />
    </div>
  )
}

export default Hero