import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';
import profilePic from '../public/profpics/profpic1.png'

// import the icons you need
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faDev
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { ref: cardRef, inView: IsIconVisible } = useInView({threshold:0.1});
  const { ref: formRef, inView: IsFormVisible } = useInView({threshold:0.5});

  return (
      <ul className={`${styles["footer-container"]}`}>
        <li className={`${styles["icon-other-info"]}`}>
         <Image
            src={profilePic}
            width={50}
            alt="Picture of the author"
          />
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={profilePic}
            width={50}
            alt="Picture of the author"
          />
          <Link href="/friends">Friends</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={profilePic}
            width={50}
            alt="Picture of the author"
          />
          <Link href="/add">add</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={profilePic}
            width={50}
            alt="Picture of the author"
          />
          <Link href="/inbox">Inbox</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Image
            src={profilePic}
            width={50}
            alt="Picture of the author"
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