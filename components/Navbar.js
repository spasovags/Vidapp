import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  
    const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal
        ? `${styles["hideMenu"]} ${styles["nav-links-container"]}`
        : `${styles["nav-links-container"]}`;

    const [isActive, setIsActive] = useState(false);
    const hambClassname = isActive
            ? `${styles["active"]} ${styles["menu-container"]} ${styles["icon"]}`
            : `${styles["menu-container"]} ${styles["icon"]}`;
    
   

  return (
    <nav className={`${styles["nav-background"]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <div className={`${styles["logo-close-container"]}`}>
          <Link href="#">
            <Image src={logo} height={45} width={60} alt="Link home" />
          </Link>
          <div href="#" className={hambClassname} 
          onClick={() => {setIsModal(!isModal); setIsActive(!isActive)}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <ul className={contentClassname}>
          <li className={`${styles["menu-li"]}`}>
            <Link href="#" className={`${styles["menu-link"]}`}>account</Link>
         </li>
          <li className={`${styles["menu-li"]}`}>
            <Link href="#" className={`${styles["menu-link"]}`}>settings</Link>
            </li>
          <li className={`${styles["menu-li"]}`}>
            <Link href="#" className={`${styles["menu-link"]}`}>contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar