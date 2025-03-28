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
        thought: userdata[0].thought,       
        activity: "add",
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[1].profpic}`,
        username: "JDoe",
        activity: "live",
        thought: userdata[1].thought,
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[2].profpic}`,
        username: "ur mom",
        activity: "online",
        thought: userdata[2].thought,
        hasStory: true},
        { profpic: `${basePathProfpics}/${userdata[3].profpic}`,
        username: "blahbla bl",
        activity: "none",
        thought: userdata[3].thought,
        hasStory: true},        
        { profpic: `${basePathProfpics}/${userdata[2].profpic}`,
        username: "ur mom",
        activity: "online",
        thought: userdata[4].thought,
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[3].profpic}`,
        username: "blahbla bl",
        activity: "none",
        thought: userdata[5].thought,
        hasStory: false},
        { profpic: `${basePathProfpics}/${userdata[14].profpic}`,
        username: "+ Widget",
        activity: "none",
        thought: userdata[6].thought,
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