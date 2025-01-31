import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxFriendsListItem.module.css'

const InboxFriendsListItem = (props) => {


    return (
      <div onClick={sendContextMenu}
         className={`${styles["contextMenuFriendsListItem"]}`}>
        <div
         className={`${styles["contextMenuFriendsPicName"]}`}>
         <button onClick={sendContextMenu}
         className={`${styles["pickFriendsList"]}`} >
         <Image
              src={props.replies.profpicComment}
              width={40}
              height={40}
              alt="Picture of the author"
            />
         </button>
         <button onClick={sendContextMenu}
         className={`${styles["nameFriendsList"]}`} >
          {props.replies.commentUsername}
         </button>
        </div>
        <button onClick={sendContextMenu}
                className={`${styles["nameFriendsList"]}`} >
        { isSendButtonText }
        </button>   
      </div>
    ) 
}

export default InboxFriendsListItem 