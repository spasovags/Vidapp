import React, { useState } from 'react'
import ContextSend from '../components/ContextSend'
import styles from '../styles/ContextSendContainer.module.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

const ContextSendContainer = () => {
   
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const userdata = JSON.parse(data)
 
    const basePathProfpics = '/profpics';
    const friendsContext = [
        { profpicComment: `${basePathProfpics}/${userdata[0].profpic}`,
        commentUsername: "Nope"},
        { profpicComment: `${basePathProfpics}/${userdata[1].profpic}`,
        commentUsername: "user246887"},
        { profpicComment: `${basePathProfpics}/${userdata[2].profpic}`,
        commentUsername: "uihhdghn"},
        { profpicComment: `${basePathProfpics}/${userdata[3].profpic}`,
        commentUsername: "ssddddddddxx"}
        ];
  // put this function and variables in Contextsend
       
   return (   
    <div
    className={`${styles["contextMenuFriendsListContainer"]}`}>
          {friendsContext.map((friend) =>
            <ContextSend 
             /* clickFunc= {sendContextMenu}*/
              replies={friend}
              /*buttonText = {isSendButtonText}
              isSentContextMenu={isSentContextMenu}*//>
     
           )}
    </div>
  )
}

export default ContextSendContainer