import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxTopFixed.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

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
          </div>
          <div className={`${styles["searchTopFixed"]}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      )  
    }
export default InboxTopFixed