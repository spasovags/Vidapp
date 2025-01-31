import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxFriendsTopContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import useSWR from 'swr'
import InboxFriendsListItem from '../components/InboxFriendsListItem'

const fetcher = (url) => fetch(url).then((res) => res.json());

const InboxFriendsListContainer = (props) => {
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const userdata = JSON.parse(data)
 
    const basePathProfpics = '/profpics';
    const friendsTop = [
        { profpic: `${basePathProfpics}/${userdata[11].profpic}`,
        username: "New followers",
        date: "2d",
        action: "uhg started following you"},
        { profpic: `${basePathProfpics}/${userdata[1].profpic}`,
        username: "Activity",
        date: "9/1",
        action: "bruh2 liked your video"},
        { profpic: `${basePathProfpics}/${userdata[2].profpic}`,
        username: "ur 2nd mom",
        date: "8/12/2024",
        action: "sent a sticker"},
        { profpic: `${basePathProfpics}/${userdata[3].profpic}`,
        username: "pitbullbl",
        date: "16/11/2024",
        action: "shared photos"},        
        { profpic: `${basePathProfpics}/${userdata[2].profpic}`,
        username: "ur sis2",
        date: "20/10/2024",
        action: "Replied to this like"},
        { profpic: `${basePathProfpics}/${userdata[3].profpic}`,
        username: "user3688888",
        date: "1/2/2024",
        action: "hey how are you"}
      
        ]; 
  

    return (
      <div
      className={`${styles["InboxFriendsTopContainer"]}`}>
           {friendsTop.map((friend) =>
              <InboxFriendsListItem 
                friendTop={friend}
              />
       
           )}
      </div>
    ) 
}

export default InboxFriendsListContainer 