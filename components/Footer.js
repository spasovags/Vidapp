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
  const { ref: cardRef, inView: IsIconVisible } = useInView({threshold:0.2});

  return (
    <div className={`${styles["footer-container"]}`} >
      <div className={`${styles["footer-sm-icons"]}`} >
       <FontAwesomeIcon
        icon={faYoutube} 
        className={`${styles["iconYoutube"]}
        ${IsIconVisible ? `${styles["iconAnim"]}` : ""}`}
        ref={cardRef} />
       <FontAwesomeIcon
        icon={faLinkedin}
        className={`${styles["iconLinkedin"]}
        ${IsIconVisible ? `${styles["iconAnim"]}` : ""}`}
        ref={cardRef} />              
       <FontAwesomeIcon
        icon={faGithub}
        className={`${styles["iconGithub"]}
        ${IsIconVisible ? `${styles["iconAnim"]}` : ""}`}
        ref={cardRef} />
       <FontAwesomeIcon
        icon={faDev}
        className={`${styles["iconDev"]}
        ${IsIconVisible ? `${styles["iconAnim"]}` : ""}`}
        ref={cardRef} />  
      </div> 
      <div className={`${styles["footer-info"]}`} >
      
      </div>     
    </div>      
  )
}

export default Footer