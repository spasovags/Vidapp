import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCirclePlus, faVolumeXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import profilePic from '../public/profpics/profpic1.png'

const Card = (props) => {
  const post = props.value;
  const idv =`currVid_${post.id}`;

  const basePath = '/videos';
  const toggleIsPlaying = () => {
      setIsPlaying((current) => !current);
        };
  const [isPlaying, setIsPlaying] = useState(true);

  const pauseVideo = () => {
    const vid = document.querySelector(`#${idv}`); 
    
    if(isPlaying && vid){     
      vid.pause(); 
      toggleIsPlaying();
    } else if(vid){
       vid.play();
       toggleIsPlaying();
    }
   
  };
  
  return (
      <div 
      className={`${styles["card"]}`}
      >     
        <video id={idv} autoPlay loop muted>
              <source src={`${basePath}/${post.vid}`}
              type="video/mp4" />
        </video>
        <button
        className={`${styles["buttonPause"]}`}
        onClick={pauseVideo}>pause</button>
        <div className={`${styles["controls-container"]}`} >
          <div className={`${styles["title-descr"]}`} >
            <p>{post.username}</p>
            <p>{post.description}</p>    
            <p className={`${styles["search-help"]}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Search• lorem ipsum</p>
          </div> 
        </div>
        <div className={`${styles["interactions"]}`} >
          <div className={`${styles["prof-icon"]}`} >
            <Image
                  src={profilePic}
                  width={50}
                  alt="Picture of the author"
            />
            <FontAwesomeIcon icon={faCirclePlus} />
          </div>
          <div className={`${styles["like"]} ${styles["icon-vid"]}` } >
            <span class="material-symbols-outlined">
              favorite
              </span>
            <p>5688</p>
          </div>
          <div className={`${styles["comment"]} ${styles["icon-vid"]}` } >
          <FontAwesomeIcon icon={faCommentDots} />
          <p>8900</p>
          </div>
          <div className={`${styles["save"]} ${styles["icon-vid"]}` } >
            <span class="material-symbols-outlined">
              bookmark
              </span>
            <p>9987</p>
          </div>
          <div className={`${styles["share"]} ${styles["icon-vid"]}` } >
            <span class="material-symbols-outlined">
              switch_access_shortcut
              </span>
            <p>77</p>
          </div>
          <div className={`${styles["sound"]}`} >
            <FontAwesomeIcon icon={faVolumeXmark} />
          </div>
        </div>
     </div>
   );
}

export default Card