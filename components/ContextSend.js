import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/ContextSend.module.css'

const ContextSend = (props) => {

  const [isSentContextMenu, setIsSentContextMenu] = useState(false);

  const [isSendButtonText, setIsSendButtonText] = useState("Send");
  
  
  const sendContextMenu = (event) => {
    event.stopPropagation();

    if(!isSentContextMenu){
    setIsSentContextMenu((current) => !current); 

    setIsSendButtonText("Undo")
    setTimeout(() => {
      setIsSendButtonText("Message");
      props.callFunc(isSentContextMenu);
    },    
       3000);

  }
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
                   ${ isSentContextMenu ? `${styles["messageSentContextMenu"]}` : "" }`}>
         { isSendButtonText }
        </button>   
     </div>
    ) 
}

export default ContextSend 