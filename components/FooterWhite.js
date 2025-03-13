import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/FooterWhite.module.css'
import home from "../public/footerIcons/Home.jpg"
import friends from "../public/footerIcons/Friends.jpg"
import add from "../public/footerIcons/Add.jpg"
import inbox from "../public/footerIcons/Inbox.jpg"
import profile from "../public/footerIcons/Profile.jpg"

const Footer = () => {
  const footerWidth = 30;
  const footerHeight = 20;
  const addWidth = 60;

  return (
   <ul className={`${styles["footer-container"]}`}>
        <li className={`${styles["footer-icon"]}`}>
          <Link href="/">
          <Image
            src={home}
            height={footerHeight}
            alt="Home page"
          />
          </Link>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Link href="/friends">
            <Image
              src={friends}
              height={footerHeight}
              alt="Friends"
            />
          </Link>
          <Link href="/friends">Friends</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Link href="/add">
            <Image
              src={add}
              width={addWidth}
              alt="Post"
            />
          </Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Link href="/inbox">
            <Image
              src={inbox}
              height={footerHeight}
              alt="Inbox"
            />
          </Link>
          <Link href="/inbox">Inbox</Link>
        </li>
        <li className={`${styles["footer-icon"]}`}>
          <Link href="/profile">
            <Image
              src={profile}
              height={footerHeight}
              alt="Your profile"
            />
          </Link>
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