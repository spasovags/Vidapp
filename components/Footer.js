import React from 'react'
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';

// import the icons you need
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faDev
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { ref: cardRef, inView: IsIconVisible } = useInView({threshold:0.5});

  return (
    <div className={`${styles["footer-container"]}`} >
      <div className={`${styles["footer-sm-icons"]} 
      ${IsIconVisible ? `${styles["iconAnim"]}` : ""}`}
        ref={cardRef} >
       <FontAwesomeIcon
        icon={faYoutube} 
        className={`${styles["iconYoutube"]}`}/>
       <FontAwesomeIcon
        icon={faLinkedin}
        className={`${styles["iconLinkedin"]}`}/>              
       <FontAwesomeIcon
        icon={faGithub}
        className={`${styles["iconGithub"]}`}/>
       <FontAwesomeIcon
        icon={faDev}
        className={`${styles["iconDev"]}`}/>  
      </div> 
      <div className={`${styles["footer-info"]}`} >
      
      </div>     
    </div>      
  )
}

export default Footer