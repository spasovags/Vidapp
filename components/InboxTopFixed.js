import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxTopFixed.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCaretDown, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

const InboxTopFixed = (props) => {

    return (
        <div
          className={`${styles["InboxTopFixedContainer"]}`}>
            <button
             className={`${styles["newChat"]}`} >
              <FontAwesomeIcon icon={faPlus} />
            </button> 
           <div
          className={`${styles["InboxSettingsContainer"]}`}>
            <button
             className={`${styles["inboxTopCenter"]}`} >
              Inbox   
            </button> 
            <button
             className={`${styles["statusTopCenter"]}`} >
              <FontAwesomeIcon icon={faCircle} />   
              <FontAwesomeIcon icon={faCaretDown} />    
            </button> 
          </div>
          <div className={`${styles["searchTopFixed"]}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      )  
    }
export default InboxTopFixed