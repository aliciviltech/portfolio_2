import React, { useState } from 'react'
import './SideBar.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faBagShopping, faBarChart, faBars, faBook, faBriefcase, faCircleInfo, faClose, faComment, faHouse, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'

const SideBar = () => {
    const [expandSideBar, setExpandSideBar] = useState(true);
    const [showNav, setShowNav] = useState(false);
    return (
        <div className={`SideBar ${expandSideBar ? "wideSideBar" : "narrowSideBar"} `}>
            <div className="sideBarToggle" onClick={() => { setExpandSideBar(!expandSideBar) }}><FontAwesomeIcon icon={faBars} className='icon' /></div>
            {
                expandSideBar &&
                <div className="image">
                    <div className="myPicture">
                        <img src="/images/myPicture.png" alt="myPic" />
                    </div>
                </div>

            }
            <div className="text">
                {
                    expandSideBar &&
                    <div className="heading">
                        <div className="name"><span>Engineer</span> MA</div>
                        <div className="socialLinks">
                            <FontAwesomeIcon icon={faGithub}/>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            <FontAwesomeIcon icon={faYoutube}/>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </div>
                    </div>
                }

                <div className="menuDropDown" onClick={() => { setShowNav(!showNav) }}>
                    {
                        // showNav ? <FontAwesomeIcon icon={faArrowRightFromBracket} /> : <FontAwesomeIcon icon={faAngleDown} />
                        <FontAwesomeIcon icon={faBars} />
                    }
                </div>

                <div className={`nav ${showNav ? "showNav" : "hideNav"}`}>
                    <FontAwesomeIcon icon={faClose} className='iconClose' onClick={()=>{setShowNav(!showNav) }}/>
                    <Link href={'#heroSection'} className='navLink' > <FontAwesomeIcon icon={faHouse} className='icon' /> {expandSideBar && "Home"}</Link>
                    <Link href={'#aboutSection'} className='navLink'> <FontAwesomeIcon icon={faCircleInfo} className='icon' /> {expandSideBar && "About me"}</Link>
                    <Link href={'#skillsSection'} className='navLink'> <FontAwesomeIcon icon={faBook} className='icon' /> {expandSideBar && "Skills"}</Link>
                    <Link href={'#currentProjectSection'} className='navLink'>  <FontAwesomeIcon icon={faSpinner} className='icon' /> {expandSideBar && "Current Project"}</Link>
                    <Link href={'#GiaicProjectsSection'} className='navLink'>  <img src="/images/icons/giaic.png"  /> {expandSideBar && "GIAIC Projects"}</Link>
                    <Link href={'#'} className='navLink'>  <FontAwesomeIcon icon={faBriefcase} className='icon' /> {expandSideBar && "All Projects"}</Link>
                    <Link href={'#'} className='navLink'> <FontAwesomeIcon icon={faComment} className='icon' /> {expandSideBar && "Feedback"}</Link>
                    <Link href={'#'} className='navLink'> <FontAwesomeIcon icon={faLinkedin} className='icon' /> {expandSideBar && "Go to LinkedIn"}</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar