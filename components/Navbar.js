import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/favicon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
      
  return (
    <nav className={`${styles["nav-background"]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <div className={`${styles["logo-close-container"]}`}>
          <Link href="#">
            <Image src={logo} height={45} width={60} alt="Link home" />
          </Link>
          <div className={`${styles["following-foryou-container"]}`}>
            <button>Following</button>
            <button>For You</button>
          </div>
          <div className={`${styles["search-container"]}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar