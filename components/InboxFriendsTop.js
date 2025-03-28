import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxFriendsTop.module.css'

const InboxFriendsTop = (props) => {

  const activitySent = props.friendTop.activity;
  const hasStory = props.friendTop.hasStory;
  const userThoughtNoMessage = props.friendTop.username === 'Create' ? true : false;

  const sendContextMenu = () => {
    const activity = props.friendTop.activity;
    switch (activity) {
      case 'add':
        console.log('');
        break;
      case 'none':
      case 'online':
      case 'live':
        console.log('');
        break;
      default:
        console.log(``);
    }
  };

  const openChat = (event) => {
  
  }
console.log(' uset ', userThoughtNoMessage);
    return (
      <div
        className={`${styles["InboxFriendsTopItemContainer"]}`}>
        <div
          className={`${styles["inboxTopThought"]}`}>

           <button onClick={openChat}
             className={`${styles["addThoughtButton"]}
                     ${ userThoughtNoMessage ? `${styles["userHasNoMessage"]}` : ""  }`} >
            {props.friendTop.thought}
            
           </button> 
             
         </div>  

         <div
          className={`${styles["photoTopItemContainer"]}`}>

           <button onClick={openChat}
             className={`${styles["picFriendsTopItem"+activitySent]}
                     ${ hasStory ? `${styles["friendsTopStory"]}` : ""  }`} >
             <Image
               src={props.friendTop.profpic}
               width={70}
               height={70}
               alt="Picture of the author"
              />
           </button> 
           <button
            className={`${styles[activitySent]}`} >
              +
           </button>      
         </div>  

         <button onClick={openChat}
         className={`${styles["nameFriendsTopItem"]}`} >
          {props.friendTop.username}
         </button>   
     </div>
    ) 
}

export default InboxFriendsTop 