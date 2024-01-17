import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useInView } from 'react-intersection-observer';

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
            <p>profpic</p>
          </div>
          <div className={`${styles["like"]}`} >
            <p>5688</p>
          </div>
          <div className={`${styles["comment"]}`} >
          <p>8900</p>
          </div>
          <div className={`${styles["save"]}`} >
            <p>9987</p>
          </div>
          <div className={`${styles["share"]}`} >
            <p>77</p>
          </div>
          <div className={`${styles["sound"]}`} >
            <p>sound</p>
          </div>
        </div>
         
     {/*  <div className={`${styles["photoCont"]}`} >
         <div className={`${styles["photoCard"]}`} >
           <video autoPlay controls loop muted>
              <source src={`${basePath}/${post.vid}`}
              type="video/mp4"
              />
           </video>
         </div>           
        </div>    
        <div className={`${styles["text-card"]}`} >
           <p>{post.description}</p>
  </div> */} 
      </div>
   );
}

export default Card