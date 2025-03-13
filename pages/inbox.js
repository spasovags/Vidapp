import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/inbox.module.css'
import InboxFriendsTopContainer from '../components/InboxFriendsTopContainer'
import InboxTopFixed from '../components/InboxTopFixed'
import InboxFriendsListContainer from '../components/InboxFriendsListContainer'
import FooterWhite from '../components/FooterWhite'

const inbox = () => {

 /* const sendContextMenu = (event) => {
    event.stopPropagation();

    props.clickFunc(event)
  };*/
  const [isSendButtonText, setIsSendButtonText] = useState("Send"); 
  const [isSentContextMenu, setIsSentContextMenu] = useState(false);

  const sendContextMenu = (event) => {
    event.stopPropagation();
  
    if(!isSentContextMenu){
    setIsSentContextMenu((current) => !current); 
  
    setIsSendButtonText("Undo")
    setTimeout(() => {
      setIsSendButtonText("Message");
    },    
       3000);
  
  }
  };

    return (
        <div onClick={sendContextMenu}
         className={`${styles["inboxContainer"]}`}>
         <InboxTopFixed/>
         <InboxFriendsTopContainer/>
         <InboxFriendsListContainer/>
         <FooterWhite/>
        </div>
    ) 
}

export default inbox 