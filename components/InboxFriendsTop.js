import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxFriendsTop.module.css'

const InboxFriendsTop = (props) => {

 /* const sendContextMenu = (event) => {
    event.stopPropagation();

    props.clickFunc(event)
  };*/
  const [isSendButtonText, setIsSendButtonText] = useState("Send"); 
  const [isSentContextMenu, setIsSentContextMenu] = useState(false);

  const openChat = (event) => {
  
  }


    return (
      <div
        className={`${styles["InboxFriendsTopItemContainer"]}`}>
         <button onClick={openChat}
         className={`${styles["picFriendsTopItem"]}`} >
         <Image
              src={props.friendTop.profpic}
              width={40}
              height={40}
              alt="Picture of the author"
            />
         </button>
         <button onClick={openChat}
         className={`${styles["nameFriendsTopItem"]}`} >
          {props.friendTop.username}
         </button>      
      </div>
    ) 
}

export default InboxFriendsTop 