import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useInView } from 'react-intersection-observer';

const Card = (props) => {
  const post = props.value;
  const cardAnim = "cardAnim";
  
  const basePath = '/images'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true, threshold:0.2});

  return (
      <div 
      className={`${styles["card"]}
    ${IsCardsVisible ? `${styles[`${cardAnim}`]}` : ""}`}
          ref={cardRef} >
      
        <div className={`${styles["photoCont"]}`} >
          <div className={`${styles["photoCard"]}`} >
           <Image 
           src={`${basePath}/${post.photo}`} 
           objectFit='cover'
           alt={post.alt}
           layout="fill"/>
         </div>           
        </div>    
        <div className={`${styles["text-card"]}`} >
           <p>{post.description}</p>
        </div>   
      </div>
   );
}

export default Card