import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/ContextSend.module.css'

const ContextSend = (props) => {

  const sendContextMenu = (event) => {
    event.stopPropagation();

    props.clickFunc(event)
  };
    return (
        <div onClick={sendContextMenu}
         className={`${styles["contextMenuFriendsListItem"]}`}>
        <div
         className={`${styles["contextMenuFriendsPicName"]}`}>
         <button onClick={sendContextMenu} className={`${styles["nameFriendsList"]}`} >
         <Image
              src={props.replies.profpicComment}
              width={40}
              height={40}
              alt="Picture of the author"
            />
         </button>
         <button onClick={sendContextMenu} className={`${styles["nameFriendsList"]}`} >
          {props.replies.commentUsername}
         </button>
        </div>
        <button onClick={sendContextMenu}
          className={`${styles["sendButtonFriendsList"]}
                   ${ props.isSentContextMenu ? `${styles["messageSentContextMenu"]}` : "" }`}>
         { props.buttonText }
        </button>   
     </div>
    ) 
}

export default ContextSend 