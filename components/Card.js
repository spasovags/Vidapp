import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import profilePic from '../public/profpics/profpic1.png'

const Card = (props) => {
  const post = props.value;
  const cardAnim = "cardAnim";
  
  const basePath = '/videos'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true, threshold:0.2});

  return (
      <div 
      className={`${styles["card"]}`}
      >     
        <video autoPlay controls loop muted>
              <source src={`${basePath}/${post.vid}`}
              type="video/mp4" />
        </video>
        <div className={`${styles["controls-container"]}`} >
          <div className={`${styles["title-descr"]}`} >
            <p>{post.description}</p>
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
            <p>sound</p>
          </div>
        </div>
     </div>
   );
}

export default Card