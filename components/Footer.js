import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';
import home from "../public/footerIcons/Home.jpg"
import friends from "../public/footerIcons/Friends.jpg"
import add from "../public/footerIcons/Add.jpg"
import inbox from "../public/footerIcons/Inbox.jpg"
import profile from "../public/footerIcons/Profile.jpg"

import {
  faLinkedin,
  faGithub,
  faYoutube,
  faDev
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { ref: cardRef, inView: IsIconVisible } = useInView({threshold:0.1});
  const { ref: formRef, inView: IsFormVisible } = useInView({threshold:0.5});
  const footerWidth = 30;
  const footerHeight = 30;
  const addWidth = 60;

  return (
      <ul className={`${styles["footer-container"]}`}>
        <li className={`${styles["footer-icon"]}`}>
          <Link className={`${styles["home-button"]}`} href="/">
          <Image
            src={home}
            width={footerWidth}
            height={footerHeight}
            alt="Home page"
          />
          </Link>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={friends}
            width={footerWidth}
            alt="Friends"
          />
          <Link href="/friends">Friends</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={add}
            width={addWidth}
            alt="Post"
          />
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={inbox}
            width={footerWidth}
            alt="Inbox"
          />
          <Link href="/inbox">Inbox</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={profile}
            width={footerWidth}
            alt="Your profile"
          />
          <Link href="/profile">Profile</Link>
        </li>    

     {/* <div className={`${styles["footer-sm-icons"]} 
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
        <form className={`${styles["footer-form"]}`} action="/action.php">
         <fieldset className={`${styles["footer-fieldset"]}
               ${IsFormVisible ? `${styles["formAnims"]}` : ""}`}
               ref={formRef}>
          <legend>Personal data</legend>
          <div className={`${styles["footer-radio"]}`} >
           <p>Gender</p>
           <input type="radio" id="female" name="gender" value="female"/>
           <label for="female">female</label>
           <input type="radio" id="m" name="gender" value="male"/>
           <label for="male">male</label>
           <input type="radio" id="other" name="gender" value="other"/>
           <label for="other">other</label>
          </div>

          <div className={`${styles["footer-typetext"]}`} >
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John"/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe"/>
            <input type="submit" value="SUBMIT"/>  
          </div> 
         </fieldset>            
       </form> 
  */}
   </ul>
  )
}

export default Footer