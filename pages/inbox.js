import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/ContextSend.module.css'
import InboxFriendsTopContainer from '../components/InboxFriendsTopContainer'

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
         className={`${styles["contextMenuFriendsListItem"]}`}>
         <InboxFriendsTopContainer/>
        </div>
    ) 
}

export default inbox 