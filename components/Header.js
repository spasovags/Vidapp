import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={`${styles["header-container"]}`}>    
      <h1 className={`${styles["header-h1"]}`}>50% off</h1> 
    </div>   
  )
}

export default Header