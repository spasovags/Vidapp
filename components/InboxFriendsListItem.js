import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxFriendsListItem.module.css'

const InboxFriendsListItem = (props) => {


    return (
      <div 
         className={`${styles["friendsItemInbox"]}`}>
         <button 
         className={`${styles["friendsItemInboxPict"]}`} >
         <Image
              src={props.friendInbox.profpic}
              width={40}
              height={40}
              alt="Picture of the author"
            />
         </button>
         
        <div
         className={`${styles["inboxFriendsNameAction"]}`}>
         <button 
         className={`${styles["inboxFriendsName"]}`} >
          {props.friendInbox.username}
         </button>
         <button 
         className={`${styles["inboxFriendsAction"]}`} >
          {props.friendInbox.action}
         </button>        
        </div>

        <button 
                className={`${styles["inboxFriendsCount"]}`} >
        { props.friendInbox.count }
        </button>   
      </div>
    ) 
}

export default InboxFriendsListItem 