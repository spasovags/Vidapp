import React, { useState } from 'react'
import ContextSend from '../components/ContextSend'
import styles from '../styles/ContextSendContainer.module.css'


const ContextSendContainer = () => {
    const [isSendButtonText, setIsSendButtonText] = useState("Send"); 
    const [isSentContextMenu, setIsSentContextMenu] = useState(false);
    const basePathProfpics = '/profpics';

    const friendsContext = [
        { time: "08-05-2045",
        profpicComment: `${basePathProfpics}/${post.profpic}`,
        thecomment: "bruh ",
        commentUsername: "John",
        commentLikes: "45k"},
        { time: "4h",
        profpicComment: `${basePathProfpics}/${post.profpic}`,
        thecomment: "Blah Blah Blah ",
        commentUsername: "trik tok",
        commentLikes: "55"},
        { time: "15h",
        profpicComment: `${basePathProfpics}/${post.profpic}`,
        thecomment: "♥️♥️♥️",
        commentUsername: "Inna Milly",
        commentLikes: "77"},
        { time: "1d",
        profpicComment: `${basePathProfpics}/${post.profpic}`,
        thecomment: "I bet this video is in reverse",
        commentUsername: "Josh",
        commentLikes: "1,677"}
        ];
  
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
    <div
    className={`${styles["contextMenuFriendsListContainer"]}`}>
          {friendsContext.map((friend) =>
            <ContextSend 
              clickFunc= {sendContextMenu}
              replies={friend}
              buttonText = {isSendButtonText}
              isSentContextMenu={isSentContextMenu}/>
     
           )}
    </div>
  )
}

export default ContextSendContainer