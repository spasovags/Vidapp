import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/InboxFriendsTopContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import useSWR from 'swr'
import InboxFriendsTop from '../components/InboxFriendsTop'

const fetcher = (url) => fetch(url).then((res) => res.json());

const InboxFriendsTopContainer = (props) => {
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const userdata = JSON.parse(data)
 
    const basePathProfpics = '/profpics';
    const friendsTop = [
        { profpic: `${basePathProfpics}/${userdata[11].profpic}`,
        username: "Create",
        activity: "add",
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[1].profpic}`,
        username: "JDoe",
        activity: "live",
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[2].profpic}`,
        username: "ur mom",
        activity: "online",
        hasStory: true},
        { profpic: `${basePathProfpics}/${userdata[3].profpic}`,
        username: "blahbla bl",
        activity: "none",
        hasStory: true},        
        { profpic: `${basePathProfpics}/${userdata[2].profpic}`,
        username: "ur mom",
        activity: "online",
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[3].profpic}`,
        username: "blahbla bl",
        activity: "none",
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[14].profpic}`,
        username: "+ Widget",
        activity: "none",
        hasStory: false}
      
        ]; 
  

    return (
      <div
      className={`${styles["InboxFriendsTopContainer"]}`}>
           {friendsTop.map((friend) =>
              <InboxFriendsTop 
                friendTop={friend}
              />
       
           )}
      </div>
    ) 
}

export default InboxFriendsTopContainer 