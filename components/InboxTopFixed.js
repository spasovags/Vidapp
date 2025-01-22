import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxTopFixed.module.css'

const InboxTopFixed = (props) => {

    return (
        <div
          className={`${styles["InboxTopFixedContainer"]}`}>
           <div
          className={`${styles["InboxSettingsContainer"]}`}>
          </div>
        </div>
      )  
    }
export default InboxTopFixed