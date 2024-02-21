import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faCommentDots, faCirclePlus, faVolumeXmark, faMagnifyingGlass, faL } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  const post = props.value;
  const idv =`currVid_${post.id}`;
  const idLike = `bigLike_${post.id}`;
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const basePath = '/videos';
  const basePathProfpics = '/profpics';

  const toggleIsPlaying = () => {
      setIsPlaying((current) => !current);
  };

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
  const toggleLikeVideo = () => {
    setIsLiked((current) => !current);  
  };
  const removebigRedLiked = () => {
    const bigLike = document.querySelector(`#${idLike}`);

    setTimeout(() => {
      bigLike.classList.remove(`${styles["bigRedLiked"]}`)},    
      3000);
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const handleDoubleClickLike = (event) => {
    const bigLike = document.querySelector(`#${idLike}`);

    const randRotate = getRandomInt(11);

    switch (randRotate) {
      case 0, 1, 2, 3:
        bigLike.style.rotate="-30deg"; break;
      case 4, 5, 6, 7:
        bigLike.style.rotate="30deg"; break;
      default:
        bigLike.style.rotate="0";
     }

    const newPosiX = event.clientX - 60;
    bigLike.style.left = newPosiX + "px";
    
    const newPosi = event.clientY - 130;
    const newPos = newPosi + "px";
    const oldPosi = event.clientY - 30;
    const oldPos = oldPosi + "px";
    
    document.documentElement.style.setProperty('--bigLikeY', oldPos);

    document.documentElement.style.setProperty('--bigLikeNewY', newPos);
    
    bigLike.classList.add(`${styles["bigRedLiked"]}`);    

    removebigRedLiked();
    setIsLiked(true);
   };

  return (
      <div className={`${styles["card"]}`}>     
        <video id={idv} autoPlay loop muted>
              <source src={`${basePath}/${post.vid}`}
              type="video/mp4" />
        </video>
        <button
        className={`${styles["buttonPause"]} 
        ${ isPlaying ? "" : `${styles["showButtonPause"]}` }`}
        onClick={pauseVideo}
        onDoubleClick={handleDoubleClickLike}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <div className={`${styles["controls-container"]}`} >
          <div className={`${styles["title-descr"]}`} >
            <p>{post.username}</p>
            <p className={`${styles["descr"]}`}>
              {post.description}
            </p>    
            <div className={`${styles["search-help"]}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p> Search • lorem ipsum lorem</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div> 
        </div>
        <div className={`${styles["interactions"]}`}>
        <div className={`${styles["prof-icon"]}`} >
            <Image
                  src={`${basePathProfpics}/${post.profpic}`}
                  width={40}
                  height={40}
                  alt="Picture of the author"
            />
            <FontAwesomeIcon icon={faCirclePlus} />
          </div>
          <div className={`${styles["like"]} ${styles["icon-vid"]}` } >
           <button className={`${styles["buttonInteractions"]}
                   ${ isLiked ? `${styles["videoLiked"]}` : "" }`}
              onClick={toggleLikeVideo}>
              <span class="material-symbols-outlined">
              favorite
              </span>
           </button>
           <p>{post.likes}</p>
          </div>
          <div className={`${styles["comment"]} ${styles["icon-vid"]}` } >
           <button className={`${styles["buttonInteractions"]}` } >
            <FontAwesomeIcon icon={faCommentDots} />
           </button>
          <p>{post.comments}</p>
          </div>
          <div className={`${styles["save"]} ${styles["icon-vid"]}` } >
           <button className={`${styles["buttonInteractions"]}` } > 
             <span class="material-symbols-outlined">
              bookmark
             </span>
           </button>  
           <p>{post.saved}</p>
          </div>
          <div className={`${styles["share"]} ${styles["icon-vid"]}` } >
            <button className={`${styles["buttonInteractions"]}` } >
             <span class="material-symbols-outlined">
              switch_access_shortcut
             </span>
            </button>
            <p>{post.shares}</p>
          </div>
          <div className={`${styles["sound"]}`} >
            <FontAwesomeIcon icon={faVolumeXmark} />
          </div>
        </div>
        <span class="material-symbols-outlined"
        id={idLike}>
          favorite
        </span>
     </div>
   );
}

export default Card